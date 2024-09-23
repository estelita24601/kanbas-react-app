import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />

            <div id="wd-dashboard-courses" className="row">

                <div className="row rows-cols-1 rows-cols-md-5 g-4">

                    {/* FIXME: how to style these cards inside the bootstrap grid so they stay the same size but rearrange within the window? */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        {/* CS 1234 */}
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.jpg" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                    <p className="card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>

                        {/* CS 5200 */}
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                                <img src="/images/dbms.png" width="100%" />

                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title"> CS 5200</h5>
                                    <p className="card-text">Database Management Systems</p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>

                        {/* CS 5520 */}
                        <div className="card">

                            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">

                                <img src="/images/android_logo.png" width="100%" />

                                <div className="card-body">

                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS 5520
                                    </h5>

                                    <p className="card-text">
                                        Mobile Application Development
                                    </p>

                                    <button className="btn btn-primary">Go</button>

                                </div>

                            </Link>

                        </div>

                        {/* CS 5001 */}
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                                <img src="/images/python.png" width="100%" />
                                <div className="card-body">

                                    <h5 className="wd-dashboard-course-title card-title">CS 5001</h5>
                                    <p className="card-text">Intensive Foundations of Computer Science</p>
                                    <button className="btn btn-primary">Go</button>

                                </div>

                            </Link>
                        </div>

                        {/* CS 5002 */}
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                                <img src="/images/fibonacci.png" width="100%" />
                                <div className="card-body">

                                    <h5 className="wd-dashboard-course-title card-title">CS 5002</h5>
                                    <p className="card-text">Discrete Structures</p>
                                    <button className="btn btn-primary">Go</button>

                                </div>

                            </Link>
                        </div>

                        {/* CS 5004 */}
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                                <img src="/images/design.jpeg" width="100%" />
                                <div className="card-body">

                                    <h5 className="wd-dashboard-course-title card-title">CS 5004</h5>
                                    <p className="card-text">Object-Oriented Design</p>
                                    <button className="btn btn-primary">Go</button>

                                </div>

                            </Link>
                        </div>

                        {/* CS 5008 */}
                        <div className="card">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                                <img src="/images/dsa.png" width="100%" />
                                <div className="card-body">

                                    <h5 className="wd-dashboard-course-title card-title">CS 5008</h5>
                                    <p className="card-text">Data Structures and Algorithms</p>
                                    <button className="btn btn-primary">Go</button>

                                </div>

                            </Link>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}
