import { Link, useLocation, useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "./Details";
import { useEffect, useState } from "react";
import * as coursesClient from "../client";
import * as accountClient from "../../Account/client";

//scenario 1: Courses/:cid/People
//  --> need to fetch users using client

//scenario 2: Account/Users or Account/Users/:uid
//  --> already given a list of users

export default function PeopleTable({ users = [] }: { users?: any[] }) {
    const { cid } = useParams<{ cid: string }>();

    const [displayUsers, setDisplayUsers] = useState<any[]>(users);
    const fetchUsers = async () => {
        if (cid && typeof (cid) === "string") {
            console.log(`getting users for course ${cid}`);
            const updatedUsers = await coursesClient.findUsersForCourse(cid);
            setDisplayUsers(updatedUsers);
            console.log(`displayUsers = ${JSON.stringify(updatedUsers, null, 1)}`);
        } else {
            //scenario 2: looking at all users on kanbas
            const updatedUsers = await accountClient.findAllUsers();
            setDisplayUsers(updatedUsers);
        }
    }

    useEffect(() => {
        fetchUsers();
        console.log(`PeopleTable\tusers =${displayUsers.map(u => u ? ` ${u.firstName} ${u.lastName}` : "null")}`);
    }, []);

    const location = useLocation();

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
                    {displayUsers.map(
                        (user) =>
                            user ?
                                (<tr key={user._id}>
                                    <td className="wd-full-name text-nowrap">
                                        <Link to={`${location.pathname}/${user._id}`} className="text-decoration-none">
                                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                                            <span className="wd-first-name">{user.firstName} </span>
                                            <span className="wd-last-name">{user.lastName}</span>
                                        </ Link>
                                    </td>

                                    <td className="wd-login-id">{user.loginId}</td>
                                    <td className="wd-section">{user.section}</td>
                                    <td className="wd-role">{user.role}</td>
                                    <td className="wd-last-activity">{user.lastActivity}</td>
                                    <td className="wd-total-activity">{user.totalActivity}</td>
                                </tr>)
                                : null
                    )}

                </tbody>
            </table>
        </div>
    );
}
