import { Link } from "react-router-dom";
export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h2>Profile</h2>

            {/* <label htmlFor="wd-username" className="form-label">Username: </label> */}
            <input id="wd-username" value="alice" placeholder="Username" className="form-control mt-2 mb-2" />

            {/* <label htmlFor="wd-password" className="form-label mt-3">Password: </label> */}
            <input id="wd-password" value="123" placeholder="Password"
                type="password" className="form-control mb-2" />

            {/* <label htmlFor="wd-firstname" className="form-label mt-3">First Name: </label> */}
            <input id="wd-firstname" value="Alice" placeholder="First Name" className="form-control mb-2" />

            {/* <label htmlFor="wd-lastname" className="form-label mt-3">Last Name: </label> */}
            <input id="wd-lastname" value="Wonderland" placeholder="Last Name" className="form-control mb-2" />

            {/* <label htmlFor="wd-dob" className="form-label mt-3">Date of Birth: </label> */}
            <input id="wd-dob" value="2000-01-01" type="date" className="form-control mb-2" />

            {/* <label htmlFor="wd-email" className="form-label mt-3">Email: </label> */}
            <input id="wd-email" value="alice@wonderland" type="email" className="form-control mb-2" />

            {/* <label htmlFor="wd-role" className="form-label mt-3">
                Profile Type:
            </label> */}
            <select id="wd-role" className="form-select">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>

            <Link to="/Kanbas/Account/Signin" className="btn w-100 btn-danger btn-lg mt-3">
                Sign out
            </Link>
        </div>
    );
}
