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
    let resp = await Surveys.create(survey).fetch();
    return resp;
  }

};

