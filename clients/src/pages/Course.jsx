import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Course = () => {

    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getCourses();
    }, []);

    const getCourses = async () => {
        const response = await axios.get('http://localhost:5000/course');
        setCourses(response.data);
    }

    return (
        <div>
            <Navbar />
            <button onClick={() => {navigate('/addcourse')}} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">+ Add Course</button>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                No.
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Course Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Course Description
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Course Learning Hours
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map((course,index) => (
                                <tr key={course.id} class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {index+1}
                                    </th>
                                    <td class="px-6 py-4">
                                        {course.course_name}
                                    </td>
                                    <td class="px-6 py-4">
                                        {course.course_description}
                                    </td>
                                    <td class="px-6 py-4">
                                        {course.course_jp} Hours
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Course