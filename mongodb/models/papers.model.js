const mongoose = require('mongoose')

const papersSchema = mongoose.Schema({
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
    papersUrl:{
        type: String,
        require: true,
        unique: true
    }
})

module.exports = mongoose.model("Papers", papersSchema)