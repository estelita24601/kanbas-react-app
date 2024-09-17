export default function Modules() {
    return (
        <div>
            <button onClick={() => alert("TODO: collapse all functionality")} type={"button"}>Collapse All</button>

            <button onClick={() => alert("TODO: view progress functionality")} type={"button"}>View Progress</button>

            <select>
                <option>Publish All</option>
                <option>Save All</option>
                <option>Export All</option>
            </select>

            <button onClick={() => alert("TODO: add new module functionality")} type={"button"}>+ Module</button>
            <ul id="wd-modules">
                {/* module 1 */}
                <li className="wd-module">
                    <div className="wd-title"><b>Week 1 - Course Intro, Syllabus, Agenda, Internet, Web, HTML, Assignment 1</b></div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">

                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                                <li className="wd-content-item">Create a development environment</li>
                                <li className="wd-content-item">Creating a Web Application</li>
                                <li className="wd-content-item">Getting started with the 1st assignment</li>
                            </ul>
                        </li>

                        <li className="wd-lesson">

                            <span>READING</span>
                            <ul>
                                <li>Full Stack Developer - Chapter 1 - Introduction</li>
                                <li>Fill Stack Developer - Chapter 2 - Creating User Interfaces with HTML</li>
                            </ul>
                        </li>

                        <li className="wd-lesson">

                            <span>SLIDES</span>
                            <ul>
                                <li>Introduction to Web Development</li>
                                <li>Creating an HTTP server with Node.js</li>
                                <li>Creating a React Application</li>
                                <li>Commit your source to Github.com</li>
                                <li>Deploying to Netlify</li>
                                <li>Deploying multiple branches in Netlify</li>
                                <li>Introduction to HTML and the DOM</li>
                                <li>Formatting Web content with Headings and Paragraphs</li>
                                <li>Formatting content with Lists and Tables</li>
                                <li>Creating Web Forms</li>
                                <li>Navigating with Anchors</li>
                                <li>Single Page Navigation</li>
                            </ul>
                        </li>

                    </ul>
                </li> <br />

                {/* module 2 */}
                <li className="wd-module">
                    <div className="wd-title"><b>Week 2 - Formatting User Interfaces with HTML</b></div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                                <li className="wd-content-item">Keep working on assignment 1</li>
                                <li className="wd-content-item">Deploy the assignment to Netlify</li>
                            </ul>
                        </li>

                        <li className="wd-lesson">
                            <span>READING</span>
                            <ul className="wd-content">
                                <li>Full Stack Developer - Chapter 1 - Introduction</li>
                                <li>Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</li>
                            </ul>
                        </li>

                        <li className="wd-lesson">
                            <span>SLIDES</span>
                            <ul className="wd-content">
                                <li>Embedding content with Iframes</li>
                                <li>Drawing with Scalable Vector Graphics</li>
                            </ul>
                        </li>
                    </ul>
                </li> <br />

                {/* module 3 */}
                <li className="wd-module">
                    <div className="wd-title"><b>Week 3 - Styling User Interfaces with CSS, Assignment 2</b></div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to CSS</li>
                                <li className="wd-content-item">Selectors by tag ID, classes, and document structure</li>
                                <li className="wd-content-item">Styling color and background color</li>
                                <li className="wd-content-item">Styling dimensions and positions</li>
                                <li className="wd-content-item">The box model - styling margins, borders, and paddings</li>
                            </ul>
                        </li>

                        <li className="wd-lesson">
                            <span>READING</span>
                            <ul className="wd-content">
                                <li>Full Stack Developer - Chapter 3 - Styling User Interfaces With Cascading Style Sheets</li>
                            </ul>
                        </li>

                        <li className="wd-lesson">
                            <span>SLIDES</span>
                            <ul className="wd-content">
                                <li>Intro to Cascading Style Sheets</li>
                                <li>Styling with Colors</li>
                                <li>The Box Model</li>
                                <li>Size & Position</li>
                                <li>Float</li>
                                <li>Rotating content & Gradient background</li>
                                <li>Flex</li>
                            </ul>
                        </li>
                    </ul>
                </li> <br />

            </ul>
        </div>
    );
}
