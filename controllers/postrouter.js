const express=require("express")
const postmodel=require("../model/postmodel")
const { route } = require("./signuprouter")

const router=express.Router()


router.post("/add",async(req,res)=>{
    let data=req.body
    console.log(data)
    let post= new postmodel(data)
    let result=await post.save()
    res.json({
        status:"success"
    })
})

router.get("/view",async(req,res)=>{
    let result=await postmodel.find()
    .populate("userId","name age -_id")
    .exec()
    res.json(result)
})


module.exports = router