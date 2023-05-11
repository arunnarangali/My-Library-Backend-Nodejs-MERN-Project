const mongoose=require('mongoose')


const userschema=mongoose.Schema({
    FirstName:{type:String},
    LastName:{type:String},
    Email:{type:String},
    Password:{type:String},
    Cart:[{type:mongoose.Schema.Types.ObjectId,ref:'PBook'}]
})

const PUser=mongoose.model('PUsers',userschema);

module.exports=PUser