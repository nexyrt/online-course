import Course from "../table-models/CourseDetails.js";

export const getCourses = async(req, res) => {
    try{
        const response = await Course.findAll();
        res.status(200).json(response);
    } catch(error) {
        console.log(error.message);
    }
}

export const createCourse = async(req, res) => {
    try{
        await Course.create(req.body);
        res.status(201).json({msg: "Course Created"});
    } catch(error) {
        console.log(error.message);
    }
}

export const updateCourse = async(req, res) => {
    try{
        await Course.update(req.body,{
            where:{
                course_id: req.params.course_id
            }
        });
        res.status(200).json({msg: "Course Updated"});
    } catch(error) {
        console.log(error.message);
    }
}

export const deleteCourse = async(req, res) => {
    try{
        await Course.destroy({
            where:{
                course_id: req.params.course_id
            }
        });
        res.status(200).json({msg: "Course Deleted"});
    } catch(error) {
        console.log(error.message);
    }
}