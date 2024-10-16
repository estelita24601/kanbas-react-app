// TODO: section 3.9
import { useParams } from "react-router-dom";
import * as db from "../../Database";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
    const { cid } = useParams();
    const { users, enrollments } = db;

    return (
        <div id="wd-people-table" className="ms-4">
            <table className="table table-striped table-responsive-xxl">

                <thead>
                    <tr>
                        <th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Tony </span>
                            <span className="wd-last-name">Stark</span>
                        </td>
                        <td className="wd-login-id">001234561S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td>
                    </tr>

                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Katheryn </span>
                            <span className="wd-last-name">Janeway</span>
                        </td>
                        <td className="wd-login-id">3NCC74656</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">ADMIN</td>
                        <td className="wd-last-activity">2020-10-17</td>
                        <td className="wd-total-activity">23:49:17</td>
                    </tr>

                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">B'Elanna </span>
                            <span className="wd-last-name">Torres</span>
                        </td>
                        <td className="wd-login-id">2346V2378</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">FACULTY</td>
                        <td className="wd-last-activity">2020-10-05</td>
                        <td className="wd-total-activity">17:10:09</td>
                    </tr>

                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Jadzia </span>
                            <span className="wd-last-name">Dax</span>
                        </td>
                        <td className="wd-login-id">2341T2168</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">FACULTY</td>
                        <td className="wd-last-activity">2020-10-02</td>
                        <td className="wd-total-activity">09:33:08</td>
                    </tr>

                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Benjamin </span>
                            <span className="wd-last-name">Sisko</span>
                        </td>
                        <td className="wd-login-id">32NX74205</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">ADMIN</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">05:36:07</td>
                    </tr>

                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Harry </span>
                            <span className="wd-last-name">Kim</span>
                        </td>
                        <td className="wd-login-id">2349V72</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">TA</td>
                        <td className="wd-last-activity">2020-10-19</td>
                        <td className="wd-total-activity">03:47:08</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}
