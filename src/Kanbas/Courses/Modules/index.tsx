import ModulesControls from "./ModuleControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
export default function Modules() {
    return (
        <div className="mx-5">
            <ModulesControls />
            <br />
            <br />
            <br />
            <br />

            <ul id="wd-modules" className="list-group rounded-0">
                {/* MODULE 1 */}
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    {/* Module Title Bar */}
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Week 1 - Course Intro
                        <ModuleControlButtons />
                    </div>

                    {/* Module Content */}
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <b>LEARNING OBJECTIVES</b>
                            <LessonControlButtons />
                        </li>

                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Introduction to the course
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Learn what is Web Development
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Create a development environment
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Creating a Web Application
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Getting started with the 1st assignment
                            <LessonControlButtons />
                        </li>

                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <b>READING</b>
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Chapter 1 - Introduction
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Chapter 2 - Creating User Interfaces with HTML
                            <LessonControlButtons />
                        </li>

                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <b>SLIDES</b>
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Introduction to Web Development
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Creating an HTTP server with Node.js
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Creating a React Application
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Commit your source to Github.com
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Deploying to Netlify
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Deploying multiple branches in Netlify
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Introduction to HTML and the DOM
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Formatting Web content with Headings and Paragraphs
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Formatting content with Lists and Tables
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Creating Web Forms
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Navigating with Anchors
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Single Page Navigation
                            <LessonControlButtons />
                        </li>
                    </ul>
                </li>
                <br />

                {/* MODULE 2 */}
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    {/* Module Title Bar */}
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Week 2 - Formatting User Interfaces with HTML
                        <ModuleControlButtons />
                    </div>

                    {/* Module Content */}
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <b>LEARNING OBJECTIVES</b>
                            <LessonControlButtons />
                        </li>

                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Learn how to create user interfaces with HTML
                            <LessonControlButtons />
                        </li>

                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Keep working on assignment 1
                            <LessonControlButtons />
                        </li>

                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Deploy the assignment to Netlify
                            <LessonControlButtons />
                        </li>

                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <b>READING</b>
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Chapter 1 - Introduction
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Chapter 2 - Creating User Interfaces with HTML
                            <LessonControlButtons />
                        </li>

                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <b>SLIDES</b>
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Embedding content with Iframes
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Drawing with Scalable Vector Graphics
                            <LessonControlButtons />
                        </li>
                    </ul>
                </li>
                <br />

                {/* MODULE 3 */}
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    {/* Module Title Bar */}
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Week 3 - Styling User Interfaces with CSS
                        <ModuleControlButtons />
                    </div>

                    {/* Module Content */}
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <b>LEARNING OBJECTIVES</b>
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Introduction to CSS
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Selectors by tag ID, classes, and document structure
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Styling color and background color
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Styling dimensions and positions
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            The box model - styling margins, borders, and paddings
                            <LessonControlButtons />
                        </li>

                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <b>READING</b>
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Chapter 3 - Styling User Interfaces With Cascading Style Sheets
                            <LessonControlButtons />
                        </li>

                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <b>SLIDES</b>
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Intro to Cascading Style Sheets
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Styling with Colors
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            The Box Model
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Size & Position
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Float
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Rotating content & Gradient background
                            <LessonControlButtons />
                        </li>
                        <li className="wd-content-item list-group-item ps-1">
                            <BsGripVertical className="me-5 fs-3" />
                            Flex
                            <LessonControlButtons />
                        </li>
                    </ul>
                </li>
                <br />
            </ul>
        </div>
    );
}
