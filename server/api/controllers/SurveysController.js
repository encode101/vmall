/**
 * SurveysController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  createSurvey: function(req, res){
    Surveys.createSurvey(req.body).then(function(data){
        res.send(data);
    })
  },
  getAllSurveys: function(req, res){
    Surveys.getSurvey(req.body).then(function(data){
        res.send(data);
    })
  }
};

