import { Link } from "react-router-dom";

export default function Signin() {
    return (
        <div id="wd-signin-screen">
            <h3>Sign In</h3>

            <input id="wd-username" placeholder="Username"
                className="form-control mb-2" />

            <input id="wd-password" type="password" placeholder="Password"
                className="form-control mb-2" />

            <Link id="wd-signin-btn" to="/Kanbas/Dashboard" className="btn btn-primary w-100 my-2">Sign In</Link>

            <Link id="wd-signup-link" to="/Kanbas/Account/Signup" className="btn btn-secondary w-100 my-2">Sign Up</Link>
        </div>
    );
}