import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('//use your .env mongodb url').then(()=>{
       console.log('DB connected') ;
    })
}