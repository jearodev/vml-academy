const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectMongoDB, client } = require('./db');
const routes = require('./routes');
const { corsOptions } = require('./middleware');

dotenv.config();

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

connectMongoDB();

process.on('SIGINT', async () => {
  await client.close();
  process.exit();
});

module.exports = app;
