// userModel.js (model)

var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    name               : {type : String},
    //deleted            : {type : Boolean, default : false},
    username           : {type : String, required : true, unique : true},
    email              : {type : String, required : true, unique : true},
    password           : {type : String, required : true},
    favoriteCreditCard : {type : String},
    mothersMaidenName  : {type : String},
    firstCarColor      : {type : String},
    PIN                : {type : Number}
})

// We want to access our collection in other files, so module.export it
module.exports = mongoose.model('User', userSchema)
// db.users