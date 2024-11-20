import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`

    const [module, setModule] = useState({
        id: "110-07",
        name: "Proprioception and Tactile Sensation",
        description: "Touch receptors, nociceptors, and the somatosensory cortex",
        course: "BCS110",
    })
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`

    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3><hr />

            {/* QUESTION: state resets when I return to this page so then title gets displayed incorrectly */}
            <h4>Modifying Properties</h4>

            <ul className="list-group">
                <li className="list-group-item border-0 my-2 my-2 my-2 my-2 my-2">
                    <a id="wd-update-assignment-title"
                        className="btn btn-info float-end"
                        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
                    >
                        Update Assignment Title
                    </a>
                    <input id="wd-assignment-title"
                        className="form-control w-75"
                        defaultValue={assignment.title}
                        onChange={(e) =>
                            setAssignment({ ...assignment, title: e.target.value })}
                    />

                </li>
                <li className="list-group-item border-0 my-2 my-2 my-2 my-2 my-2">
                    <a id="wd-update-assignment-score"
                        className="btn btn-info float-end"
                        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
                    >
                        Update Assignment Score
                    </a>
                    <input id="wd-assignment-score"
                        className="form-control w-75"
                        type="number"
                        defaultValue={assignment.score}
                        onChange={(e) => {
                            setAssignment({ ...assignment, score: parseInt(e.target.value) })
                        }}
                    />
                </li>
                <li className="list-group-item border-0 my-2 my-2 my-2 my-2 my-2">
                    <a id="wd-update-assignment-completion"
                        className="btn btn-info float-end"
                        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
                    >
                        Update Assignment Completion
                    </a>
                    <input id="wd-assignment-completion"
                        type="checkbox"
                        defaultChecked={assignment.completed}
                        onChange={(e) =>
                            setAssignment({ ...assignment, completed: e.target.checked })
                        }
                    />
                    <label htmlFor="wd-assignment-completion" className="ms-2 form-label">
                        {assignment.completed ? "complete" : "incomplete"}
                    </label>
                </li>
                <li className="list-group-item border-0 my-2 my-2 my-2 my-2 my-2">
                    <br /><a id="wd-update-module-name"
                        className="btn btn-dark float-end"
                        href={`${MODULE_API_URL}/name/${module.name}`}
                    >
                        Update Module Name
                    </a>
                    <input id="wd-module-name"
                        className="form-control w-75"
                        defaultValue={module.name}
                        onChange={(e) => setModule({ ...module, name: e.target.value })}
                    />
                </li>
                <li className="list-group-item border-0 my-2 my-2 my-2 my-2 my-2">
                    <a id="wd-update-module-description"
                        className="btn btn-dark float-end"
                        href={`${MODULE_API_URL}/description/${module.description}`}
                    >
                        Update Module Description
                    </a>
                    <input id="wd-module-description"
                        className="form-control w-75"
                        defaultValue={module.description}
                        onChange={(e) => setModule({ ...module, description: e.target.value })}
                    />
                </li>
            </ul>

            <hr /><h4>Retrieving Objects</h4>

            <a id="wd-retrieve-assignments"
                className="btn btn-info me-2"
                href={ASSIGNMENT_API_URL}
            >
                Get Assignment
            </a>
            <a id="wd-retrieve-assignments"
                className="btn btn-dark me-2"
                href={MODULE_API_URL}
            >
                Get Module
            </a>

            <hr /><h4>Retrieving Properties</h4>

            <a id="wd-retrieve-assignment-title"
                className="btn btn-info me-2"
                href={`${ASSIGNMENT_API_URL}/title`}
            >
                Get Assignment Title
            </a>

            <a id="wd-retrieve-module-name"
                className="btn btn-dark me-2"
                href={`${MODULE_API_URL}/name`}>
                Get Module Name
            </a>

            <hr />

        </div>
    );
}
