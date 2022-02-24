const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionnaireSchema = new Schema(
  {
    date: { type: Date },
    sleep: {
      quality: {
        type: String,
        enum: ['terrible', 'bad', 'neutral', 'satisfied', 'excelent'],
        required: [true,'sleep quality must be indicated']
      },
      quantity: {
        goToBed: { type: String, required: [true,'bedtime must be indicated'] ,
        validate: {
          validator: function(v) {
              var time = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
              return (!v || !v.trim().length) || time.test(v)
          },
          message: 'Provided value is invalid. Insert time in "HH:MM" format'}},
        wakeUp: { type: String, required: [true,'wake up time must be indicated'] , 
      validate: {
          validator: function(v) {
              var time = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
              return (!v || !v.trim().length) || time.test(v)
          },
          message: 'Provided value is invalid. Insert time in "HH:MM" format'}},
        total: { type: Number, required: [true,'total slept hours must be indicated'], min: [0,'value must be 0 or bigger ']},
      },
    },
    training: {
      time: { type: String, 
        required: [true,'total training time must be indicated'],
        validate: {
          validator: function(v) {
              var time = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
              return (!v || !v.trim().length) || time.test(v)
          },
          message: 'Provided value is invalid. Insert time in "HH:MM" format'
      } },
    },
    organizationTime: {
      tool: {
        type: [String],
        enum: ['app', 'mobile', 'schedule', 'notes'],
        required: [true,'tool must be selected']
      },
    },
    screenUsage: {
      beforeSleep: {
        type: [String],
        enum: ['mobile', 'TV', 'tablet', 'computer'],
        required: [true,'screen usage must be indicated']
      },
      socialNetworkVideoGames: {type: Boolean, required: [true,'Videogames or social network usage must be indicated']
      },
    },
    drinks: {
      frequency: {
        water: {type: Number, required: [true,'consumed ammount must be indicated'],  min: [0,'value must be 0 or bigger ']},
        sugaryDrinks: {type: Number, required: [true,'consumed ammount must be indicated'],  min: [0,'value must be 0 or bigger ']},
        energyDrinks: {type: Number, required: [true,'consumed ammount must be indicated'],  min: [0,'value must be 0 or bigger ']},
        caffeinatedDrinks: {type: Number, required: [true,'consumed ammount must be indicated'],  min: [0,'value must be 0 or bigger ']},
        alcohol: {type: Number, required: [true,'consumed ammount must be indicated'],  min: [0,'value must be 0 or bigger ']},
      },
    },
  },
  { timestamps: true },
);

const questionnaireModel = mongoose.model('questionnaire', questionnaireSchema);
module.exports = questionnaireModel;
