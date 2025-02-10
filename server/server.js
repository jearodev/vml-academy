const express = require('express');
const multer = require('multer');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const path = require('path');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectMongoDB() {
  try {
    await client.connect();
    console.log("Conectado a MongoDB!");
  } catch (error) {
    console.error("No se pudo conectar a MongoDB:", error);
  }
}

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const corsOptions = {
  origin: ['http://localhost:3000', 'https://vmlacademy.vercel.app', 'https://www.vmlacademy.uy'],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/upload', upload.single('file'), async (req, res) => {
  const { file, body } = req;

  if (!file) {
    return res.status(400).send('No se subió un archivo.');
  }

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `uploads/${Date.now()}_${file.originalname}`,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    const command = new PutObjectCommand(params);
    const data = await s3.send(command);

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
    res.send('Archivo y datos subidos con éxito.');
  } catch (error) {
    console.error('Error al guardar en S3 o MongoDB:', error);
    res.status(500).send('Error al procesar tu solicitud.');
  }
});

// Asegúrate de que esta ruta está antes de servir archivos estáticos
app.get('/api/registros', async (req, res) => {
  console.log('Solicitud GET recibida en /api/registros');
  try {
    const collection = client.db("personas").collection("vmlacademy");
    const files = await collection.find({}).toArray();
    console.log('Datos recuperados:', files); 
    res.json(files); 
  } catch (error) {
    console.error('Error al recuperar datos de MongoDB:', error);
    res.status(500).send('Error al recuperar datos.');
  }
});



app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
  connectMongoDB();
});

process.on('SIGINT', async () => {
  await client.close();
  process.exit();
});