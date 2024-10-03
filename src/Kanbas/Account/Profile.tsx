import { Link } from "react-router-dom";
export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h1>Profile</h1>

            <label htmlFor="wd-username" className="form-label mt-3">Username: </label>
            <input id="wd-username" value="alice" placeholder="Username" className="form-control mb-2" />

            <label htmlFor="wd-password" className="form-label mt-3">Password: </label>
            <input id="wd-password" value="123" placeholder="Password"
                type="password" className="form-control mb-2" />

            <label htmlFor="wd-firstname" className="form-label mt-3">First Name: </label>
            <input id="wd-firstname" value="Alice" placeholder="First Name" className="form-control mb-2" />

            <label htmlFor="wd-lastname" className="form-label mt-3">Last Name: </label>
            <input id="wd-lastname" value="Wonderland" placeholder="Last Name" className="form-control mb-2" />

            <label htmlFor="wd-dob" className="form-label mt-3">Date of Birth: </label>
            <input id="wd-dob" value="2000-01-01" type="date" className="form-control mb-2" />

            <label htmlFor="wd-email" className="form-label mt-3">Email: </label>
            <input id="wd-email" value="alice@wonderland" type="email" className="form-control mb-2" />

            <label htmlFor="wd-role" className="form-label mt-3">
                Profile Type:
            </label>
            <select id="wd-role" className="form-select mb-2">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>

            <Link to="/Kanbas/Account/Signin" className="btn w-100 btn-danger btn-lg mt-5">
                Sign out
            </Link>
        </div>
    );
}
