import * as db from "../../Database"
import { useParams } from "react-router";
import { BsSearch } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";


//TODO: SECTION 3.8
/*
    -[x] Use the useParams() hook to retrieve the course's ID and then find all the assignments for that course from the database's assignments array.
    -[x] Render the assignments as links that encode the course's ID and the assignment's ID in the URL's path.
    -[x] The assignment's ID will be used by a router to render the corresponding assignment in the AssignmentEditor screen.
    -[ ] Modify assignments.json as needed.
*/

export default function Assignments() {
    const cid = useParams().cid;
    const assignments = db.assignments.filter(assignment => (assignment.course === cid));
    console.log(assignments)

    return (
        <div id="wd-assignments" className="d-flex flex-column me-4">

            <div className="d-flex align-items-center mb-4">
                {/* search bar*/}
                <span className="input-group me-5 px-2 ms-4">
                    <span className="input-group-text" id="basic-addon1">
                        <BsSearch className="fs-5" />
                    </span>
                    <input id="wd-search-assignment" type="text" className="form-control" placeholder="Search..." aria-label="Search" aria-describedby="basic-addon1" />
                </span>

                {/* add assignment group button */}
                <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary dropdown-toggle mx-1" >+ Group</button>

                {/* new assignment button */}
                <button id="wd-add-assignment" className="btn btn-lg btn-danger ms-1 text-nowrap">+ Assignment</button>
            </div>


            <ul id="wd-assignment-list list-group rounded-0">

                <li className="list-group-item p-0 mb-5 fs-5 border-gray">

                    {/* title bar with controls */}
                    <div className="wd-title d-flex align-content-center justify-content-between p-3 ps-2 bg-secondary">

                        <span>
                            <BsGripVertical className="me-2 fs-3" />
                            <b className="fs-4">ASSIGNMENTS</b>
                        </span>

                        <span>
                            <i >40% of Total</i>
                            <button className="ms-4">+</button>
                            <BiDotsVerticalRounded className="mx-2 fs-3" />
                        </span>

                    </div>

                    {/* list of actual assignments */}
                    <ul className="wd-lessons list-group rounded-0">

                        {assignments.map((assignment) => {
                            return (
                                <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                                    <div className="row">
                                        {/* left most icons */}
                                        <div className="d-flex col-auto align-items-center">
                                            <BsGripVertical className="me-2 fs-3" />
                                            <MdAssignment className="me-2 fs-3" />
                                        </div>

                                        {/* assignment title inside of a link */}
                                        <div className="col d-flex flex-column align-items-start">
                                            <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                                {assignment.title}
                                            </a>

                                            {/* TODO: add number of points to json */}
                                            {/* FIXME: whitespace inside of the span */}
                                            <span>
                                                <span className="text-danger fw-bold">Multiple Modules </span> | <b>Not available until</b> {assignment.available_date} at {assignment.available_time} | <b>Due</b> {assignment.due_by_date}
                                                at {assignment.due_by_time} | 100 pts
                                            </span>
                                        </div>

                                        {/* rightmost buttons */}
                                        <div className="d-flex col-auto align-items-center">
                                            <LessonControlButtons />
                                        </div>
                                    </div>
                                </li>
                            );
                        })
                        }
                    </ul>
                </li>
            </ul>
        </div >
    );
}
