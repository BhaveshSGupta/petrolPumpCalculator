const mongoose = require('mongoose')
const petrolTankSechema = new mongoose.Schema({
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

const PetrolTank = mongoose.model('PetrolTank', petrolTankSechema)
  
module.exports = PetrolTank