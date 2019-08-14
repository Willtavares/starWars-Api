const mongoose = require('../database/index'); 

var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    weather:{
        type:String,
        required:true,
    },
    terrain:{
        type:String,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('Planets', userSchema);