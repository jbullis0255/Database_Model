const mongoose=require('mongoose')

const env = require('dotenv')

//environmental variables

env.config() 

const CONNECTIONURL= process.env.DB_CONNECTION_STRING

const connectDB= async ()=>{
    try {
        const connect = await mongoose.connect(CONNECTIONURL,{
            useUnifiedTopology:true,
            useCreateIndex:true,
            useNewUrlParser:true
        })
        console.log('Database connected succesfully')
        
    } catch (error) {
        console.log(`error: ${error.message}`)
        process.exit(1)  
    }
}

module.exports = connectDB
  