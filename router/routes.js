require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const questionnaireModel = require('../models/Mongoschema');
const createQuestionnaire = require('../controller/questionnairecontroller');

const router = express.Router();

const uri = process.env.DB_URI;

// GET /health --> returns database status
router.get('/health', function (req, res) {
  try {
    mongoose.connect(uri); //TODO: ask for connection status ¿await mongoose.authenticate().then(() =>?
    res.status(200).set('Content-Type', 'application/json').send({ response: 'Connection has been established successfully.' });
  } catch (error) {
    res.status(500).set('Content-Type', 'application/json').send('Unable to connect to the database:');
  }
});

// POST /questionnaire --> receives the questionnaire and stores it in the database
router.post('/questionnaire', async (req, res) => {
  try {
    const questionnaireParams = req.body;
    const questionnaire = await createQuestionnaire({
      questionnaireParams,
      questionnaireModel,
    });
    res.status(200).set('Content-Type', 'application/json').send(questionnaire);
  } catch (error) {
    res.status(500).set('Content-Type', 'application/json').send(error);
  }
});

module.exports = router;

// GET /questionnaire/id: --> returns the questionnaire
