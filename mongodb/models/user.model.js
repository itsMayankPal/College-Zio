const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        unique: false,
        minlength: 3
    },
    email:{
        type: String,
        require: true,
        unique: false
    },
    password:{
        type: String,
        require: true,
        unique: false
    }
})

module.exports = mongoose.model('Users', userSchema)