import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FacultyPrivileges from "./Account/FacultyPrivileges";
import StudentPrivileges from "./Account/StudentPrivileges";
import { addEnrollment, removeEnrollment } from "./Account/enrollmentReducer";
import { Enrollment } from "./Types";
import CourseNavCard from "./Courses/CourseNavCard";
import { current } from "@reduxjs/toolkit";


export default function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}
) {

  const dispatch = useDispatch();
  //redux for user
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  //local state for enrollment mode
  const [enrollmentMode, setEnrollmentMode] = useState(false);

  //redux for list of enrollments
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  // function that changes swaps enrollment mode
  const switchEnrollmentView = () => {
    setEnrollmentMode(!enrollmentMode);
  }

  //return boolean for if the current user is enrolled in a given course
  const isUserEnrolled = (currCourse: any) => enrollments.some((currEnroll: Enrollment) => currEnroll.user_id === currentUser && currEnroll.course_id === currCourse._id);


  return (
    <div id="wd-dashboard" className="ms-4">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      {/* Course Editing Controls */}
      <FacultyPrivileges>
        <h5>New Course
          {/* button for adding new courses */}
          <button id="wd-add-new-course-click"
            className="btn btn-primary float-end"
            onClick={addNewCourse}
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

      <StudentPrivileges>
        <button className="btn btn-primary float-end" onClick={switchEnrollmentView}>Enrollments</button>
      </StudentPrivileges>

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />

      <div id="wd-dashboard-courses" className="row">

        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            .filter(course => {
              if (currentUser.role === "FACULTY") {
                return true;
              } else if (currentUser.role === "STUDENT" && enrollmentMode) {
                return true;
              } else {
                return isUserEnrolled(course);
              }
            })
            .map(course => {
              if (enrollmentMode && !isUserEnrolled(course)) {
                return (
                  <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                    <div className="card rounded-3 overflow-hidden">
                      <CourseNavCard
                        course={course}
                        enrollmentMode={enrollmentMode}
                        deleteCourse={deleteCourse}
                        setCourse={setCourse}
                      />
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                    <div className="card rounded-3 overflow-hidden">
                      <Link to={`/Kanbas/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark"
                      >
                        <CourseNavCard
                          course={course}
                          enrollmentMode={enrollmentMode}
                          deleteCourse={deleteCourse}
                          setCourse={setCourse}
                        />
                      </Link>
                    </div>
                  </div>
                );
              }
            })
          }
        </div>

      </div>

    </div>

  );
}


