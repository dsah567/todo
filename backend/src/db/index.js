import mongoose from "mongoose";

const connectDB= async()=>{
    try{
        const connectionInstances = await mongoose.connect(`${process.env.MONGODB_URI}${process.env.DB_NAME}`)
        console.log(`\n MongoDB connected DB HOST ${connectionInstances.connection.host}`);
    }
    catch(err){
        console.log("MONGODB connection FAILED ", err);
        process.exit(1)
    }
}

export default connectDB