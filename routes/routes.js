import express from "express";
import {
  findCourseByStudentEmail,
  getCourse,
  getCourses,
  updateCourse,
} from "../controllers/courses.js";

const router = express.Router();

router.get("/courses", getCourses);
router.post("/myCourses", findCourseByStudentEmail);
router.patch("/update-course/:courseId", updateCourse);
router.get("/courses/:courseId", getCourse);

export default router;
