const  mongoose= require("mongoose");

const teammemberschem=mongoose.Schema({
  Name:{type:String},
  Email:{type:String},
  DOB:{type:String},
  Gender:{type:String},
  Description:{type:String},
  Role:{type:String},
  PhoneNumber:{type:Number},
  Profilepicture:{type:Buffer}
})

const PTeamMember=mongoose.model('PTeamMember',teammemberschem);

module.exports=PTeamMember