import { useDispatch } from "react-redux";
import FacultyPrivileges from "../Account/FacultyPrivileges";

import { Enrollment } from "../Types";
import { useSelector } from "react-redux";
import { addEnrollment, removeEnrollment } from "../Account/enrollmentReducer";

export default function CourseNavCard({ course, enrollmentMode, deleteCourse, setCourse }:
    {
        course: any;
        enrollmentMode: boolean;
        deleteCourse: (course: any) => void;
        setCourse: (course: any) => void;
    }
) {

    const dispatch = useDispatch();
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const getCourseButtons = (courseId: string) => {
        //if we're not in enrollment mode just show the normal Go button
        if (!enrollmentMode) {
            return (<button className="btn btn-primary ">Go </button>);
        }

        const currCourseEnrolled = enrollments.some((entry: Enrollment) => entry.user_id === currentUser._id && entry.course_id === courseId)

        // return the red unenroll button or the green enroll button
        if (currCourseEnrolled) {
            return (
                <button className="btn btn-danger me-1"
                    onClick={(e) => {
                        e.preventDefault();
                        console.log(`dispatch(removeEnrollment()) with user_id = ${currentUser._id} and course_id = ${courseId}`)
                        dispatch(removeEnrollment({ user_id: currentUser._id, course_id: courseId }));
                    }}>
                    Unenroll
                </button>);
        } else {
            return (
                <button className="btn btn-success me-1"
                    onClick={(e) => {
                        e.preventDefault();
                        console.log(`dispatch(addEnrollment()) with user_id = ${currentUser._id} and course_id = ${courseId}`)
                        dispatch(addEnrollment({ user_id: currentUser._id, course_id: courseId }));
                    }}>
                    Enroll
                </button>);
        }
    }

    return (
        <div id={`course-card-${course._id}`}>
            <img src="/images/reactjs.jpg" width="100%" height={160} />
            <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title fw-bold"  >
                    {course.name}
                </h5>
                <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                    {course.description}
                </p>

                {getCourseButtons(course._id)}

                {/* edit and delete courses */}
                <FacultyPrivileges>
                    <button id="wd-delete-course-click" className="btn btn-danger float-end"
                        onClick={(clickEvent) => {
                            console.log(`button click to delete course\n${JSON.stringify(course, null, 2)}`)
                            clickEvent.preventDefault(); //don't navigate like the Go button does
                            deleteCourse(course._id);
                        }}>
                        Delete
                    </button>

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
        </div>
    );
}