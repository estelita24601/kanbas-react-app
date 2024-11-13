import * as db from "../../Database"
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function AssignmentEditor() {
    const cid = useParams().cid;
    const aid = useParams().aid;
    const assignment = db.assignments.filter((a) => a._id === aid)[0];

    const groupOptions = ["ASSIGNMENTS", "QUIZZES", "EXAMS", "PROJECTS"]
    const gradeDisplayOptions = ["Percentage", "Letter Grade"]
    const submissionTypeOptions = ["Online", "Physical"]
    const entryOptions = ["Text Entry", "Website URL", "Media Recordings", "Student Annotation", "File Uploads"]

    return (
        <div id="wd-assignments-editor" className="mx-3">

            {/* Assignment Name Section */}
            <div className="my-4 me-3">
                <label htmlFor="wd-name" className="form-label">
                    <h5>Assignment Name</h5>
                </label>

                <input id="wd-name" type="text" className="form-control form-control-lg" placeholder="Assignment Name" value={assignment.title} />
            </div>

            {/* Assignment Description Section */}
            <div className="mt-3 mb-5 me-3">
                <textarea id="wd-description" className="form-control form-control-lg" cols={30} rows={10}>
                    {assignment.description}
                </textarea>
            </div>

            <div className="container d-flex flex-column justify-content-end">
                {/* Points Section */}
                <div className="row my-4">
                    <div className="col d-flex align-items-center justify-content-end">
                        <label htmlFor="wd-points" className="form-label">
                            <h5>Points</h5>
                        </label>
                    </div>

                    <div className="col align-items-center d-flex align-items-center justify-content-end">
                        <input id="wd-points" type="number" placeholder="100" min="0" value={assignment.points} className="form-control" />
                    </div>
                </div>

                {/* Assignment Group Section */}
                <div className="row my-4">
                    <div className="col d-flex align-items-center justify-content-end">
                        <label htmlFor="wd-group" className="form-label">
                            <h5>Assignment Group</h5>
                        </label>
                    </div>

                    <div className="col align-items-center d-flex align-items-center">
                        <select id="wd-group" className="form-select">
                            {
                                groupOptions.map((group) => {
                                    if (assignment.group === group) {
                                        return (<option selected value={group}>{group}</option>)
                                    } else {
                                        return (<option value={group}>{group}</option>);
                                    }
                                })
                            }
                        </select>
                    </div>
                </div>

                {/* Display Grade Section */}
                <div className="row my-4">
                    <div className="col d-flex align-items-center justify-content-end">
                        <label htmlFor="wd-display-group-as" className="form-label">
                            <h5>Display Grade As</h5>
                        </label>
                    </div>

                    <div className="col align-items-center d-flex align-items-center">
                        <select id="wd-display-group-as" className="form-select">
                            {gradeDisplayOptions.map((display) => {
                                if (assignment.grade_display === display) {
                                    return (<option selected value={display}>{display}</option>);
                                } else {
                                    return (<option value={display}>{display}</option>);
                                }
                            })}
                        </select>
                    </div>
                </div>

                {/* Submission Type Section */}
                <div className="row my-4">
                    <div className="col d-flex align-items-center justify-content-end">
                        <label className="form-label">
                            <h5>Submission Type</h5>
                        </label>
                    </div>

                    <div className="col ms-3 me-2 form-control d-flex flex-column align-items-start ">
                        <select id="wd-submission-type" className="form-select mt-2 mb-4">
                            {submissionTypeOptions.map((submissionType) => {
                                if (assignment.submission_type === submissionType) {
                                    return (<option selected value={submissionType}>{submissionType}</option>);
                                } else {
                                    return (<option value={submissionType}>{submissionType}</option>);
                                }
                            })}
                        </select>

                        <b>Online Entry Options</b>
                        <form className="form-check">
                            {entryOptions.map((entry) => {
                                if (assignment.entry_options === null || assignment.entry_options === undefined || !assignment.entry_options.includes(entry)) {
                                    return (
                                        <div>
                                            <label className="form-check-label my-2">
                                                <input name="wd-entry-options" type="checkbox" id="wd-text-entry" className="form-check-input" />
                                                {entry}
                                            </label>
                                            <br />
                                        </div>
                                    );
                                }
                                else {
                                    console.log(`${entry} WAS found inside [${assignment.entry_options}]!`)
                                    return (
                                        <div>
                                            <label className="form-check-label my-2">
                                                <input checked name="wd-entry-options" type="checkbox" id="wd-text-entry" className="form-check-input" />
                                                {entry}
                                            </label>
                                            <br />
                                        </div>
                                    );
                                }
                            })}
                        </form>
                    </div>
                </div>

                {/* Assign Section */}
                <div className="row my-4">
                    <div className="col d-flex align-items-center justify-content-end">
                        <label className="form-label">
                            <h5>Assign</h5>
                        </label>
                    </div>

                    <div className="col ms-4 me-2 form-control d-flex flex-column align-items-start ">
                        <div className="container">
                            <div className="row">
                                <label className="form-label">
                                    <b>Assign To</b>
                                    <input className="form-control" id="wd-assign-to" value="Everyone" />
                                </label>
                            </div>

                            <div className="row">
                                <label className="form-label">
                                    <b>Due</b>
                                    <input className="form-control" id="wd-due-date" type="date" value={assignment.due_by_date} />
                                </label>
                            </div>

                            <div className="row text-nowrap">

                                <div className="col">
                                    <label className="form-label d-flex flex-column">
                                        <b>Available From:</b>
                                        <input id="wd-available-from" className="form-control" type="date" value={assignment.available_date} />
                                    </label>
                                </div>

                                <div className="col">
                                    <label className="form-label d-flex flex-column">
                                        <b>Until:</b>
                                        <input id="wd-available-until" className="form-control" type="date" />
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="row my-5">
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                            <button type="button" className="btn btn-secondary btn-lg mx-2">Cancel</button>
                        </Link>
                        <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                            <button type="button" className="btn btn-danger btn-large btn-lg mx-2">Save</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

