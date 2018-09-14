/**
 * Surveys.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    "name": {type: "string", required: true},
    "clientId": {type: "string", required: true},
    "surveyType": {type: "string", required: true}
  },

  createSurvey: async function(survey){
    const resp = await Surveys.create(survey).fetch();
    return resp;
  },
  
  getSurvey: async function(req, res){
    const resp = await Surveys.find();
    return resp;
  }

};

