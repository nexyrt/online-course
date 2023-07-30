import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Materi from './pages/Materi';
import Course from './pages/Course';
import AddCourse from './pages/AddCourse';
import EditCourse from './pages/EditCourse';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/materi' element={<Materi/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='course/addcourse' element={<AddCourse/>}/>
        <Route path='course/editcourse/:course_id' element={<EditCourse/>}/>
      </Routes>
    </Router>
  );
}