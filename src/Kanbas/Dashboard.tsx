import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as db from "./Database";
import FacultyPrivileges from "./Account/FacultyPrivileges";
import StudentPrivileges from "./Account/StudentPrivileges";
import React, { useState } from "react";
import { enroll, unenroll } from "./Account/reducer";



export default function Dashboard(
  { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
  }
) {

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;

  const [enrollmentMode, setEnrollmentMode] = useState(false);
  const switchEnrollmentView = () => {
    setEnrollmentMode(!enrollmentMode);
  }

  const getCourses = () => {
    if (enrollmentMode) {
      return courses;
    } else {
      return courses.filter((course) => currentUser.userEnrollments.includes(course._id))
    }
  }

  const dispatch = useDispatch();
  const getEnrollmentButtons = (courseId: string) => {
    console.log(`enrollment mode = ${enrollmentMode}`)
    if (!enrollmentMode) {
      return (<button className="btn btn-primary ">Go </button>);
    }

    const currCourseEnrolled = enrollments.some((entry) => entry.user === currentUser._id && entry.course === courseId)

    if (currCourseEnrolled) {
      console.log(`already enrolled in course ${courseId}`)
      return (
        <button className="btn btn-danger me-1"
          onClick={(e) => {
            e.preventDefault();
            console.log("trying to UN ENROLL")
            dispatch(unenroll(courseId));
          }}>
          Unenroll
        </button>);
    } else {
      console.log(`not yet enrolled in course ${courseId}`)
      return (
        <button className="btn btn-success me-1"
          onClick={(e) => {
            e.preventDefault();
            console.log("trying to ENROLL")
            dispatch(enroll(courseId));
          }}>
          Enroll
        </button>);
    }
  }

  return (
    <div id="wd-dashboard" className="ms-4">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

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
        <input id="input-course-name" value={course.name} className="form-control mb-2"
          onChange={(changeEvent) => setCourse({ ...course, name: changeEvent.target.value })}
        />

        {/* text area for new course's description */}
        <textarea id="input-course-description" value={course.description} className="form-control"
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
          {getCourses()
            .map(course => (
              <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to={`/Kanbas/Courses/${course._id}/Home`}>

                    <img src="/images/reactjs.jpg" width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title fw-bold"  >
                        {course.name}
                      </h5>
                      <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {course.description}
                      </p>



                      <FacultyPrivileges>
                        <button id="wd-delete-course-click" className="btn btn-danger float-end"
                          onClick={(clickEvent) => {
                            console.log(`button click to delete course\n${JSON.stringify(course, null, 2)}`)
                            clickEvent.preventDefault(); //don't navigate like the Go button does
                            deleteCourse(course._id);
                          }}>
                          Delete
                        </button>
                      </FacultyPrivileges>

                      {getEnrollmentButtons(course._id)}

                      <FacultyPrivileges>
                        <button id="id-wd-edit-course-click" className="btn btn-warning float-end me-2"
                          onClick={(event) => {
                            console.log(`button click to edit course\n${JSON.stringify(course, null, 2)}`)
                            event.preventDefault(); //don't navigate like the Go button does
                            setCourse(course);
                          }}>
                          Edit
                        </button>
                      </FacultyPrivileges>

                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}


