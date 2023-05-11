const PUser = require("../Model/userloginschema")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const PAdmin = require("../Model/adminschema")


const signup=async(req,res)=>{
    const {FirstName,LastName,Email,Password,ConfirmPassword}=req.body
    const finduser= await PUser.findOne({Email})
    if(!FirstName || !LastName || !Email || !Password ||!ConfirmPassword)
    {
     return res.json({msg:"please fill all the fields"})
    }
    else if (Password.length <=8)
    return res.json({ msg: "The password needs to be at least 8 characters long." });
   
    else if (Password !==ConfirmPassword)
    return res.json({  msg: "Passwords do not match. Enter the same password twice for verification." });
    else if(finduser){
        return res.json({ msg: "An account with this email already exists." });  
    }
    else{
        const salt=await bcrypt.genSalt(10);
        const hashpwd=await bcrypt.hash(Password,salt)
        const userdetails=await PUser.create({
            FirstName,
            LastName,
            Email,
            Password:hashpwd
        })
        console.log(userdetails);
    
        res.json({msg:"successfully sign in",user:userdetails,token:gentoken(userdetails._id),userId:userdetails._id,userName:userdetails.FirstName})
    }
}

const Login=async(req,res)=>{
    const {Email,Password}=req.body
    const finduser=await PUser.findOne({Email})
    if( !Email || !Password)
    {
     return res.json({msg:"please fill all the fields"})
    }
    if(finduser && bcrypt.compareSync(Password,finduser.Password)){
        res.json({Message:"user login",token:gentoken(finduser._id),userId:finduser._id,userName:finduser.FirstName })
    }
    else{
        return res.json({ msg: "Email And Password is incorrect" }); 
    }
}

const gentoken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'1d'
    })
}

const adminlogin=async(req,res)=>{
    const {Email,Password}=req.body
    const findadmin=await PAdmin.findOne({Email})
    if( !Email || !Password)
    {
     return res.status(400).json({msg:"please fill all the fields"})
    }
    if(findadmin && bcrypt.compareSync(Password,findadmin.Password)){
        res.json({Message:"admin logedin",token:gentoken(findadmin._id) })
    }
    else{
        return res.status(400).json({msg:"Email or Password is Incorrect"})
    }

}

const createadmin=async(req,res)=>{
    const {Email,Password}=req.body
    const findadmin=await PAdmin.findOne({Email})
    if( !Email || !Password)
    {
     return res.status(400).json({msg:"please fill all the fields"})
    }
    if(!findadmin){
        const salt=await bcrypt.genSalt(10)
        const hashpwd=await bcrypt.hash(Password,salt)
        const admin=await PAdmin.create({
            Email,
            Password:hashpwd
        })
        console.log(admin);
        res.json({msg:"admin created",admin})
    }
    else{
        res.json("allraedy an admin")
    }
}


module.exports={signup,Login,adminlogin,createadmin}