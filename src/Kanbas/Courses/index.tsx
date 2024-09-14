import CoursesNavigation from "./Navigation";
import {Navigate, Route, Routes} from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";

export default function Courses() {
    return (
        <div id="wd-courses">
            <h2>Course 1234</h2>
            <hr color={"black"}/>
            <table>
                <tbody>
                <tr>
                    <td valign="top" width="100px" style={{backgroundColor: "#DEE5D4", padding:"10px"}}>
                        <CoursesNavigation/>
                    </td>

                    {/*column just for spacing*/}
                    <td width="20px"></td>

                    <td valign="top">
                        <Routes>
                            <Route path="/" element={<Navigate to="Home"/>}/>
                            <Route path="/Home" element={<Home/>}/>
                            <Route path="/Modules" element={<Modules/>}/>
                            <Route path="/Piazza" element={<h2>Piazza...</h2>}/>
                            <Route path="/Zoom" element={<h2>Zoom...</h2>}/>
                            <Route path="/Assignments" element={<Assignments/>}/>
                            <Route path="/Assignments/:aid" element={<AssignmentEditor/>}/>
                            <Route path="/Quizzes" element={<h2>Quizzes...</h2>}/>
                            <Route path="/Grades" element={<h2>Grades...</h2>}/>

                            {/*FIXME: nothing shows when I click this*/}
                            <Route path="/People" element={<h2>People...</h2>}/>
                        </Routes>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
