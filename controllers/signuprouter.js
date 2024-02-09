const express = require("express")
const signupmodel = require("../model/signupmodel")

const router = express.Router()

const bcrypt = require("bcryptjs")

hashPasswordGenerator = async (pass) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass, salt)
}

router.post("/signup", async (req, res) => {

    let { data } = { "data": req.body }
    let password = data.password
    // hashPasswordGenerator(password).then(
    //     (hashedPassword) => {
    //         console.log(hashedPassword)
    //         data.password = hashedPassword
    //         console.log(data)
    //         let user = new signupmodel(data)
    //         let result =  user.save()
    //         res.json({
    //             status: "success"
    //         })
    //     }
    // )

    const hashedPassword=await hashPasswordGenerator(password)
    data.password=hashedPassword
    let user=new signupmodel(data)
            let result=await user.save()
            res.json({
                status:"success"
            })


})

router.post("/signin",async(req,res)=> {
    let input=req.body
    let email=req.body.email
    let data=await signupmodel.findOne({"email":email})
    if(!data)
    {
        return res.json(
            {
                status:"inavlid email"
            }
        )
    }

    console.log(data)
    let dbPassword=data.password
    let inputPassword=req.body.password
    console.log(dbPassword)
    console.log(inputPassword)
    const match=await bcrypt.compare(inputPassword,dbPassword)
    if(!match)
    {
        return res.json(
            {
                status:"invalid password"
            }
        )
    }
    res.json({
        status:"success"

    })
})

module.exports = router