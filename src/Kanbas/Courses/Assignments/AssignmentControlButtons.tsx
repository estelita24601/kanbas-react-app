import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import FacultyPrivileges from "../../Account/FacultyPrivileges";
import { FaTrash } from "react-icons/fa";


export default function AssignmentControlButtons({ assignmentId, deleteAssignment }: { assignmentId: string; deleteAssignment: (assignmentId: string) => void; }) {
    return (
        <FacultyPrivileges>
            <div className="float-end">
                <FaTrash className="text-danger me-2 mb-1" onClick={e => deleteAssignment(assignmentId)} />
                <GreenCheckmark />
                <IoEllipsisVertical className="fs-4" />
            </div>
        </FacultyPrivileges>
    );
}