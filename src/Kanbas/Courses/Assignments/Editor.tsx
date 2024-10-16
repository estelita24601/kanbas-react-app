import * as db from "../../Database"
import { useParams } from "react-router";

export default function AssignmentEditor() {
    //const cid = useParams().cid;
    const aid = useParams().aid;
    const assignment = db.assignments.filter((a) => a._id === aid)[0];


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

                {/* TODO */}
                {/* Assignment Group Section */}
                <div className="row my-4">
                    <div className="col d-flex align-items-center justify-content-end">
                        <label htmlFor="wd-group" className="form-label">
                            <h5>Assignment Group</h5>
                        </label>
                    </div>

                    <div className="col align-items-center d-flex align-items-center">
                        <select id="wd-group" className="form-select">
                            <option selected>ASSIGNMENTS</option>
                            <option>QUIZZES</option>
                            <option>EXAMS</option>
                            <option>PROJECT</option>
                        </select>
                    </div>
                </div>

                {/* TODO */}
                {/* Display Grade Section */}
                <div className="row my-4">
                    <div className="col d-flex align-items-center justify-content-end">
                        <label htmlFor="wd-display-group-as" className="form-label">
                            <h5>Display Grade As</h5>
                        </label>
                    </div>

                    <div className="col align-items-center d-flex align-items-center">
                        <select id="wd-display-group-as" className="form-select">
                            <option selected>Percentage</option>
                            <option>Letter Grade</option>
                        </select>
                    </div>
                </div>

                {/* TODO */}
                {/* Submission Type Section */}
                <div className="row my-4">
                    <div className="col d-flex align-items-center justify-content-end">
                        <label className="form-label">
                            <h5>Submission Type</h5>
                        </label>
                    </div>

                    <div className="col ms-3 me-2 form-control d-flex flex-column align-items-start ">
                        <select id="wd-submission-type" className="form-select mt-2 mb-4">
                            <option selected>Online</option>
                            <option>Physical</option>
                        </select>

                        <b>Online Entry Options</b>
                        <form className="form-check">
                            <label className="form-check-label my-2">
                                <input name="wd-entry-options" type="checkbox" id="wd-text-entry" className="form-check-input" />
                                Text Entry
                            </label><br />

                            <label className="form-check-label my-2">
                                <input name="wd-entry-options" type="checkbox" id="wd-website-url" className="form-check-input" />
                                Website URL
                            </label><br />

                            <label className="form-check-label my-2">
                                <input name="wd-entry-options" type="checkbox" id="wd-media-recordings" className="form-check-input" />
                                Media Recordings
                            </label><br />

                            <label className="form-check-label my-2">
                                <input name="wd-entry-options" type="checkbox" id="wd-student-annotation" className="form-check-input" />
                                Student Annotation
                            </label><br />

                            <label className="form-check-label my-2">
                                <input name="wd-entry-options" type="checkbox" id="wd-file-upload" className="form-check-input" />
                                File Uploads
                            </label><br />
                        </form>


                    </div>
                </div>

                {/* TODO */}
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

                {/* TODO: go back to assignment screen after hitting either buttons */}
                {/* Buttons */}
                <div className="row my-5">
                    <hr />
                    <div className="d-flex justify-content-end">
                        <button type="button" className="btn btn-secondary btn-lg mx-2">Cancel</button>
                        <button type="button" className="btn btn-danger btn-large btn-lg mx-2">Save</button>
                    </div>
                </div>

            </div>

        </div>
    );
}
