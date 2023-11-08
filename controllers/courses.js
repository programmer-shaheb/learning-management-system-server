import { CourseModel } from "../models/course.js";

export const getCourses = async (req, res) => {
  try {
    const courses = await CourseModel.find();

    res.json({
      data: courses,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await CourseModel.findOne({ courseId });

    res.json(course);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const newStudent = req.body;

    const updatedCourse = await CourseModel.updateOne(
      { courseId: courseId },
      {
        $push: {
          students: newStudent,
        },
      }
    );

    res.send(updatedCourse);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const findCourseByStudentEmail = async (req, res) => {
  try {
    const email = req.body.email;

    const course = await CourseModel.find({
      students: {
        $elemMatch: { email: email },
      },
    });

    if (course) {
      res.status(200).json(course);
    } else {
      res
        .status(404)
        .json({ message: "Course not found for the specified student email." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
