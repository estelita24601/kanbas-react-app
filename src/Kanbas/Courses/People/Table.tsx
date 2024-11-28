import { useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import PeopleDetails from "./Details";
import { useEffect } from "react";

export default function PeopleTable({ users = [] }: { users?: any[] }) {
    //get the enrollments from the redux state
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

    //FIXME: remove later, this is just for debugging
    useEffect(() => {
        console.debug(`PEOPLE TABLE users =\n${JSON.stringify(users)}`);
    }, [users]);

    return (
        <div id="wd-people-table" className="ms-4">
            <PeopleDetails />

            <table className="table table-striped table-responsive-xxl">

                <thead>
                    <tr>
                        <th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th>
                    </tr>
                </thead>

                <tbody>
                    {/* FIXME: users.map is not a function */}
                    {users.map(
                        (user) =>
                            <tr key={user._id}>
                                <td className="wd-full-name text-nowrap">
                                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                                    <span className="wd-first-name">{user.firstName} </span>
                                    <span className="wd-last-name">{user.lastName}</span>
                                </td>

                                <td className="wd-login-id">{user.loginId}</td>
                                <td className="wd-section">{user.section}</td>
                                <td className="wd-role">{user.role}</td>
                                <td className="wd-last-activity">{user.lastActivity}</td>
                                <td className="wd-total-activity">{user.totalActivity}</td>
                            </tr>
                    )}

                </tbody>
            </table>
        </div>
    );
}
