import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./accountReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as client from "./client";

export default function Signin() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [credentials, setCredentials] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // function for when we click the sign in button
    const signin = async () => {
        const user = await client.signin(credentials);
        if (!user) return;
        dispatch(setCurrentUser(user));
        navigate("/Kanbas/Dashboard");
    };


    return (
        <div id="wd-signin-screen">
            <h2>Sign In</h2>

            {/* fixme: don't think the default value is working..? */}
            <input id="wd-username"
                placeholder="Username"
                defaultValue={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="form-control mb-2 mt-2" />

            <input id="wd-password"
                type="password"
                placeholder="Password"
                defaultValue={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="form-control mb-2" />

            <button id="wd-signin-btn"
                className="btn btn-primary w-100 mb-3 mt-3"
                onClick={signin}>
                Sign In
            </button>

            <Link id="wd-signup-link" to="/Kanbas/Account/Signup" className="w-100 mb-2">Sign Up</Link>

        </div>
    );
}