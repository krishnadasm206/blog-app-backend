const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const signuprouter=require("./controllers/signuprouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://krishnadasm:toby1234@krishnadas.rrihwpp.mongodb.net/blogDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true})

app.use("/api/user",signuprouter)

app.listen(2004,()=>{
    console.log("server running")
})
