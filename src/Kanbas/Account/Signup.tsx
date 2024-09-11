import {Link} from "react-router-dom";

export default function Signup() {
    return (
        <div>
            <h3>Sign Up</h3>
            <input id="new-username" placeholder="Username"/> <br/>
            <input id="new-password" type="password" placeholder="Password"/> <br/>
            <input id="verify-password" type="password" placeholder="Verify Password"/> <br/>
            <Link to="/Kanbas/Account/Profile">Sign Up</Link>
            <br/> <br/>
            <Link to="/Kanbas/Account/Signin">Sign In</Link>
        </div>
    );
}