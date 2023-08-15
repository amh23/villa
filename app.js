require('dotenv').config();
const mongodbUrl = process.env.DATABASE_URL;
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const villaService = require('./services/VillaService');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api',routes);

mongoose.connect(mongodbUrl);
const database = mongoose.connection;

database.on('error', (error) =>{
    console.log(error);
});

database.once('connected', () => {
    console.log('Database Connected');
});

villaService.initDataFilled();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`)
});
