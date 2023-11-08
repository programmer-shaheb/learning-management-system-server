import mongoose from "mongoose";
const Schema = mongoose.Schema;

const enrollmentStatusEnum = ["Open", "Closed", "In Progress"];

const syllabusSchema = new Schema({
  week: {
    type: Number,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

// Student Schema
const studentSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

// Course Schema
const courseSchema = new Schema({
  courseId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  enrollmentStatus: {
    type: String,
    enum: enrollmentStatusEnum,
    default: "Open",
  },
  thumbnail: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  prerequisites: {
    type: [String],
    required: true,
  },
  syllabus: [syllabusSchema],
  students: [
    {
      type: Object,
      ref: "Student",
    },
  ],
});

export const StudentModel = mongoose.model("Student", studentSchema);
export const CourseModel = mongoose.model("courses", courseSchema);
