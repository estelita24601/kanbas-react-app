import {Route, Routes, Navigate} from "react-router"
import Account from "./Account/Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation"
import Courses from "./Courses";

export default function Kanbas() {
    return (
        <div id="wd-kanbas">
            <h1>Kanbas</h1>

            <table>
                <tbody>
                <tr>
                    <td valign="top" width="100px" style={{backgroundColor: "#D2E0FB", padding:"10px"}}>
                        <KanbasNavigation/>
                    </td>

                    {/*column just for spacing*/}
                    <td width="25px"></td>

                    <td valign="top">
                        <Routes>
                            <Route path="/" element={<Navigate to="Account"/>}/>
                            <Route path="/Account/*" element={<Account/>}/>
                            <Route path="/Dashboard" element={<Dashboard/>}/>
                            <Route path="/Courses/:cid/*" element={<Courses />} />
                            <Route path="/Calendar" element={<h1>TODO:Calendar</h1>} />
                            <Route path="/Inbox" element={<h1>TODO:Inbox</h1>} />
                        </Routes>
                    </td>
                </tr>
                </tbody>
            </table>


        </div>
    );
}