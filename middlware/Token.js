const jwt=require('jsonwebtoken');
const { Error } = require('mongoose');

const protect=async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try{
            token=req.headers.authorization.split(" ")[1];
            jwt.verify(token,process.env.JWT_SECRET);
            next();
        }
        catch(error){
            res.status(401).send('no token');
            throw new Error('Not authorized,token');
        }
    }
    if(!token){
        res.status(401).send('no token and not in bearer');
            throw new Error('Not authorized,token');
    }
}

module.exports=protect;