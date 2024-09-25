import { Link } from "react-router-dom";
export default function AccountNavigation() {
    // FIXME: too big space between this and the content
    return (
        <div className="wd list-group fs-5 rounded-0 me-2">
            <Link to="/Kanbas/Account/Signin" className="list-group-item border border-0 active">
                Signin
            </Link>
            <Link to="/Kanbas/Account/Signup" className="list-group-item border border-0  text-danger">
                Signup
            </Link>
            <Link to="/Kanbas/Account/Profile" className="list-group-item border border-0 text-danger">
                Profile
            </Link>
        </div>
    );
}