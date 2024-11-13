import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
    const accountNavigation = ["Signin", "Signup", "Profile"]
    const { pathname } = useLocation()

    return (
        <div className="wd list-group fs-5 rounded-0 me-2">

            {accountNavigation.map((navOption) => (
                <Link
                    to={`/Kanbas/Account/${navOption}`} className={`list-group-item border border-0 ${pathname.includes(navOption) ? `active` : `text-danger`}`}>
                    {navOption}
                </Link>)
            )}

        </div>
    );
}