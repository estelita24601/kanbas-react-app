import { BsSearch } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
    return (
        <div id="wd-assignments" className="ms-4">

            {/* search bar and buttons */}
            <span id="wd-assignment-search-bar">
                {/* TODO: get this search icon inside of the input form */}
                <BsSearch className="fs-4" />
                <input id="wd-search-assignment" className="rounded-1 fs-4" placeholder="Search..." />
            </span>
            <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-end">+ Assignment</button>
            <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary dropdown-toggle me-1 float-end">+ Group</button>
            <br /><br />

            <ul id="wd-assignment-list list-group rounded-0">

                <li className="list-group-item p-0 mb-5 fs-5 border-gray">

                    {/* title bar with controls */}
                    {/* FIXME: doesn't look right when screen is really skinny */}
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
        </div>
    );
}
