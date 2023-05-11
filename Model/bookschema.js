const mongoose=require('mongoose')
 
const bookschema=mongoose.Schema({
    Name:{type:String},
    Author:{type:String},
    Publication:{type:String},
    Year:{type:Number},
    Avilability:{type:Boolean},
    Image:{type:String},
    Price:{type:Number},
    Quantity:{type:Number}

})

const PBooks=mongoose.model('PBook',bookschema);

module.exports=PBooks