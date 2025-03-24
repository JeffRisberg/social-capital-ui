import {surveysList} from "../mocks/surveys.mjs";

var nextId = 100;

export const getSurveys = async (req, res) => {
   console.log("sending surveys")

   res.send({
      'status': 'ok',
      data: surveysList
   });
}
export const postSurvey = async (req, res) => {
   const name = req.body.name
   console.log("posted " + name)

   const survey = {id: nextId++, name: name}

   surveysList.push(survey)

   res.send(survey);
}
export const deleteSurvey = async (req, res) => {
   const id = req.body.id
   console.log("delete " + id)

   //surveysList = surveysList.filter(item => item.id !== id)

   res.send({
      'status': 'ok',
   });
}

