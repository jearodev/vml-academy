const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const corsOptions = {
    origin: ['*'],
    methods: "GET,HEAD,POST",
    allowedHeaders: ['Content-type', 'Application/json'],
    optionsSuccessStatus: 200,
};

module.exports = { corsOptions, upload };
