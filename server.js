const express=require('express')
const connectDB = require('./config/db')
const testRouter=require('./Router/testRouter')
const dotenv=require('dotenv')
const cors=require('cors')
const app=express()
 const bodyParser = require('body-parser')

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json())
connectDB();
app.use(
    cors({
    origin:"https://my-library-frontend-reactjs-mern-project.vercel.app",
   credentials:true, 
}))
dotenv.config();
app.use('/',testRouter)
app.get('/',(req,res)=>{
    res.json("server is running")
    console.log("server is runnig");
})
const PORT=process.env.PORT||8000
app.listen(PORT,console.log(`port is running at${PORT}`))
