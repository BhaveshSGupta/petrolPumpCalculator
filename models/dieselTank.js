const mongoose = require('mongoose')
const dieselTankSechema = new mongoose.Schema({
    MS:{
      type: String,
      trim:true,
      required:true
    },
    HSD: {
      type: String,
      trim:true,
      required:true
    }
})

const DieselTank = mongoose.model('DieselTank', dieselTankSechema)
  
module.exports = DieselTank