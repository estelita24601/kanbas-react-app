import { useDispatch } from "react-redux";
import FacultyPrivileges from "../Account/FacultyPrivileges";
import { Enrollment } from "../Types";
import { useSelector } from "react-redux";
import { addEnrollment, removeEnrollment } from "../Enrollments/reducer";
import * as enrollmentClient from "../Enrollments/client";

export default function CourseNavCard({ course, enrollmentMode, deleteCourse, setCourse }:
    {
        course: any;
        enrollmentMode: boolean; //is user allowed to modify their enrollment?
        deleteCourse: (course: any) => void;
        setCourse: (course: any) => void;
    }
) {
    const dispatch = useDispatch();
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const newEnrollment = async () => {
        const enrollment = { user_id: currentUser._id, course_id: course._id };
        console.log(`new enrollment - ${JSON.stringify(enrollment)}`);

        await enrollmentClient.addEnrollment(enrollment.user_id, enrollment.course_id);
        dispatch(addEnrollment(enrollment))
    }

    const deleteEnrollment = async () => {
        const enrollment = { user_id: currentUser._id, course_id: course._id };
        console.log(`going to delete enrollment - ${JSON.stringify(enrollment)}`);

        dispatch(removeEnrollment(enrollment))
        await enrollmentClient.removeEnrollment(enrollment.user_id, enrollment.course_id);
    }

    //see if current user is enrolled in this specific course
    const isEnrolled = enrollments.some((e: Enrollment) => isUserEnrolled(currentUser, e, course));

    const goButton = <button className="btn btn-primary ">Go </button>;
    const unEnrollButton =
        <button className="btn btn-danger me-1 float-end"
            onClick={(e) => {
                e.preventDefault();
                deleteEnrollment();
            }}>
            Unenroll
        </button>
    const enrollButton =
        <button className="btn btn-success me-1 mb-3 float-end"
            onClick={(e) => {
                e.preventDefault();
                newEnrollment();
            }}>
            Enroll
        </button>
    const getCourseButtons = (courseId: string) => {

        if (enrollmentMode) {
            if (isEnrolled === true) {
                //we're currently enrolled so we can go to course OR un enroll
                return (<span>{goButton}{unEnrollButton}</span>);
            } else {
                //we're not currently enrolled so can't use go button
                return enrollButton;
            }
        }
        //if we're not in enrollment mode just show the normal Go button
        return (goButton);
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

function isUserEnrolled(currentUser: any, enrollment: any, course: any) {
    console.log(`ENROLLMENT ENTRY: ${JSON.stringify(enrollment)}`);
    const sameUser = enrollment.user === currentUser._id;
    console.log(`${sameUser}\tCURRENT USER: ${currentUser._id}`);
    const sameCourse = enrollment.course === course._id;
    console.log(`${sameCourse}\tCURRENT COURSE: ${course._id}`);
    return sameUser && sameCourse;
}