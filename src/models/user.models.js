import mongoose from "mongoose";
const userchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
}


},{timestamps:true})

export const User = mongoose.model("User",userchema)