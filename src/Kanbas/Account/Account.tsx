import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import { Navigate, Route, Routes } from 'react-router-dom';
import AccountNavigation from "./Navigation";

export default function Account() {
    return (
        <div id="wd-account-screen">
            <h2>Account</h2>

            <div className="d-flex mt-4">

                <div className="me-5 pe-3">
                    <AccountNavigation />
                </div>

                <div className="flex-grow-1 mx-1" style={{ maxWidth: "750px" }}>

                    <Routes>
                        {/*Make the default path go to the sign in page*/}
                        <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
                        <Route path="/Signin" element={<Signin />} />
                        <Route path="/Profile" element={<Profile />} />
                        <Route path="/Signup" element={<Signup />} />
                    </Routes>
                </div>

            </div>


        </div>
    );
}
