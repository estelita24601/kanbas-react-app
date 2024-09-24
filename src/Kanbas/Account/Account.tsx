import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import { Navigate, Route, Routes } from 'react-router-dom';
import AccountNavigation from "./Navigation";

export default function Account() {
    return (<div id="wd-account-screen" className="container">
        <h2>Account</h2>
        <div className="row">
            <div className="col">
                <AccountNavigation />
            </div>
            <div className="col">
                <Routes>
                    {/*Make the default path go to the sign in page*/}
                    <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
                    <Route path="/Signin" element={<Signin />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/Signup" element={<Signup />} />
                </Routes>
            </div>
        </div>



    </div>);
}
