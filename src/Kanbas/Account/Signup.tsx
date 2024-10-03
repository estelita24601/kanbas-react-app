import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div>
            <h1>Sign Up</h1>
            <input placeholder="Username" className="form-control mb-2 mt-4" />
            <input type="password" placeholder="Password" className="form-control mb-2" />
            <input type="password" placeholder="Verify Password" className="form-control mb-2" />

            <Link to="/Kanbas/Account/Profile" className="btn btn-primary w-100 mb-3 mt-5">
                Sign Up
            </Link>

            <Link to="/Kanbas/Account/Signin" className="btn btn-secondary w-100 mb-2">
                Sign In
            </Link>
        </div>
    );
}