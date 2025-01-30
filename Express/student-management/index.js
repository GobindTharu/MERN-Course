import express from "express";
import ConnectDB from "./db.connect.js";
import Student from "./student.entity.js";
import mongoose from "mongoose";

// create app
const app = express();
//  To make app understand json
app.use(express.json());

// ConnectDB
ConnectDB();

// Apis

// App students
app.post("/student/add", async (req, res) => {
  const newStudent = req.body;


  await Student.create(newStudent);

  return res.status(201).send({ msg: "Students is added Successfully" });
});

// list student
app.get("/student/list", async (req, res) => {
  const Students = await Student.find();
  return res.status(200).send({ msg: "Student list ", studentList: Students });
});


// delete student
app.delete("/student/delete/:id", async (req, res) => {
  // extract students from req.params
  const studentID = req.params.id;

  //? Check mongo valid Id

  const isValidId = mongoose.isValidObjectId(studentID);
  // check if valid
  if (!isValidId) {
    return res.status(400).send({ msg: "Invalid ID" });
  }

  await Student.deleteOne({ _id: studentID });

  console.log(studentID);
  return res.status(200).send({ msg: "Deleted Successful" });
});

//Update
app.put("/student/edit/:id", async (req, res) => {
  const studentID = req.params.id;

  // check mongo id
  const isVAlidId = mongoose.isValidObjectId(studentID);

  // is not valid mongo id  error
  if (!isVAlidId) {
    return res.status(400).send({ msg: "Invalid Mongoose Id" });
  }

  // find student using student id

  const student = await Student.findOne({ _id: studentID });

  if (!student) {
    return res.status(400).send({ msg: "Student Id does not exist " });
  }

  // extract new values

  const newValues = req.body;

  // update
  await Student.updateOne(
    { _id: studentID },
    {
      $set: {
        name: newValues.name,
        address: newValues.address,
        email: newValues.email,
        // newValues
      },
    }
  );

  // console.log(studentID);
  return res.status(200).send("Student Updated successful");
});

//? Network

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`App is listening on port : ${PORT}`);
});
