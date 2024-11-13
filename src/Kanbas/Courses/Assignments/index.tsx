import { BsSearch } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
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

                        {/* first assignment */}
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">

                            <div className="row">
                                {/* left most icons */}
                                <div className="d-flex col-auto align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <MdAssignment className="me-2 fs-3" />
                                </div>

                                {/* assignment title inside of a link */}
                                <div className="col d-flex flex-column align-items-start">
                                    <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                        A1 - ENV + HTML
                                    </a>
                                    <span>
                                        <span className="text-danger fw-bold">Multiple Modules </span> | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13
                                        at 11:59pm | 100 pts
                                    </span>
                                </div>

                                {/* rightmost buttons */}
                                <div className="d-flex col-auto align-items-center">
                                    <LessonControlButtons />
                                </div>
                            </div>
                        </li>

                        {/* second assignment */}
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">

                            <div className="row">
                                {/* left most icons */}
                                <div className="d-flex col-auto align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <MdAssignment className="me-2 fs-3" />
                                </div>

                                {/* assignment title inside of a link */}
                                <div className="col d-flex flex-column align-items-start">
                                    <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                        A2 - CSS + BOOTSTRAP
                                    </a>
                                    <span>
                                        <span className="text-danger fw-bold">Multiple Modules </span> | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20
                                        at 11:59pm | 100 pts
                                    </span>
                                </div>

                                {/* rightmost buttons */}
                                <div className="d-flex col-auto align-items-center">
                                    <LessonControlButtons />
                                </div>
                            </div>
                        </li>

                        {/* third assignment */}
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">

                            <div className="row">
                                {/* left most icons */}
                                <div className="d-flex col-auto align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <MdAssignment className="me-2 fs-3" />
                                </div>

                                {/* assignment title inside of a link */}
                                <div className="col d-flex flex-column align-items-start">
                                    <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                        A3 - JAVASCRIPT + REACT
                                    </a>
                                    <span>
                                        <span className="text-danger fw-bold">Multiple Modules </span> | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27
                                        at 11:59pm | 100 pts
                                    </span>
                                </div>

                                {/* rightmost buttons */}
                                <div className="d-flex col-auto align-items-center">
                                    <LessonControlButtons />
                                </div>
                            </div>
                        </li>

                        {/* fourth assignment */}
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">

                            <div className="row">
                                {/* left most icons */}
                                <div className="d-flex col-auto align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    <MdAssignment className="me-2 fs-3" />
                                </div>

                                {/* assignment title inside of a link */}
                                <div className="col d-flex flex-column align-items-start">
                                    <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                        A4
                                    </a>
                                    <span>
                                        <span className="text-danger fw-bold">Multiple Modules </span> | <b>Not available until</b> Oct 5 at 12:00am | <b>Due</b> Oct 31
                                        at 11:59pm | 100 pts
                                    </span>
                                </div>

                                {/* rightmost buttons */}
                                <div className="d-flex col-auto align-items-center">
                                    <LessonControlButtons />
                                </div>
                            </div>
                        </li>

                    </ul>

                </li>

            </ul>
        </div >
    );
}
