require('dotenv').config();
const logger = require('./utils/logger');
const express = require('express');
const mongoose = require('mongoose');
const router = require('./src/router/routes');

//set express app
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = process.env.PORT;
const uri = process.env.DB_URI;

//connect to mongodb
mongoose.connect(uri);

app.use('/', router);
app.listen(port, ()=> {
    console.log('API rest running at port' + port);
    logger.info('Server started and running on port' + port)
});
