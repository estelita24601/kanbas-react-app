import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard" className="ms-4">
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
                                    <h5 className="wd-dashboard-course-title card-title fw-bold"  >
                                        CS1234 React JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                        <div className="fst-italic text-secondary pt-1">2024 Fall</div>
                                    </p>
                                    <button className="btn btn-primary ">Go </button>
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
                                    <h5 className="wd-dashboard-course-title card-title fw-bold"  >
                                        CS 5200
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Database Management Systems
                                        <div className="fst-italic text-secondary pt-1">2024 Summer</div>
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
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
                                    <h5 className="wd-dashboard-course-title card-title fw-bold"  >
                                        CS 5520
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Mobile Application Development
                                        <div className="fst-italic text-secondary pt-1">2024 Summer</div>
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
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
                                    <h5 className="wd-dashboard-course-title card-title fw-bold"  >
                                        CS 5001
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Foundations of Computer Science
                                        <div className="fst-italic text-secondary pt-1">2023 Fall</div>
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
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
                                    <h5 className="wd-dashboard-course-title card-title fw-bold"  >
                                        CS 5004
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Object Oriented Design
                                        <div className="fst-italic text-secondary pt-1">2024 Spring</div>
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
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
                                    <h5 className="wd-dashboard-course-title card-title fw-bold"  >
                                        CS 5008
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Data Structures and Algorithms
                                        <div className="fst-italic text-secondary pt-1">2024 Spring</div>
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
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
                                    <h5 className="wd-dashboard-course-title card-title fw-bold"  >
                                        CS 5002
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Discrete Structures
                                        <div className="fst-italic text-secondary pt-1">2023 Fall</div>
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div></div>

    );
}


