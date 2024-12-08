import { useState } from "react";
import { useEffect } from "react";
import { Link, NavigateFunction } from "react-router-dom";
import { useSelector } from "react-redux";
import { Enrollment } from "./Types";
import { useNavigate } from "react-router-dom";
import CourseNavCard from "./Courses/CourseNavCard";
import StudentPrivileges from "./Account/StudentPrivileges";
import FacultyPrivileges from "./Account/FacultyPrivileges";
import * as coursesClient from "./Courses/client";


export default function Dashboard(
  {
    courses, //state variable from index that has courses for the current user
    course, //state variable from index
    fetchCourses, //func from index that gets courses for current user
    setCourse, //setter for the state variable
    addNewCourse, //updates server and state variable
    deleteCourse, //updates server and state variable
    updateCourse, //updates server and state variable
    enrolling, //state variable for enrollment mode
    setEnrolling //set enrollment mode
  }:
    {
      courses: any[];
      course: any;
      fetchCourses: () => Promise<void>;
      setCourse: (course: any) => void;
      addNewCourse: () => Promise<void>;
      deleteCourse: (course: any) => Promise<void>;
      updateCourse: () => Promise<void>;
      enrolling: boolean;
      setEnrolling: (enrolling: boolean) => void;
    }
) {
  //REDUX
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  //if enrolling mode show all courses, else filter to only show enrolled courses
  const coursesToDisplay = enrolling ? courses : courses.filter(c => c.enrolled === true);

  useEffect(() => {
    console.log("Dashboard useEffect - fetchCourses after enrollments change");
    fetchCourses(); //returns ALL courses and marks which ones current user is enrolled in
  }, [enrollments]);

  return (
    <div id="wd-dashboard" className="ms-4">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      {/* Let faculty edit, add and delete courses */}
      {dashboardCourseControls(course, addNewCourse, setCourse, updateCourse)}

      <StudentPrivileges>
        <button className="btn btn-primary float-end" onClick={e => setEnrolling(!enrolling)}>
          {enrolling? "Show My Courses" : "Show All Courses"}
        </button>
      </StudentPrivileges>

      <h2 id="wd-dashboard-published">Published Courses ({coursesToDisplay.length})</h2> <hr />

      <div id="wd-dashboard-courses" className="row">

        <div className="row row-cols-1 row-cols-md-5 g-4">
          {coursesToDisplay
            .filter((currCourse) => enrolling || currCourse.enrolled === true || currCourse.status === "ENROLLED") //show course if user is enrolled in it OR if we're in enrollment mode
            .map((currCourse) => { return dashboardCourseMapper(currCourse, enrolling, setCourse, deleteCourse); })}
        </div>

      </div>

    </div>

  );
}

function dashboardCourseControls(course: any, addNewCourse: () => Promise<void>, setCourse: (course: any) => void, updateCourse: () => void) {
  return (
    <FacultyPrivileges>
      <h5>New Course
        {/* button for adding new courses */}
        <button id="wd-add-new-course-click"
          className="btn btn-primary float-end"
          onClick={(e) => {
            e.preventDefault();
            addNewCourse();
          }}
        >
          Add
        </button>

        {/* button for updating a course */}
        <button id="wd-update-course-click"
          className="btn btn-warning float-end me-2"
          onClick={updateCourse}
        >
          Update
        </button>
      </h5>
      <br />

      {/* input field for new course's name */}
      <input id="input-course-name"
        value={course.name}
        className="form-control mb-2"
        onChange={(changeEvent) => setCourse({ ...course, name: changeEvent.target.value })}
      />

      {/* text area for new course's description */}
      <textarea id="input-course-description"
        value={course.description}
        className="form-control"
        onChange={(changeEvent) => setCourse({ ...course, description: changeEvent.target.value })}
      />
      <hr />
    </FacultyPrivileges>
  );
}

function dashboardCourseMapper(courseToMap: any, enrolling: boolean, setCourse: (course: any) => void, deleteCourse: (course: any) => void) {
  if (courseToMap.enrolled === true || courseToMap.status === "ENROLLED") {
    //if enrolled wrap course card in link to the homepage
    return (
      <div key={`dashboard-course-${courseToMap._id}`} className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <Link
            to={`/Kanbas/Courses/${courseToMap._id}/Home`}
            className="wd-dashboard-course-link text-decoration-none text-dark"
          >
            <CourseNavCard
              course={courseToMap}
              enrollmentMode={enrolling}
              deleteCourse={deleteCourse}
              setCourse={setCourse}
            />
          </Link>
        </div>
      </div >
    );
  } else {
    return (
      <div key={`dashboard-course-${courseToMap._id}`} className="wd-dashboard-course col" style={{ width: "300px" }}>
        <div className="card rounded-3 overflow-hidden">
          <CourseNavCard
            course={courseToMap}
            enrollmentMode={enrolling}
            deleteCourse={deleteCourse}
            setCourse={setCourse}
          />
        </div>
      </div>
    );
  }
}