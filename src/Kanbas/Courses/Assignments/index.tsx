import { MdAssignment } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
    return (
        <div id="wd-assignments" className="ms-4">

            {/* search bar and buttons */}
            <input id="wd-search-assignment" placeholder="Search for Assignments" />
            <button id="wd-add-assignment-group">+ Group</button>
            <button id="wd-add-assignment">+ Assignment</button>
            <br /><br />

            <ul id="wd-assignment-list list-group rounded-0">

                <li className="list-group-item p-0 mb-5 fs-5 border-gray">
                    {/* title bar with controls */}
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <BiDotsVerticalRounded className="mx-2 fs-3 float-end" />
                        <button className="float-end ms-4">+</button>
                        <i className="float-end">40% of Total</i>
                    </div>

                    {/* list of actual assignments */}
                    <ul className="wd-lessons list-group rounded-0">

                        {/* first assignment */}
                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">

                            {/* left most icons */}
                            <BsGripVertical className="me-2 fs-3" />
                            <MdAssignment className="me-2 fs-3" />

                            {/* assignment title inside of a link */}
                            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                A1 - ENV + HTML
                            </a><br />
                            {/* TODO: assignment description */}
                            Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13
                            at 11:59pm | 100 pts

                            <LessonControlButtons />

                        </li>

                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <MdAssignment className="me-2 fs-3" />

                            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                A2 - CSS + BOOTSTRAP
                            </a><br />

                            Multiple Modules | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20
                            at 11:59pm | 100 pts

                            <LessonControlButtons />
                        </li>

                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <MdAssignment className="me-2 fs-3" />

                            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                A3 - JAVASCRIPT + REACT
                            </a><br />
                            Multiple Modules | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27
                            at 11:59pm | 100 pts

                            <LessonControlButtons />
                        </li>

                        <li className="wd-assignment-list-item list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <MdAssignment className="me-2 fs-3" />

                            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                A4
                            </a><br />
                            Multiple Modules | <b>Not available until</b> Oct 5 at 12:00am | <b>Due</b> Oct 31
                            at 11:59pm | 100 pts

                            <LessonControlButtons />
                        </li>

                    </ul>

                </li>

            </ul>
        </div>
    );
}
