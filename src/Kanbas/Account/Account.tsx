import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import {Navigate, Route, Routes} from 'react-router-dom';

export default function Account() {
    return (
        <div id="wd-account-screen">
            <h2>Account</h2>
            <Routes>
                {/*Make the default path go to the sign in page*/}
                <Route path="/" element={<Navigate to="/Kanbas/Account/Signin"/>}/>
                <Route path="/Signin" element={<Signin/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="/Signup" element={<Signup/>}/>
            </Routes>
        </div>
    );
}
