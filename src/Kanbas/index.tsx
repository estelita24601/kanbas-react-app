import { Route, Routes, Navigate } from "react-router"
import Account from "./Account/Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation"
import Courses from "./Courses";
import "./styles.css";

export default function Kanbas() {
    return (
        <div id="wd-kanbas">
            <div className="d-none d-lg-block">
                <KanbasNavigation />
            </div>

            <div className="wd-main-content-offset p-3">
                <Routes>
                    <Route path="/" element={<Navigate to="Account" />} />
                    <Route path="/Account/*" element={<Account />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Courses/1234/*" element={<Courses />} />
                    <Route path="/Calendar" element={<h1>TODO:Calendar</h1>} />
                    <Route path="/Inbox" element={<h1>TODO:Inbox</h1>} />
                </Routes>
            </div>

        </div>
    );
}