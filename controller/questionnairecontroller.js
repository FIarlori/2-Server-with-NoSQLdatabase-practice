const createQuestionnaire = async ({
  questionnaireParams,
  questionnaireModel,
}) => {
  return await questionnaireModel.create(questionnaireParams);
};

const getQuestionnaireById = async ({
  questionnaireId,
  questionnaireModel,
}) => {
  return await questionnaireModel.findById(
    questionnaireId,
    'date sleep training organizationTime screenUsage drinks _id',
  );
};


const questionnaireController = {createQuestionnaire, getQuestionnaireById};
module.exports = questionnaireController;
