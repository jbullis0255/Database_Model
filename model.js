import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    fisrtName:{
        type: String,
        required: true,
        trim: true,
    },
    lastName:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    password:{
        type: String,
        required: true,
        trim: true,
   }

},{timestamps:true})

 const User= mongoose.Model('User', userSchema)

 export default User