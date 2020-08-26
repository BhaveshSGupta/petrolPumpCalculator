const mongoose = require('mongoose')

const DailyDataSechema = new mongoose.Schema({
  MS: {
    type: Number,
    trim: true,
    required: true
  },
  HSD: {
    type: Number,
    trim: true,
    required: true
  },
  MS_DIP: {
    type: Number,
    trim: true,
    required: true
  },
  Volume_in_MS: {
    type: Number,
    trim: true
  },
  ABS_Volume_in_MS: {
    type: Number,
    trim: true
  },
  HSD_DIP1: {
    type: Number,
    trim: true,
    required: true
  },
  HSD_DIP2: {
    type: Number,
    trim: true,
    required: true
  },
  Volume_in_HSD_DIP1: {
    type: Number,
    trim: true
  },
  Volume_in_HSD_DIP2: {
    type: Number,
    trim: true
  },
  ABS_Volume_in_HSD_DIP1: {
    type: Number,
    trim: true
  },
  ABS_Volume_in_HSD_DIP2: {
    type: Number,
    trim: true
  },
  Closing_Reading_MS_Dispenser_1_Nozle_1: {
    type: Number,
    trim: true,
  },
  Closing_Reading_MS_Dispenser_1_Nozle_2: {
    type: Number,
    trim: true,
  },
  Testing_MS_Dispenser_1_Nozle_1: {
    type: Number,
    trim: true,
  },
  Testing_MS_Dispenser_1_Nozle_2: {
    type: Number,
    trim: true,
  },
  Closing_Reading_HSD_Dispenser_1_Nozle_1: {
    type: Number,
    trim: true,
  },
  Closing_Reading_HSD_Dispenser_1_Nozle_2: {
    type: Number,
    trim: true,
  },
  Closing_Reading_HSD_Dispenser_2_Nozle_1: {
    type: Number,
    trim: true,
  },
  Closing_Reading_HSD_Dispenser_2_Nozle_2: {
    type: Number,
    trim: true,
  },
  Closing_Reading_HSD_Dispenser_3_Nozle_1: {
    type: Number,
    trim: true,
  },
  Closing_Reading_HSD_Dispenser_3_Nozle_2: {
    type: Number,
    trim: true,
  },
  Testing_HSD_Dispenser_1_Nozle_1: {
    type: Number,
    trim: true,
  },
  Testing_HSD_Dispenser_1_Nozle_2: {
    type: Number,
    trim: true,
  },
  Testing_HSD_Dispenser_2_Nozle_1: {
    type: Number,
    trim: true,
  },
  Testing_HSD_Dispenser_2_Nozle_2: {
    type: Number,
    trim: true,
  },
  Testing_HSD_Dispenser_3_Nozle_1: {
    type: Number,
    trim: true,
  },
  Testing_HSD_Dispenser_3_Nozle_2: {
    type: Number,
    trim: true,
  },
  previous: {
    type: mongoose.Types.ObjectId
  },
  next: {
    type: mongoose.Types.ObjectId
  },
  total_petrol: {
    type: Number,
    trim: true,
  },
  total_deisel: {
    type: Number,
    trim: true,
  },
  Date: {
    type: Date
  }
}, {
  timestamps: true
})
const dailyData = mongoose.model('DailyData', DailyDataSechema)

module.exports = dailyData 