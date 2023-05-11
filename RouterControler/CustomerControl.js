const PCustomer = require("../Model/Customerschema")

const addCustomer=async(req,res)=>{
    const{Name,Email,Addressline1,Addressline2,City,State,PinCode,Country}=req.body
    const findCustomer=await PCustomer.findOne({Email})
if(!Name || !Email || !Addressline1|| !Addressline2|| !City|| !State || !PinCode ||!Country){
  return res.json({msg:"please fill all the fields"})
}
if(PinCode.length!==6)
{
    return res.json({msg:"pincode must be 6"})
}
if(!findCustomer){
    const Customer= await PCustomer.create({
        Name,
        Email,
        Addressline1,
        Addressline2,
        City,
        State,
        PinCode,
        Country
    })
    console.log(Customer);
    res.json({addmsg:"Customer successfully added",Customer})
}
else{
    res.json({msg:"Customer with this Email id is allready exists"})
}
}
////get Customer/////
const getCustomer=async(req,res)=>{
    const Customer=await PCustomer.find()
    res.json(Customer)
}
////delete Customer//////
const deleteCustomer=async(req,res)=>{
    const _id=req.params.id
    const deleteCustomer=await PCustomer.findByIdAndRemove(_id)
    if(deleteCustomer){
    const customer=await PCustomer.find()
    res.json({msg:"Customer deleted",customer,deleteCustomer})
    }
    else{
        res.json("id not found")
    }
}
/////update Customer//////
const updatecustomer= async(req,res)=>{
    const{Name,Email,Addressline1,Addressline2,City,State,PinCode,Country}=req.body
    const _id=req.params.id
    const upcustomer=await PCustomer.findByIdAndUpdate(_id,{Name,Email,Addressline1,Addressline2,City,State,PinCode,Country})
    await res.json({msg:"update succesfully",upcustomer})
}
////get with id////
const Customeridget=async(req,res)=>{
const _id=req.params.id
const Customer=await PCustomer.findById(_id)
res.json({msg:"customer find",Customer})
}

module.exports={addCustomer,getCustomer,deleteCustomer,updatecustomer,Customeridget}