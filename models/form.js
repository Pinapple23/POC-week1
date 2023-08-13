const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
  buttonText: {
    type: String,
    required: true
  },
  link:{
    type: String,
    required:true,
  }
})
module.exports = mongoose.model('form', formSchema)