import express from "express";
import Course from "./course.model.schema.js"

const router = express.Router();

router.post("/api/course", async(req, res) => {

    const newCourse = req.body;
  await Course.create(newCourse);
  res.status(201).send({msg: 'Course Is added successful'});
});

export { router as courseRoutes };
