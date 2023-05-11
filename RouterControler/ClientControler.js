

//adding client

const PClient = require("../Model/clientschema")

const addClient=async(req,res)=>{
    const{Name,Username,Email,SignedStatus,Role,PhoneNumber}=req.body
    const findclient=await PClient.findOne({Username})
    if(!Name || !Username ||!Email||!SignedStatus||!Role ||!PhoneNumber){
        return res.json({msg:"please fill all the fields"})
    }
    if(PhoneNumber.toString().length!==10)
    {
        return res.json({msg:"phone number is incooret"})
    }
    if(!findclient){
        const Clent=await PClient.create({
            Name,
            Username,
            Email,
            SignedStatus,
            Role,
            PhoneNumber

        })
        console.log(Clent);
        res.json({addmsg:"Client successfully added",Clent})

    }
    else{
        res.json({msg:"clent with this username ids allready exists"})
    }
}


///get client details/////

const getClient=async(req,res)=>{
    const Client=await PClient.find();
    res.json({msg:"all client are find",Client})
}

////delete client////
const deleteclient=async(req,res)=>{
    const _id=req.params.id
    const deleteClient=await PClient.findByIdAndRemove(_id)
    if(deleteClient){
        const client= await PClient.find()
        res.json({msg:"client deleted",client,deleteClient})
    }
    
}

//////update client ////
const updateClient=async(req,res)=>{
    const {Name,Username,Email,SignedStatus,Role,PhoneNumber}=req.body
    const _id=req.params.id
    const update=await PClient.findByIdAndUpdate(_id,{Name,Username,Email,SignedStatus,Role,PhoneNumber})
    await console.log({msg:"client is suceesfully update",update});
    await res.json({msg:"client is succesfully update",update})

}
///client get by id/////
 const clientidget=async(req,res)=>{
  const _id=req.params.id
  const client=await PClient.findById(_id)
  res.json({msg:"client is find",client})
 }
 

module.exports={addClient,getClient,deleteclient,updateClient,clientidget}