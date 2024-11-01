import { useSelector } from "react-redux";

export default function StudentPrivileges({ children }: { children: any }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    if (currentUser.role === "STUDENT") {
        return children;
    } else {
        console.log(`account with role of ${currentUser.role} is NOT allowed access`)
    }
}