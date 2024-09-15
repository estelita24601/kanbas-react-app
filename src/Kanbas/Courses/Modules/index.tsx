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

            {/*TODO: add the rest of stuff from canvas, readings slides etc*/}
            <ul id="wd-modules">
                {/* module 1.1 */}
                <li className="wd-module">
                    <div className="wd-title">Week 1, Lecture 1 - Course Intro, Syllabus, Agenda</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
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
                            </ul>
                        </li>
                    </ul>
                </li> <br />

                {/* module 1.2 */}
                <li className="wd-module">
                    <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">TODO</li>
                                <li className="wd-content-item">TODO</li>
                            </ul>
                        </li>

                        <li className="wd-lesson">
                            <span>READING</span>
                            <ul className="wd-content">
                                <li>TODO</li>
                            </ul>
                        </li>

                        <li className="wd-lesson">
                            <span>SLIDES</span>
                            <ul className="wd-content">
                                <li>TODO</li>
                            </ul>
                        </li>
                    </ul>
                </li> <br />

                {/* module 2 */}
                <li className="wd-module">
                    <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">TODO</li>
                                <li className="wd-content-item">TODO</li>
                            </ul>
                        </li>

                        <li className="wd-lesson">
                            <span>READING</span>
                            <ul className="wd-content">
                                <li>TODO</li>
                            </ul>
                        </li>

                        <li className="wd-lesson">
                            <span>SLIDES</span>
                            <ul className="wd-content">
                                <li>TODO</li>
                            </ul>
                        </li>
                    </ul>
                </li> <br />

            </ul>
        </div>
    );
}
