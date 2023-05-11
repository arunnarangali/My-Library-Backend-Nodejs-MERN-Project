
const PBooks = require('../Model/bookschema')

const booksData=async(req,res)=>{
    const {Name,Author,Publication,Year,Avilability,Image,Price,Quantity}=req.body
    const findbook=await PBooks.findOne({Name})
    if(!Name || !Author || !Publication  || !Year ||!Avilability||!Quantity ){
        return res.json({msg:"please fill all the fields"})
    }
    
    if(!findbook)
    {
        const booksdetails=await PBooks.create({
            Name,
            Author,
            Publication,
            Year,
            Avilability,
            Image,
            Price,
            Quantity
        })
        console.log(booksdetails);
        res.json({addmsg:"book is added",booksdetails});
        
    }
    else{
        res.json({msg:"this book is already exists."})
    }
}

const booksdetails=async(req,res)=>{
   
    const books=await PBooks.find()
   
    res.json(books) 
}


const deletbook=async(req,res)=>{
   const _id=req.params.id
    const deleteuser=await PBooks.findByIdAndRemove(_id)
   
    if(deleteuser){
      
        const books=await PBooks.find()
        console.log(deleteuser);
        res.json({msg:'userdeleted',books,deleteuser})
    }
}

const upadateBook=async(req,res)=>{
    const {Name,Author,Publication,Year,Avilability,Image,Price,Quantity}=req.body
    const _id=req.params.id;
    const booksdetails=await PBooks.findByIdAndUpdate(_id,{Name,Author,Publication,Year,Avilability,Image,Price,Quantity});
       await console.log(booksdetails);
       await res.json({upmsg:'book details updated',booksdetails})
}

const bookget=async(req,res)=>{
    const _id=req.params.id
    const finduser=await PBooks.findById(_id);
    res.json({msg:"user find",finduser})
}

module.exports={booksData,booksdetails,deletbook,upadateBook,bookget}