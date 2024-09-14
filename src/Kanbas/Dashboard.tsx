import {Link} from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr/>
            <h2 id="wd-dashboard-published">Published Courses (12)</h2>
            <hr/>

            <div id="wd-dashboard-courses">

                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/1234/Home">
                            CS1234 React JS
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                        <hr color="lightgray"/>
                        <br/>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/dbms.png" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/1234/Home">
                            CS 5200
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Database Management Systems
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                        <hr color="lightgray"/>
                        <br/>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/android_logo.png" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/1234/Home">
                            CS 5520
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Mobile Application Development
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                        <hr color="lightgray"/>
                        <br/>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/python.png" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/1234/Home">
                            CS 5001
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Intensive Foundations of Computer Science
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                        <hr color="lightgray"/>
                        <br/>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/fibonacci.png" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/1234/Home">
                            CS 5002
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Discrete Structures
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                        <hr color="lightgray"/>
                        <br/>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/design.jpeg" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/1234/Home">
                            CS 5004
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Object-Oriented Design
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                        <hr color="lightgray"/>
                        <br/>
                    </div>
                </div>

                <div className="wd-dashboard-course">
                    <img src="/images/dsa.png" width={200}/>
                    <div>
                        <Link className="wd-dashboard-course-link"
                              to="/Kanbas/Courses/1234/Home">
                            CS 5008
                        </Link>
                        <p className="wd-dashboard-course-title">
                            Data Structures and Algorithms
                        </p>
                        <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
                        <hr color="lightgray"/>
                        <br/>
                    </div>
                </div>


            </div>
        </div>
    );
}
