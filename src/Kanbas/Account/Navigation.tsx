import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
    const accountNavigation = ["Signin", "Signup", "Profile"]
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
    const { pathname } = useLocation()

    return (
        <div className="wd list-group fs-5 rounded-0 me-2">
            {links.map((navOption) => (
                <Link
                    to={`/Kanbas/Account/${navOption}`} className={`list-group-item border border-0 ${pathname.includes(navOption) ? `active` : `text-danger`}`}>
                    {navOption}
                </Link>)
            )}
        </div>
    );
}