import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FacultyPrivileges from "./Account/FacultyPrivileges";
import StudentPrivileges from "./Account/StudentPrivileges";
import { addEnrollment, removeEnrollment } from "./Account/enrollmentReducer";
import { Enrollment } from "./Types";
import CourseNavCard from "./Courses/CourseNavCard";


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

  // FIXME: function that gets the courses we want to display
  const getCourses = () => {
    // if enrollment mode is ON the show all the courses
    if (enrollmentMode) {
      return courses;
    }
    // if enrollment mode is OFF then only show courses current user is enrolled in
    else {

      const userEnrollments = enrollments.filter((enroll: Enrollment) => enroll.user_id === currentUser._id);

      return courses.filter((course) => {
        if (userEnrollments.find((e: Enrollment) => e.course_id === course) !== undefined) {
          return true;
        }
        return false;
      })
    }
  }

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
            .map(course => (
              //
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

                {/* end of div for a single course */}
              </div>
            ))}
        </div>

        {/* end of div for all courses */}
      </div>


    </div>
  );
}


