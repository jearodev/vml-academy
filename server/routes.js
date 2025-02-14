const express = require('express');
const { PutObjectCommand } = require('@aws-sdk/client-s3');
const { client } = require('./db');
const { s3 } = require('./s3');
const { upload } = require('./middleware');

const router = express.Router();

router.post('/upload', upload.single('file'), async (req, res) => {
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
        await s3.send(command);

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

router.get('/registros', async (req, res) => {
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

router.post("/test-mongo-connection", async (req, res) => {
    try {
        await client.connect()
        const collection = client.db("personas").collection("vmlacademy")

        const testDoc = {
            fileName: "test_file.txt",
            filePath: "https://example.com/test_file.txt",
            uploadDate: new Date(),
            userData: {
                firstName: "Test",
                lastName: "User",
                email: "test@example.com",
                university: "Test University",
                major: "Test Major",
                motivation: "Testing MongoDB insertion",
            },
        }

        await collection.insertOne(testDoc)
        res.status(200).json({ message: "Test document successfully inserted into MongoDB!" })
    } catch (error) {
        console.error("Error connecting to MongoDB:", error)
        res.status(500).json({ error: "Failed to connect to MongoDB", details: error.message })
    }
})

module.exports = router;
