import express from "express";
import {
    getCourses,
    createCourse,
    updateCourse,
    deleteCourse
} from "./crud/CrudCourse.js";

const router = express.Router();

router.get('/course', getCourses);
router.post('/course', createCourse);
router.patch('/course/:course_id', updateCourse);
router.delete('/course/:course_id', deleteCourse);

export default router;