import express from "express";
import mongoose from "mongoose";
import connectDB from "./connectDB.db.js";
import {courseRoutes} from "./course/course.controller.js";

//? Create App
const app = express();

//? to understand json
app.use(express.json());

app.use(courseRoutes);

//?
connectDB();

//? Network
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening on port : ${PORT}`);
});
