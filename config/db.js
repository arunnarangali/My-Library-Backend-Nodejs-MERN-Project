const mongoose=require("mongoose")

const connectDB=async()=>{
    try{
        const conn =await mongoose.connect("mongodb+srv://arun:SystemCrash@arun.fd066ii.mongodb.net/?retryWrites=true&w=majority",{
           useNewUrlParser:true,
           useUnifiedTopology:true, 
        })


        console.log("Database Connected");
    }
    catch(error){
        console.log(`Error :${error}`);
        process.exit()
    }
}


module.exports=connectDB;  