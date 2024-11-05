import { Route, Routes, Navigate } from "react-router"
import Account from "./Account/Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation"
import Courses from "./Courses";
import "./styles.css";
import React, { useState } from "react";
import * as db from "./Database";
import ProtectedRoute from "./Account/ProtectedRoute";

export default function Kanbas() {
    //state variable named `courses` of type any[] which means it's an array of values of any data type
    //the state variable initially starts with what it gets from db.courses
    const [courses, setCourses] = useState<any[]>(db.courses);

    //state variable named `course` of type any
    const [course, setCourse] = useState<any>(
        // initial is an object with the default values for a course
        {
            _id: "0",
            name: "New Course",
            number: "New Number",
            startDate: "2023-09-10",
            endDate: "2023-12-15",
            image: "/images/reactjs.jpg",
            description: "New Description"
        }
    );



    //function to add a new course to `courses`
    //user input for the name and description, generates timestamp for _id then the rest is default values
    const addNewCourse = () => {
        const timestamp = new Date().getTime().toString();

        //object for the new course
        const newCourse = {
            ...course, //start with the values from the default course object
            _id: timestamp
        }
        console.log(`adding course to list of courses\n${JSON.stringify(newCourse, null, 2)}`)

        //update value of the state variable
        setCourses([...courses, { ...course, ...newCourse }])

        return timestamp;
    }

    //function to delete a course from `courses`
    const deleteCourse = (courseId: string) => {
        console.log(`\ttrying to delete course with id = ${courseId}`)
        setCourses(
            //set `courses` value to be itself after filtering out the given course
            courses.filter(
                // keep the course if it's id doesn't match `courseId`
                (course) => course._id !== courseId
            )
        );
    }

    //function for updating a course
    const updateCourse = () => {
        setCourses(
            courses.map((curr_course) => {
                if (curr_course._id === course._id) {
                    console.log(`replacing course ${JSON.stringify(curr_course, null, 2)}\nNEW COURSE = ${JSON.stringify(course, null, 2)}`)
                    return course;
                } else {
                    return curr_course;
                }
            })
        );
    };


    return (
        <div id="wd-kanbas">
            <div className="d-none d-lg-block">
                <KanbasNavigation />
            </div>

            <div className="wd-main-content-offset p-3">
                <Routes>
                    <Route path="/" element={<Navigate to="Account" />} />
                    <Route path="/Account/*" element={<Account />} />
                    <Route path="/Dashboard" element={
                        <ProtectedRoute>
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse} />
                        </ProtectedRoute>
                    } />
                    <Route path="/Courses/:cid/*" element={
                        <ProtectedRoute>
                            <Courses courses={courses} />
                        </ProtectedRoute>}
                    />
                    <Route path="/Calendar" element={<h1>TODO:Calendar</h1>} />
                    <Route path="/Inbox" element={<h1>TODO:Inbox</h1>} />
                </Routes>
            </div>

        </div>
    );
}