import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Materi from './pages/Materi';
import Course from './pages/Course';
import AddCourse from './pages/AddCourse';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/materi' element={<Materi/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/addcourse' element={<AddCourse/>}/>
      </Routes>
    </Router>
  );
}