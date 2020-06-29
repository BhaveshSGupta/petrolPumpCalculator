const mongoose = require('mongoose')
const DailyDataSechema = new mongoose.Schema({
    MS:{
      type: String,
      trim:true,
      required:true
    },
    HSD: {
      type: String,
      trim:true,
      required:true
    },
    MS_DIP:{
        type: String,
        trim:true,
        required:true
      },
    HSD_DIP1: {
        type: String,
        trim:true,
        required:true
      },
      HSD_DIP2: {
        type: String,
        trim:true,
        required:true
      },
      Closing_Reading_MS_Dispenser_1_Nozle_1:{
        type: String,
        trim:true,
      },
      Closing_Reading_MS_Dispenser_1_Nozle_2:{
        type: String,
        trim:true,
      },
      Testing_MS_Dispenser_1_Nozle_1:{
        type: String,
        trim:true,
      },
      Testing_MS_Dispenser_1_Nozle_2:{
        type: String,
        trim:true,
      },
      Closing_Reading_HSD_Dispenser_1_Nozle_1:{
        type: String,
        trim:true,
      },
      Closing_Reading_HSD_Dispenser_1_Nozle_2:{
        type: String,
        trim:true,
      },
      Closing_Reading_HSD_Dispenser_2_Nozle_1:{
        type: String,
        trim:true,
      },
      Closing_Reading_HSD_Dispenser_2_Nozle_2:{
        type: String,
        trim:true,
      },
      Closing_Reading_HSD_Dispenser_3_Nozle_1:{
        type: String,
        trim:true,
      },
      Closing_Reading_HSD_Dispenser_3_Nozle_2:{
        type: String,
        trim:true,
      },
      Testing_HSD_Dispenser_1_Nozle_1:{
        type: String,
        trim:true,
      },
      Testing_HSD_Dispenser_1_Nozle_2:{
        type: String,
        trim:true,
      },
      Testing_HSD_Dispenser_2_Nozle_1:{
        type: String,
        trim:true,
      },
      Testing_HSD_Dispenser_2_Nozle_2:{
        type: String,
        trim:true,
      },
      Testing_HSD_Dispenser_3_Nozle_1:{
        type: String,
        trim:true,
      },
      Testing_HSD_Dispenser_3_Nozle_2:{
        type: String,
        trim:true,
      }
  },{
    timestamps:true
  })
  const dailyData = mongoose.model('DailyData', DailyDataSechema)
  
module.exports = dailyData