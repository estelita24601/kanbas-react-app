import { useSelector } from "react-redux";

export default function FacultyPrivileges({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    if (currentUser.role === "FACULTY" || currentUser.role === "ADMIN") {
        return children;
    }
}