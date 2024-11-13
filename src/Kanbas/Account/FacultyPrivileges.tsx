import { useSelector } from "react-redux";

export default function FacultyPrivileges({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    if (currentUser.role === "FACULTY") {
        return children;
    } else {
        // console.log(`FACULTY ONLY\n\taccount with role of ${currentUser.role} is NOT allowed access`)
    }
}