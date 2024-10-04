import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div>
            <h2>Sign Up</h2>
            <input placeholder="Username" className="form-control mb-2 mt-2" />
            <input type="password" placeholder="Password" className="form-control mb-2" />
            <input type="password" placeholder="Verify Password" className="form-control mb-2" />

            <Link to="/Kanbas/Account/Profile" className="btn btn-primary w-100 mb-3 mt-3">
                Sign Up
            </Link>

            <Link to="/Kanbas/Account/Signin" className="w-100 mb-2">
                Sign In
            </Link>
        </div>
    );
}