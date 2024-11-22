import { useParams } from "react-router-dom";
import * as db from "../../Database";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
    const { cid } = useParams<{ cid: string }>();
    //get the enrollments for this class
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === cid)
    //get all the people found in the enrollments
    const users = db.users.filter((usr) => enrollments.some((enrollment) => enrollment.user === usr._id));

    return (
        <div id="wd-people-table" className="ms-4">
            <table className="table table-striped table-responsive-xxl">

                <thead>
                    <tr>
                        <th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) =>
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
