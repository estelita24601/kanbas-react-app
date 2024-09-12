import { Route, Routes, Navigate } from "react-router"
import Account from "./Account/Account";

export default function Kanbas() {
    return (
        <div id="wd-kanbas">
            <h1>Kanbas</h1>
            <Account />
            <Routes>
                <Route path="/" element={<Navigate to="Account" />} />
                <Route path="/Account/*" element={<Account />} />
            </Routes>
        </div>
    );
}