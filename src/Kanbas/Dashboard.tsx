import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />

            <div id="wd-dashboard-courses" className="row">


                <div className="row row-cols-1 row-cols-md-5 g-4">

                    {/* CS 1234 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.jpg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary"> <FaHome /> </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* CS 5200 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/dbms.png" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS 5200
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Database Management Systems
                                    </p>
                                    <button className="btn btn-primary"> <FaHome /> </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* CS 5520 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/android_logo.png" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS 5520
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Mobile Application Development
                                    </p>
                                    <button className="btn btn-primary"> <FaHome /> </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* 5001 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/python.png" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS 5001
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Intensive Foundations of Computer Science
                                    </p>
                                    <button className="btn btn-primary"> <FaHome /> </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* CS 5004 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/design.jpeg" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS 5004
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Object Oriented Design
                                    </p>
                                    <button className="btn btn-primary"> <FaHome /> </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* 5008 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/dsa.png" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS 5008
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Data Structures and Algorithms
                                    </p>
                                    <button className="btn btn-primary"> <FaHome /> </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* 5002 */}
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/fibonacci.png" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS 5002
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Discrete Structures
                                    </p>
                                    <button className="btn btn-primary"> <FaHome /> </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div></div>

    );
}


