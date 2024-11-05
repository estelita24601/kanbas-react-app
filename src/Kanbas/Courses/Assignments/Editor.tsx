import { useParams } from "react-router";
import { Link } from "react-router-dom";
import FacultyPrivileges from "../../Account/FacultyPrivileges";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, updateAssignment } from "./reducer";
import { useState } from "react";
import StudentPrivileges from "../../Account/StudentPrivileges";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const dispatch = useDispatch();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const assignment = assignments.find((curr: any) => curr._id === aid);
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    type Assignment = {
        title: string;
        description: string;
        points: number;
        due_by_date: string;
        available_date: string;
        available_until: string;
        group?: string;
        grade_display?: string;
        submission_type?: string;
        entry_options?: string[];
    }

    const [editedAssignment, setEditedAssignment] = useState<Assignment>({
        title: assignment.title,
        description: assignment.description,
        points: assignment.points,
        due_by_date: assignment.due_by_date,
        available_date: assignment.available_date,
        available_until: assignment.available_until
    });

    return (

        <div id="wd-assignments-editor" className="mx-3">

            {assignmentNameEditor(assignment, setEditedAssignment, currentUser)}
            {assignmentDescriptionEditor(assignment, setEditedAssignment, currentUser)}

            <div className="container d-flex flex-column justify-content-end">

                {pointsEditor(assignment, setEditedAssignment, currentUser)}
                {assignmentGroupEditor(assignment, currentUser)}
                {gradeDisplayChooser(assignment, currentUser)}
                {submissionTypeChooser(assignment, currentUser)}

                {/* Assign Section */}
                <div className="row my-4">
                    <div className="col d-flex align-items-center justify-content-end">
                        <label className="form-label"> <h5>Assign</h5> </label>
                    </div>

                    <div className="col ms-4 me-2 form-control d-flex flex-column align-items-start ">
                        <div className="container">
                            <div className="row">
                                <label className="form-label">
                                    <b>Assign To</b>
                                    <input className="form-control" id="wd-assign-to" defaultValue="Everyone" readOnly={currentUser.role === "STUDENT"} />
                                </label>
                            </div>

                            {assignmentDateEditors(assignment, setEditedAssignment, currentUser)}
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="row my-5">
                    <hr />
                    <div className="d-flex justify-content-end">
                        <StudentPrivileges>
                            <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                                <button type="button" className="btn btn-secondary btn-lg mx-2">
                                    Back
                                </button>
                            </Link>
                        </StudentPrivileges>
                        <FacultyPrivileges>
                            <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                                <button type="button" className="btn btn-secondary btn-lg mx-2" onClick={e => deleteAssignment(assignment._id)}>
                                    Cancel
                                </button>
                            </Link>

                            <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                                <button type="button" className="btn btn-danger btn-large btn-lg mx-2" onClick={(e) => {
                                    dispatch(updateAssignment(editedAssignment))
                                }}>
                                    Save
                                </button>
                            </Link>
                        </FacultyPrivileges>
                    </div>
                </div>
            </div>
        </div>
    );
}

function assignmentNameEditor(assignment: any, setEditedAssignment: any, currentUser: any) {
    const isStudent = currentUser.role === "STUDENT";

    return <div className="my-4 me-3">
        <label htmlFor="wd-name" className="form-label">
            <h5>Assignment Name</h5>
        </label>

        <input id="wd-name"
            type="text"
            className="form-control form-control-lg"
            placeholder="Assignment Name"
            defaultValue={assignment.title}
            onChange={(e) => {
                setEditedAssignment({ ...assignment, title: e.target.value });
            }}
            readOnly={isStudent}
        />
    </div>;
}

function assignmentDescriptionEditor(assignment: any, setEditedAssignment: any, currentUser: any) {
    const isStudent = currentUser.role === "STUDENT";

    return <div className="mt-3 mb-5 me-3">
        <label htmlFor="wd-description" className="form-label">
            <h5>Description</h5>
        </label>
        <textarea id="wd-description"
            className="form-control form-control-lg"
            cols={30} rows={10} defaultValue={assignment.description}
            onChange={(e) => {
                setEditedAssignment({ ...assignment, description: e.target.value });
            }}
            readOnly={isStudent} />
    </div>;
}

function pointsEditor(assignment: any, setEditedAssignment: any, currentUser: any) {
    const isStudent = currentUser.role === "STUDENT";
    return <div className="row my-4">
        <div className="col d-flex align-items-center justify-content-end">
            <label htmlFor="wd-points" className="form-label">
                <h5>Points</h5>
            </label>
        </div>

        <div className="col align-items-center d-flex align-items-center justify-content-end">
            <input id="wd-points"
                type="number"
                placeholder="100" min="0"
                defaultValue={assignment.points}
                className="form-control"
                onChange={(e) => {
                    setEditedAssignment({ ...assignment, points: e.target.value });
                }}
                readOnly={isStudent}
            />
        </div>
    </div>;
}

