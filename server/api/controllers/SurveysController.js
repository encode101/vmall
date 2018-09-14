/**
 * SurveysController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getAllSurveys: function(req, res){
    res.json({"msg": "RESP APIs Disabled By Default"})
  },
  createSurvey: function(req, res){
    Surveys.createSurvey(req.body).then(function(data){
        res.send(data);
    })
  }
};

