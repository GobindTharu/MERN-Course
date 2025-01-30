import mongoose from "mongoose";

const url =
  "mongodb+srv://mern:mern%40123@school.xg9dy.mongodb.net/student-management?retryWrites=true&w=majority&appName=School";
const ConnectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("Database connection successful");
  } catch (error) {
    console.log(error.message);
    console.log("Database connection Failed");
    process.exit(1);
  }
};

export default ConnectDB;
