const express=require("express")
const signupmodel = require("../model/signupmodel")

const router=express.Router()



router.post("/signup",async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.password

    console.log(password)
    
    
    //let users=new signupmodel(data)
    //let result=await users.save()

    res.json({
        status:"success"
    })
})

module.exports=router