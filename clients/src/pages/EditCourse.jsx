import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditCourse = () => {
    const [course_name, setCourseName] = useState("");
    const [course_description, setCourseDescription] = useState("");
    const [course_jp, setCourseJP] = useState(0);
    const navigate = useNavigate();
    const { course_id } = useParams();

    useEffect(()=>{
        getCourseById();
    },[])

    const updateCourse = async (e) => {
        try {
            e.preventDefault();
            await axios.patch(`http://localhost:5000/course/${course_id}`, {
                course_name,
                course_description,
                course_jp
            });
            navigate("/course");
        } catch (error) {
            console.log(error)
        }
    }

    const getCourseById = async () => {
        const response = await axios.get(`http://localhost:5000/course/:${course_id}`)
        setCourseName(response.data.course_name);
        setCourseDescription(response.data.course_description);
        setCourseJP(response.data.course_jp);
    }

    return (
        <section className="bg-white min-h-screen dark:bg-gray-800">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Edit Course</h2>
                <form onSubmit={updateCourse}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">


                        <div className="w-full">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Name</label>
                            <input type="text"
                                value={course_name}
                                onChange={(e) => setCourseName(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type course name" required="" />
                        </div>
                        <div className="w-full">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Learning (Hours)</label>
                            <input type="number"
                                value={course_jp}
                                onChange={(e) => setCourseJP(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="24" required="" />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <input type='text'
                                value={course_description}
                                onChange={(e) => setCourseDescription(e.target.value)}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Course description here" />
                        </div>


                    </div>
                    <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                        Edit Course
                    </button>


                </form>
            </div>
        </section>
    )
}

export default EditCourse