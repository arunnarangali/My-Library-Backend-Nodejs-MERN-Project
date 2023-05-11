const PTeamMember = require("../Model/Teammemberschema")
const emailvalidator = require("email-validator");

const addTeamMember=async(req,res)=>{
    const{Name,Email,DOB,Gender,Description,Role,PhoneNumber}=req.body
    const findTeamMember=await PTeamMember.findOne({Email})
    if(!Name || !Email || !DOB || !Gender || !Description || !Role ||!PhoneNumber ){
        return res.status(400).json({msg:"please fill all the fields"})
    }
    if(PhoneNumber.length!==10){
        return res.status(400).json({msg:"phonNumber is incorrect"})
    }
    if(emailvalidator.validate(Email)){
    if(!findTeamMember){
        const TeamMember=await PTeamMember.create({
            Name,
            Email,
            DOB,
            Gender,
            Description,
            Role,
            PhoneNumber
        })
        console.log(TeamMember);
        res.json({msg:"TeamMember successfully added",TeamMember})
    }
    else{
        res.status(400).json({msg:"TeamMember with this Email id Is allready exists"})
    }
}
else{
    res.status(400).json({msg:'Invalid Email'});
}
}
///////get TeamMember /////
const getTeamMember=async(req,res)=>{
    const TeamMember=await PTeamMember.find()
    res.json(TeamMember)
}
 //////delete /////////
 const deleteTeamMember=async(req,res)=>{
    const _id=req.params.id
    const deletTeamMember=await PTeamMember.findByIdAndRemove(_id)
    if(deletTeamMember){
        const TeamMember=await PTeamMember.find()
        res.json({msg:"Team member Delelted",TeamMember,deletTeamMember})
    }
    else{
        res.json("id not found")
    }
 }
////////update///////
const updateTeamMember=async(req,res)=>{
    const{Name,Email,DOB,Gender,Description,Role,PhoneNumber}=req.body
    const _id=req.params.id
    const upTeamMember=await PTeamMember.findByIdAndUpdate(_id,{Name,Email,DOB,Gender,Description,Role,PhoneNumber})
    await res.json({msg:"update Succesfully",upTeamMember})
}
//////get with id //////
const TeamMemberidget=async(req,res)=>{
    const _id=req.params.id
    const TeamMember=await PTeamMember.findById(_id)
    res.json({msg:"Team member is finded",TeamMember})
}
module.exports={addTeamMember,getTeamMember,deleteTeamMember,updateTeamMember,TeamMemberidget}