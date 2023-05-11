const mongoose=require('mongoose')

const customerschema=mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    Addressline1:{type:String},
    Addressline2:{type:String},
    City:{type:String},
    State:{type:String},
    PinCode:{type:Number},
    Country:{type:String}
})
const PCustomer=mongoose.model('PCustomer',customerschema);

module.exports=PCustomer