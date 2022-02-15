require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./router/routes');

//set express app
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = process.env.PORT;
const uri = process.env.DB_URI;

//connect to mongodb
mongoose.connect(uri);

app.use('/', router);
app.listen(port, console.log('API rest running at port' + port));
