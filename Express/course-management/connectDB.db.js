import mongoose from "mongoose";
//To connect Db

const connectDB = async () => {
    try {

      const url =
        "mongodb+srv://mern:mern%40123@school.xg9dy.mongodb.net/Course-management?retryWrites=true&w=majority&appName=School";
        await mongoose.connect(url);
    
       console.log('Database connection Successful') 
    } catch (error) {
     console.log('Database connection Failed')
      console.log(error.message)
      process.exit(0);

        
    }
}

export default connectDB;
