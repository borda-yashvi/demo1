require('dotenv/config')
const express = require("express")
const {Img} = require("./module.js")
const jwt =require("jsonwebtoken")
const bcrypt = require("bcryptjs")

// console.log(moment().startOf('day').fromNow())
const app = express.Router()

const multer = require("multer")
const path = require("path")
const e = require('express')

const imageStore = multer.diskStorage({
    destination:"images",
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
    }
})

const upload = multer({
    storage:imageStore,fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(png|jpg)$/)){
            return cb(new Error("please upload image"))
        }
        cb(undefined,true)
    }
})

app.post(`/`,upload.array("image"),async (req,res)=>{
  console.log("==",req.files);
  let file = req.files
  let images = []
    file.forEach(element => {
      const url = `http://localhost:${process.env.PORT}/${element.filename}`
      images.push(url)
    });
    console.log("=images",images);

  const array = [
    {
      "fname":"agadd",
    "lname":"asjdhjhdf",
    "doc":"sdfsldf"
  }
  ]
 
  // let array3 = []
  // let obj ={}
  // array.forEach(element => {
  //   console.log("====element",element);
  //   for (const [key, value] of Object.entries(element)) {
  //     console.log(`${key}: ${value}`);
  //     obj[key] = value
  //   }
  //   obj.fname = element
  // });
  // console.log("=obj",obj);
  // array3.push(obj)
  // console.log("=array3>>>>>>>>>>>>>>>>>>>",array3);

  //  const body =req.body.name
  //   console.log("-body",body);

  //   body.forEach(element => {
  //     console.log(element);
  //   });

  const moment= require('moment') 
  const times = moment().add(10, 'days').calendar(); 
  console.log("==time",times);

  const img = new Img({
    name:array,
    email:req.body.email,
    passwordHash :bcrypt.hashSync(req.body.password,10),
    images:images,
    time:times
  })
  const imglist = await img.save()
  if(!imglist) console.log("data was not found")
  else res.status(200).send(imglist)
})




app.get(`/`,async (req,res)=>{
    const imglist = await Img.find()
    if(!imglist) console.log("data was not found")
    else res.status(200).send(imglist)
  })

app.post("/login",async (req,res)=>{
  const img = await Img.findOne({email:req.body.email})
  if(!img){
    res.send("user was not found")
  }
  else if(img&&bcrypt.compareSync(req.body.password,img.passwordHash))
  {
    const token = jwt.sign({"name":img.name,"email":img.email},"yashvi",{expiresIn:"1d"})
    res.send({name:img.name,token:token})
  }
  else{
    res.send("pwd is wrong !!")
  }

 
  })


app.delete("/:id",async (req,res)=>{
    Img.findByIdAndRemove(req.params.id)
    .then((img)=>
    {
      if(img)
        {
            return res.status(200).json({message:"the img is delete"})
        }
        else
        {
            return res.status(404).json({message:"the img is not  delete"})
        }
    })
    .catch((err)=>{
      return res.status(500).json({error:err})   
    })
})
module.exports =app