require('dotenv').config();
const logger = require('./utils/logger');
const mongoose = require('mongoose');
const express = require('express');
const questionnaireModel = require('../models/Mongoschema');
const questionnaireController = require('../controller/questionnairecontroller');

const router = express.Router();

/**
 * @api {get} /health  returns database status
 */
router.get('/health', function (req, res) {
  const dbState = mongoose.STATES[mongoose.connection.readyState];
  logger.info('Database status:' + dbState);  
  res.set('Content-Type', 'application/json').send({ response: dbState });
});

/**
 * @api {post} /questionnaire  receives the questionnaire and stores it in the database
 */
router.post('/questionnaire', async (req, res) => {
  try {
    const questionnaireParams = req.body;
    const questionnaire = await questionnaireController.createQuestionnaire({
      questionnaireParams,
      questionnaireModel,
    });
    res.status(200).set('Content-Type', 'application/json').send(questionnaire);
    logger.info('Questionnaire created. ');
  } catch (error) {
    if (error.name === "ValidationError"){
    logger.info('Questionnaire not created due to incorrect data.');
    return res.status(400).set('Content-Type', 'application/json').send({error: error.message});
    } 
    else {
      logger.info('Questionnaire not created due to server error.');
      return res.status(500).set('Content-Type', 'application/json').send({error: error.message});
    }
  }
});

/**
 * @api {get} /questionnaires/:id returns the questionnaire
 * @apiParams {String} id questionnaire unique id 
 */
router.get('/questionnaires/:id', async (req, res) => {
  try {
    const questionnaireId = req.params.id;
    const result = await questionnaireController.getQuestionnaireById({
      questionnaireId,
      questionnaireModel,
    });
    if (result) {
      res.status(200).send(result);
      logger.info('Questionnaire obtained. ');
    } else {
      res.status(404).set('Content-Type', 'application/json').send({message: 'questionnaire not found'});
      logger.info('Questionnaire not found due to bad request. ');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
    logger.info('Questionnaire not found due to server error. ');
  }
});

module.exports = router;