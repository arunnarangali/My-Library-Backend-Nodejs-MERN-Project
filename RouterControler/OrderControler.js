const POrder = require("../Model/Orderschema")

const addOrder=async(req,res)=>{
    const {FirstName,LastName,OrderId,ProductNumber,Date}=req.body
    const findOrder=await POrder.findOne({OrderId})
    if(!FirstName || !LastName ||!OrderId||!ProductNumber ||!Date){
        return res.status(400).json({msg:'please fill all the fields'})
    }
    if(OrderId.length!==5){
        return  res.status(400).json({msg:"order id must be 5numbers"})
    }
    if(!findOrder){
        const order=await POrder.create({
            FirstName,
            LastName,
            OrderId,
            ProductNumber,
            Date
        })
        console.log({order});
        res.json({msg:"order added",order})
    }
    else{
        res.status(400).json({msg:"Order with this id is already exists"})
    }
}
////get order///
const getorder=async(req,res)=>{
    const order=await POrder.find()
    res.json(order)
}
//////delete////
const deleteorder=async(req,res)=>{
    const _id=req.params.id
    const deleteorder=await POrder.findByIdAndRemove(_id)
    if(deleteorder){
        const order=await POrder.find()
        res.json({msg:"Order deleted",order,deleteorder})
    }
    else{
        res.status(400).json("id not found")
    }
}

////update//////
const updateorder=async(req,res)=>{
    const {FirstName,LastName,OrderId,ProductNumber,Date}=req.body
    const _id=req.params.id
    const uporder=await POrder.findByIdAndUpdate(_id,{FirstName,LastName,OrderId,ProductNumber,Date})
    await res.json({msg:"update Succesfully",uporder})
}
/////get with id /////
const orderidget=async(req,res)=>{
    const _id=req.params.id
    const order=await POrder.findById(_id)
    res.json({msg:"oreder find",order})
}
module.exports={addOrder,getorder,deleteorder,updateorder,orderidget}