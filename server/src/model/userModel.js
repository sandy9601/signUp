const mongoose=require('mongoose')

const userSchema=new mongoose.schema({
    usename:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    phoneNumber:{
        type:Number
    },
    confirmPassword:{
        type:String
    }
},{timestamps:true})