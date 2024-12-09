import { Route, Routes, Navigate } from "react-router"
import { useState } from "react";
import { useSelector } from "react-redux";
import "./styles.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

//import clients
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
import * as enrollmentsClient from "./Enrollments/client";

//import react components
import Account from "./Account/Account";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation"
import Courses from "./Courses";

//redux stuff
import { setEnrollments } from './Enrollments/reducer';


export default function Kanbas() {
    //STATE VARIABLES
    const [enrolling, setEnrolling] = useState<boolean>(false);
    const [courses, setCourses] = useState<any[]>([]);
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

    //REDUX
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    //add course to our server and our state variable
    const addNewCourse = async () => {
        //4.4.2 get object for the new course from the server
        const newCourse = await courseClient.createCourse(course);

        //update value of the state variable
        setCourses([...courses, { ...course, ...newCourse }])
    }

    //delete a course from the server and the state variable
    const deleteCourse = async (courseId: string) => {
        //send delete request to server
        const status = await courseClient.deleteCourse(courseId);
        console.debug(`delete course status = ${status}`);

        //update state variable
        setCourses(
            courses.filter((course) => course._id !== courseId)
        );
    }

    //update a course on the server and in the state variable
    const updateCourse = async () => {
        //update server
        await courseClient.updateCourse(course);

        //update state variable
        setCourses(
            courses.map((curr_course) => {
                if (curr_course._id === course._id) {
                    return course;
                } else {
                    return curr_course;
                }
            })
        );
    };

    //only get courses the user is enrolled in
    const findCoursesForUser = async () => {
        try {
            const courses = await userClient.findCoursesForUser(currentUser._id);
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };

    //gets ALL courses and uses boolean attribute to mark the enrolled ones
    const fetchCourses = async () => {
        try {
            const allCourses = await courseClient.fetchAllCourses();
            const enrolledCourses = await userClient.findCoursesForUser(currentUser._id);

            //don't remove any courses just give boolean flag to mark enrolled courses
            const courses = allCourses.map((course: any) => {
                if (enrolledCourses.find((c: any) => c._id === course._id)) {
                    return { ...course, enrolled: true };
                } else {
                    return {...course, enrolled:false};
                }
            });
            setCourses(courses);
        } catch (error) {
            console.error(error);
        }
    };

    //get enrollments from the server and use it to update redux
    const fetchEnrollments = async () => {
        console.debug(`\tfetching enrollments for ${currentUser.username}`);
        const serverEnrollments = await enrollmentsClient.getEnrollmentsForUser(currentUser._id);
        dispatch(setEnrollments(serverEnrollments));
    }


    const updateEnrollment = async (courseId: string, enrolled: boolean) => {
        if (enrolled) {
            await userClient.enrollIntoCourse(currentUser._id, courseId);
        } else {
            await userClient.unenrollFromCourse(currentUser._id, courseId);
        }
        setCourses(
            courses.map((course) => {
                if (course._id === courseId) {
                    return { ...course, enrolled: enrolled };
                } else {
                    return course;
                }
            })
        );
    };

    //if currentUser changes then fetch courses and enrollments for that user
    useEffect(() => {
        if (currentUser) {
            fetchEnrollments();
            if (enrolling) {
                fetchCourses();
            } else {
                findCoursesForUser();
            }
        } else {
            console.log("current user doesn't exist so not going to fetch courses or enrollments");
        }
    }, [currentUser, enrolling]);

    return (
        <Session>
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
                                    fetchCourses={fetchCourses}
                                    setCourse={setCourse}
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}
                                    enrolling={enrolling}
                                    setEnrolling={setEnrolling}
                                    updateEnrollment={updateEnrollment} />
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
        </Session>
    );
}