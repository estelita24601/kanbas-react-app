import { Link } from "react-router-dom";
export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            <label htmlFor="wd-username">Username: </label>
            <input id="wd-username" value="alice" placeholder="Username" className="form-control mb-2" /><br />

            <label htmlFor="wd-password">Password: </label>
            <input id="wd-password" value="123" placeholder="Password"
                type="password" className="form-control mb-2" /><br />

            <label htmlFor="wd-firstname">First Name: </label>
            <input id="wd-firstname" value="Alice" placeholder="First Name" className="form-control mb-2" /><br />

            <label htmlFor="wd-lastname">Last Name: </label>
            <input id="wd-lastname" value="Wonderland" placeholder="Last Name" className="form-control mb-2" /><br />

            <label htmlFor="wd-dob">Date of Birth: </label>
            <input id="wd-dob" value="2000-01-01" type="date" className="form-control mb-2" /><br />

            <label htmlFor="wd-email">Email: </label>
            <input id="wd-email" value="alice@wonderland" type="email" className="form-control mb-2" /><br />

            <select id="wd-role" className="form-select mb-2">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>

            <Link to="/Kanbas/Account/Signin" className="btn w-100 btn-danger">
                Sign out
            </Link>
        </div>
    );
}
