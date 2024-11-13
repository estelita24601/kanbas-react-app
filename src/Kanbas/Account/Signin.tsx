import { Link } from "react-router-dom";

export default function Signin() {
    return (
        <div id="wd-signin-screen">
            <h2>Sign In</h2>

            <input id="wd-username" placeholder="Username"
                className="form-control mb-2 mt-2" />

            <input id="wd-password" type="password" placeholder="Password"
                className="form-control mb-2" />

            <Link id="wd-signin-btn" to="/Kanbas/Dashboard" className="btn btn-primary w-100 mb-3 mt-3">Sign In</Link>

            <Link id="wd-signup-link" to="/Kanbas/Account/Signup" className="w-100 mb-2">Sign Up</Link>
        </div>
    );
}