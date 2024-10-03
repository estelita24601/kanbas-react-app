import { Link } from "react-router-dom";

export default function Signin() {
    return (
        <div id="wd-signin-screen">
            <h1>Sign In</h1>

            <input id="wd-username" placeholder="Username"
                className="form-control mb-2 mt-4" />

            <input id="wd-password" type="password" placeholder="Password"
                className="form-control mb-2" />

            <Link id="wd-signin-btn" to="/Kanbas/Dashboard" className="btn btn-primary btn-lg w-100 mb-3 mt-5">Sign In</Link>

            <Link id="wd-signup-link" to="/Kanbas/Account/Signup" className="btn btn-secondary btn-lg w-100 mb-2">Sign Up</Link>
        </div>
    );
}