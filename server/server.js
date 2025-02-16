const express = require('express');
const multer = require('multer');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');

require('dotenv').config();

const app = express();

// Configuración de S3
const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// MongoDB - Usar una conexión por solicitud
let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(process.env.MONGO_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  await client.connect();
  cachedClient = client;
  return client;
}

// Configuración de Multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Configuración de CORS
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      'http://localhost:3000',
      'https://vml-academy-cmiu.vercel.app/',
      'https://www.vmlacademy.cl'
    ];

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
};

// Aplicar CORS como middleware
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    // Agrega timeout específico para esta ruta
    req.setTimeout(300000);

    const { file, body } = req;

    if (!file) {
      return res.status(400).json({ error: 'No se subió un archivo.' });
    }

    // Subir a S3
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `uploads/${Date.now()}_${file.originalname}`,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    const command = new PutObjectCommand(params);

    console.log(command)
    await s3.send(command);

    // Guardar en MongoDB
    const client = await connectToDatabase();
    const collection = client.db("personas").collection("vmlacademy");

    const doc = {
      fileName: file.originalname,
      filePath: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${params.Key}`,
      uploadDate: new Date(),
      userData: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        university: body.university,
        major: body.major,
        motivation: body.motivation,
      },
    };

    await collection.insertOne(doc);
    res.status(200).json({ message: 'Archivo y datos subidos con éxito.' });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      error: 'Error al procesar tu solicitud',
      message: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

app.get('/api/registros', async (req, res) => {
  try {
    const client = await connectToDatabase();
    const collection = client.db("personas").collection("vmlacademy");
    const files = await collection.find({}).toArray();
    res.json(files);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error al recuperar datos.' });
  }
});

// Middleware de error global
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    error: 'Error interno del servidor',
    message: process.env.VERCEL_ENV === 'development' ? err.message : undefined
  });
});

// Exportar la aplicación para Vercel
module.exports = app;
