const PBooks = require("../Model/bookschema")
const PUser = require("../Model/userloginschema")

const addtocart=async(req,res)=>{
    const{bkid,userid}=req.body
   
    const addtocart=await PUser.updateOne({_id:userid},{$addToSet:{Cart:bkid}})
    if (addtocart){
        res.json({addtocart,msg:'add'})
        console.log(addtocart);
    }
    else{
        return res.status(400).json("some error")
    }
}
const cart=async(req,res)=>{
    const {userid}=req.body
    const product=await PUser.findOne({_id:userid}).populate('Cart')
    if(product){
        res.json({msg:"get cart",product})
    }
    else{
        return res.status(400).json("some error")
    }
    
}
const removeitemfromcart=async(req,res)=>{
    const{bkid,userid}=req.body
    const addtocart=await PUser.findByIdAndUpdate(userid,{"$pull":{Cart:bkid}})
    if (addtocart){
        return res.json({addtocart})
        console.log(addtocart);
    }
    else{
        return res.status(400).json("some error")
    }
}

module.exports={addtocart,cart,removeitemfromcart}