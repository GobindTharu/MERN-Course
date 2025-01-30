import mongoose from "mongoose"


const courseSchema = new mongoose.Schema({
    name: String,
    duration: Number,
    price: Number,
    isPopular: Boolean
});
const Course = new mongoose.model('Course', courseSchema)

export default Course;
