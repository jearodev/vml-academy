const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

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

module.exports = { connectMongoDB, client };
