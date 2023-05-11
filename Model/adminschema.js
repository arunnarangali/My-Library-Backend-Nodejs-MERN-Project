const { default: mongoose } = require("mongoose")

const adminschema=mongoose.Schema({
    Email:{type:String},
    Password:{type:String}
})

const PAdmin=mongoose.model('PAdmin',adminschema);

module.exports=PAdmin