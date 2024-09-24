import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div>
            <h3>Sign Up</h3>
            <input placeholder="Username" className="form-control mb-2" />
            <input type="password" placeholder="Password" className="form-control mb-2" />
            <input type="password" placeholder="Verify Password" className="form-control mb-2" />

            <Link to="/Kanbas/Account/Profile" className="btn btn-primary w-100 my-2">
                Sign Up
            </Link>

            <Link to="/Kanbas/Account/Signin" className="btn btn-secondary w-100 my-2">
                Sign In
            </Link>
        </div>
    );
}