import mongoose from "mongoose";

// Destructure
const { Schema, model } = mongoose;

//? Set rule/schema

const StudentSchema = new Schema({
  name:{
    type: String,
    required: true,
    trim: true,
    maxlength: 225,
  },
  address:{
    type: String,
    required: true,
    trim: true,
    maxlength: 225,

  },

  email: {
    type: String,
    trim: true,
    required: true,
   lowercase: true,
   //? unique: true
  }
});

//? Create Model/Table

const Student = new model("Student", StudentSchema);

export default Student;
