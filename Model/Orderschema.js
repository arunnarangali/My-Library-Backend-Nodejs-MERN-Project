const { default: mongoose } = require("mongoose");

const orderschema=mongoose.Schema({
    FirstName:{type:String},
    LastName:{type:String},
    OrderId:{type:Number},
    ProductNumber:{type:Number},
    Date:{type:String}
})
const POrder=mongoose.model('POrder',orderschema);

module.exports=POrder