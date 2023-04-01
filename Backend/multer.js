const express =require("express")
const multer = require("multer")
const app= express.Router()
const path = require("path")
require("dotenv/config")

// const imageStore = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,'img')
//     },
//     filename:(req,file,cb)=>{
//         cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
//     }
// })

// upload.rout("/img_router").post(async(req,res)=>{
//     handle(req,res,async(err)=>{
//         if(err)
//         {res.json({msg:err.message})}
//         const filepath = req.file.path

//         if(!filepath){return ;}
//         cloudinary.v2.uploader.upload(filepath,(err,result)=>{
//             if(error) {res.send(error.message)}
//             else {res.json({body:req.body,file:result,})}
//         })
//     })
// })

const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

const imageStore = multer.diskStorage({
    destination:"images",
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
    }
})

// const upload = multer({storage:storage})

const imagesUpload = multer({
    storage:imageStore,fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(png|jpg)$/)){
            return cb(new Error("please upload image"))
        }
        cb(undefined,true)
    }
})

app.post("/",imagesUpload.single("image"),async(req,res)=>{

  imagesUpload.single("image"),(req,res)=>{
    res.send(req.file)
  },(error,req,res,next)=>{
    res.send({error:error.message})
  }

})

module.exports = app