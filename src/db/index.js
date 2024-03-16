import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = async () => {
    try{
        console.log("connecting to db")
        console.log(`${process.env.MONGODB_URI}/${DB_NAME}`)
        const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
}
    catch(error) {
        console.error('MONGODB connection error ', error);
        process.exit(1);//intresting concept in nodejs
    }
}

export default connectDB
//when a async function is called it returns a promise
















// import mongoose from "mongoose";
// import { DB_NAME } from "../constants";

// const connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
// app.on("error" , (error) => {
//     console.log("Error: ", error);
//     throw error;
// })   
// app.listen(process.env.PORT, () => {
//     console.log(`App is listening on port ${process.env.PORT}`)
// })

// } 

// catch (error) {
//         console.error('Error: ', error);
//         process.exit(1);
//     }
// };

// export default connectDB;
