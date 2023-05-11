const { status } = require('express/lib/response')
const mongoose=require('mongoose')

const clientschema=mongoose.Schema({
    Name:{type:String},
    Username:{type:String},
    Email:{type:String},
    SignedStatus:{type:Boolean},
    Role:{type:String},
    PhoneNumber:{type:Number}
})

const PClient=mongoose.model('PClient',clientschema);

module.exports=PClient