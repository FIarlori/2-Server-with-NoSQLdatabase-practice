const createQuestionnaire = async ({
  questionnaireParams,
  questionnaireModel,
}) => {
  return await questionnaireModel.create(questionnaireParams);
};

const questionnaireController = createQuestionnaire;
module.exports = questionnaireController;
