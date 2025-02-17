import express from "express"
import multer from "multer"
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"
import { MongoClient, ServerApiVersion } from "mongodb"
import cors from "cors"
import compression from "compression"
import NodeCache from "node-cache"

const app = express()

// S3 Configuration
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
})

// MongoDB Connection
let cachedClient = null
let cachedDb = null

async function connectToDatabase() {
  if (cachedDb) return { client: cachedClient, db: cachedDb }

  const client = new MongoClient(process.env.MONGO_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  })

  await client.connect()
  const db = client.db("personas")

  cachedClient = client
  cachedDb = db

  return { client, db }
}

// Multer Configuration
const storage = multer.memoryStorage()
const upload = multer({ storage: storage, limits: { fileSize: 5 * 1024 * 1024 } })

// CORS Configuration
const corsOptions = {
  origin: ["http://localhost:3000", "https://vml-academy-cmiu.vercel.app/", "https://www.vmlacademy.cl"],
  credentials: true,
  methods: ["GET", "POST", "OPTIONS"],
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(compression())

// Inicializar caché
const cache = new NodeCache({ stdTTL: 600 })

// Middleware para validación temprana
const validateUpload = (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ error: "No se subió un archivo." })
  }
  next()
}

// Routes
app.post("/api/upload", upload.single("file"), validateUpload, async (req, res) => {
  const { file, body } = req

  try {
    // Subir a S3 de forma asíncrona
    const s3UploadPromise = s3.send(
      new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `uploads/${Date.now()}_${file.originalname}`,
        Body: file.buffer,
        ContentType: file.mimetype,
      }),
    )

    // Preparar documento para MongoDB
    const doc = {
      fileName: file.originalname,
      filePath: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/uploads/${Date.now()}_${file.originalname}`,
      uploadDate: new Date(),
      userData: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        university: body.university,
        major: body.major,
        motivation: body.motivation,
      },
    }

    // Conectar a la base de datos e insertar documento
    const { db } = await connectToDatabase()
    const collection = db.collection("vmlacademy")
    const dbInsertPromise = collection.insertOne(doc)

    // Esperar a que ambas operaciones se completen con un tiempo límite
    const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 9000))

    await Promise.race([Promise.all([s3UploadPromise, dbInsertPromise]), timeout])

    res.status(200).json({ message: "Archivo y datos subidos con éxito." })
  } catch (error) {
    console.error("Error:", error)
    res.status(500).json({
      error: "Error al procesar tu solicitud",
      message: process.env.NODE_ENV === "development" ? error.message : undefined,
    })
  }
})

app.get("/api/registros", async (req, res) => {
  try {
    // Verificar si los datos están en caché
    const cachedData = cache.get("registros")
    if (cachedData) {
      return res.json(cachedData)
    }

    // Si no están en caché, obtener de la base de datos
    const { db } = await connectToDatabase()
    const collection = db.collection("vmlacademy")
    const files = await collection.find({}).toArray()

    // Guardar en caché para futuras solicitudes
    cache.set("registros", files)

    res.json(files)
  } catch (error) {
    console.error("Error:", error)
    res.status(500).json({ error: "Error al recuperar datos." })
  }
})

// Global error middleware
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({
    error: "Error interno del servidor",
    message: process.env.VERCEL_ENV === "development" ? err.message : undefined,
  })
})

export default app