function assignmentGroupEditor(assignment: any, currentUser: any) {
    const isStudent = currentUser.role === "STUDENT";

    const groupOptions = ["ASSIGNMENTS", "QUIZZES", "EXAMS", "PROJECTS"];

    return <div className="row my-4">
        <div className="col d-flex align-items-center justify-content-end">
            <label htmlFor="wd-group" className="form-label">
                <h5>Assignment Group</h5>
            </label>
        </div>

        <div className="col align-items-center d-flex align-items-center">
            <select id="wd-group" className="form-select">
                {groupOptions.map((group) => {
                    if (assignment.group === group) {
                        return (<option selected value={group} disabled={isStudent}>{group}</option>);
                    } else {
                        return (<option value={group} disabled={isStudent}>{group}</option>);
                    }
                })}
            </select>
        </div>
    </div>;
}

function gradeDisplayChooser(assignment: any, currentUser: any) {
    const isStudent = currentUser.role === "STUDENT";
    const gradeDisplayOptions = ["Percentage", "Letter Grade"];

    return <div className="row my-4">
        <div className="col d-flex align-items-center justify-content-end">
            <label htmlFor="wd-display-group-as" className="form-label">
                <h5>Display Grade As</h5>
            </label>
        </div>

        <div className="col align-items-center d-flex align-items-center">
            <select id="wd-display-group-as" className="form-select">
                {gradeDisplayOptions.map((display) => {
                    if (assignment.grade_display === display) {
                        return (<option selected value={display} disabled={isStudent}>{display}</option>);
                    } else {
                        return (<option value={display} disabled={isStudent}>{display}</option>);
                    }
                })}
            </select>
        </div>
    </div>;
}

function submissionTypeChooser(assignment: any, currentUser: any) {
    const isStudent = currentUser.role === "STUDENT";
    const submissionTypeOptions = ["Online", "Physical"];
    const entryOptions = ["Text Entry", "Website URL", "Media Recordings", "Student Annotation", "File Uploads"];

    return <div className="row my-4">
        <div className="col d-flex align-items-center justify-content-end">
            <label className="form-label">
                <h5>Submission Type</h5>
            </label>
        </div>

        <div className="col ms-3 me-2 form-control d-flex flex-column align-items-start ">
            <select id="wd-submission-type" className="form-select mt-2 mb-4">
                {submissionTypeOptions.map((submissionType) => {
                    if (assignment.submission_type === submissionType) {
                        return (<option selected value={submissionType} disabled={isStudent}>{submissionType}</option>);
                    } else {
                        return (<option value={submissionType} disabled={isStudent}>{submissionType}</option>);
                    }
                })}
            </select>

            <b>Online Entry Options</b>
            {entryOptionsEditor(entryOptions, assignment, currentUser)}
        </div>
    </div>;
}

function entryOptionsEditor(entryOptions: string[], assignment: any, currentUser: any) {
    const isStudent = currentUser.role === "STUDENT";

    return <form className="form-check">
        {entryOptions.map((entry) => {
            if (assignment.entry_options === null || assignment.entry_options === undefined || !assignment.entry_options.includes(entry)) {
                return (
                    <div>
                        <label className="form-check-label my-2">
                            <input name="wd-entry-options" type="checkbox" id="wd-text-entry" className="form-check-input" disabled={isStudent} />
                            {entry}
                        </label>
                        <br />
                    </div>
                );
            }
            else {
                console.log(`${entry} WAS found inside [${assignment.entry_options}]!`);
                return (
                    <div>
                        <label className="form-check-label my-2">
                            <input checked name="wd-entry-options" type="checkbox" id="wd-text-entry" className="form-check-input" disabled={isStudent} />
                            {entry}
                        </label>
                        <br />
                    </div>
                );
            }
        })}
    </form>;
}

function assignmentDateEditors(assignment: any, setEditedAssignment: any, currentUser: any) {
    const isStudent = currentUser.role === "STUDENT";

    return <span>
        <div className="row">
            <label className="form-label">
                <b>Due</b>
                <input className="form-control" id="wd-due-date" type="date" defaultValue={assignment.due_by_date} onChange={(e) => {
                    setEditedAssignment({ ...assignment, due_by_date: e.target.value });
                }} readOnly={isStudent} />
            </label>
        </div>

        <div className="row text-nowrap">

            <div className="col">
                <label className="form-label d-flex flex-column">
                    <b>Available From:</b>
                    <input id="wd-available-from" className="form-control" type="date" defaultValue={assignment.available_date} onChange={(e) => {
                        setEditedAssignment({ ...assignment, available_date: e.target.value });
                    }} readOnly={isStudent} />
                </label>
            </div>

            <div className="col">
                <label className="form-label d-flex flex-column">
                    <b>Until:</b>
                    <input id="wd-available-until" className="form-control" type="date" defaultValue={assignment.available_until} onChange={(e) => {
                        setEditedAssignment({ ...assignment, available_until: e.target.value });
                    }} readOnly={isStudent} />
                </label>
            </div>
        </div>
    </span>;
}
