const mongoose=require("mongoose")

const postSchema=new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"signup"
        },

        post:{
            type:String,
            required:true
        },

        postedDate:{
            type:Date,
            required:true,
            default:Date.now
        }
    }
)

module.exports=mongoose.model("post",postSchema)