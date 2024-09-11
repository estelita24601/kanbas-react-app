import {Link} from "react-router-dom";

export default function Signin() {
    return (
        <div id="wd-signin-screen">
            <h3>Sign In</h3>
            <input id="wd-username" placeholder="Username"/>
            <br/>
            <input id="wd-password" type="password" placeholder="Password"/>
            <br/>
            <Link id="wd-signin-btn" to="/Kanbas/Account/Profile">Sign In</Link>
            <br/> <br/>
            <Link id="wd-signup-link" to="/Kanbas/Account/Signup">Sign Up</Link>
        </div>
    );
}