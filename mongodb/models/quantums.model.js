const mongoose = require('mongoose')

const quantumsSchema = mongoose.Schema({
    subjectName:{
        type: String,
        require: true,
        unique: true,
        minlength: 3
    },
    subjectCode:{
        type: String,
        require: true,
        unique: true
    },
    quantumsUrl:{
        type: String,
        require: true,
        unique: true
    }
})

module.exports = mongoose.model("Quantums", quantumsSchema)