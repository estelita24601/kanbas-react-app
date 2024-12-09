import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAssignment } from "./reducer";
import FacultyPrivileges from "../../Account/FacultyPrivileges";
import StudentPrivileges from "../../Account/StudentPrivileges";
import * as assignmentsClient from "./client";
import { Assignment } from "./assignment.type";

export default function AssignmentEditor() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cid, aid, mode } = useParams();

  //REDUX
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  //STATE VARIABLES
  const [assignmentEdits, setAssignmentEdits] = useState<any>();
  const [currentAssignment, setCurrentAssignment] = useState<Assignment>();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  //get the assignment only when the page first loads
  const fetchAssignment = async () => {
    if (typeof cid === "string" && typeof aid === "string") {
      const serverAssignment = await assignmentsClient.getAssignment(aid, cid);
      console.log(`Assignment Editor\nassignment = ${JSON.stringify(serverAssignment)}`);
      setCurrentAssignment(serverAssignment);
      setSelectedOptions(serverAssignment.entry_options);
    } else {
      throw new Error("unable to find assignment!");
    }
  }
  useEffect(() => { fetchAssignment() }, []);

  //function that updates server AND updates redux state
  const saveAssignment = async () => {
    console.log(`edits to assignment =\n${JSON.stringify(assignmentEdits, null, 3)}`)

    const editedAssignment = { ...currentAssignment, ...assignmentEdits, entry_options: selectedOptions };
    console.log(`after applying edits:\n${JSON.stringify(editedAssignment, null, 3)}`)

    //make sure we at least have a title
    if (editedAssignment.title !== null || editedAssignment.title !== "") {
      await assignmentsClient.replaceAssignment(aid as string, editedAssignment);
      dispatch(updateAssignment(editedAssignment));
      return true;
    } else {
      console.log("unable to save assignment");
      return false;
    }
  };

  //if one checkbox is clicked/unclicked then update the entryOptions state variable
  const handleCheckBoxChange = (isChecked: boolean, value: string) => {
    console.log(`checkbox ${value} = ${isChecked}`);
    if (isChecked) {
      if (!selectedOptions?.includes(value)) {
        //if not already in the list then add it
        setSelectedOptions([...selectedOptions, value]);
        console.log(`\tafter adding new option: ${selectedOptions}`);
      }
    }
    else {
      if (selectedOptions.includes(value)) {
        //if it's in the list then remove it
        setSelectedOptions(selectedOptions.filter(x => x !== value));
        console.log(`\tafter removing an option: ${selectedOptions}`);
      }
    }
  };

  return (

    <div id="wd-assignments-editor" className="mx-3">

      {currentAssignment ?
        (<div id="wd-assignment-undefined-barrier">
          {assignmentNameEditor(currentAssignment, assignmentEdits, setAssignmentEdits, currentUser)}
          {assignmentDescriptionEditor(currentAssignment, assignmentEdits, setAssignmentEdits, currentUser)}

          <div className="container d-flex flex-column justify-content-end">

            {pointsEditor(currentAssignment, assignmentEdits, setAssignmentEdits, currentUser)}
            {assignmentGroupEditor(currentAssignment, currentUser, assignmentEdits, setAssignmentEdits)}
            {gradeDisplayChooser(currentAssignment, currentUser, assignmentEdits, setAssignmentEdits)}
            {submissionTypeChooser(currentAssignment, currentUser, assignmentEdits, setAssignmentEdits, selectedOptions, handleCheckBoxChange)}

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

                  {assignmentDateEditors(currentAssignment, assignmentEdits, setAssignmentEdits, currentUser)}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="row my-5">
              <hr />
              <div className="d-flex justify-content-end">
                {/* BACK BUTTON */}
                <StudentPrivileges>
                  <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                    <button type="button" className="btn btn-secondary btn-lg mx-2">
                      Back
                    </button>
                  </Link>
                </StudentPrivileges>
                <FacultyPrivileges>

                  {/* CANCEL BUTTON */}
                  <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                    <button type="button" className="btn btn-secondary btn-lg mx-2" >
                      Cancel
                    </button>
                  </Link>

                  {/* SAVE BUTTON */}
                  <button
                    type="button"
                    className="btn btn-danger btn-large btn-lg mx-2"
                    onClick={(e) => {
                      e.preventDefault();
                      saveAssignment().then((value) => {
                        if (value === false) {
                          console.log("FAILED TO SAVE ASSIGNMENT - I don't want to leave this page!")
                          window.alert("Assignment must have a title!");
                        } else {
                          navigate(`/Kanbas/Courses/${cid}/Assignments`);
                        }
                      })
                    }}
                  >
                    Save
                  </button>

                </FacultyPrivileges>
              </div>
            </div>
          </div>
        </div>)
        :
        (<p className="text-danger fs-3">unable to find assignment!</p>)
      }
    </div>
  );
}

function assignmentNameEditor(assignment: any, assignmentEdits: any, setEditedAssignment: any, currentUser: any) {
  const isStudent = currentUser.role === "STUDENT";
  return <div className="my-4 me-3">
    <label htmlFor="wd-name" className="form-label">
      <h5>Assignment Name*</h5>
    </label>

    <input id="wd-name"
      type="text"
      className="form-control form-control-lg"
      placeholder="Assignment Name"
      defaultValue={assignment.title}
      onChange={(e) => {
        const editedAssignment = { ...assignmentEdits, title: e.target.value };
        setEditedAssignment(editedAssignment);
      }}
      readOnly={isStudent}
    />
  </div>;
}

function assignmentDescriptionEditor(assignment: any, assignmentEdits: any, setEditedAssignment: any, currentUser: any) {
  const isStudent = currentUser.role === "STUDENT";

  return <div className="mt-3 mb-5 me-3">
    <label htmlFor="wd-description" className="form-label">
      <h5>Description</h5>
    </label>
    <textarea id="wd-description"
      className="form-control form-control-lg"
      cols={30} rows={10} defaultValue={assignment.description}
      onChange={(e) => {
        const editedAssignment = { ...assignmentEdits, description: e.target.value };
        setEditedAssignment(editedAssignment);
      }}
      readOnly={isStudent} />
  </div>;
}

function pointsEditor(assignment: any, assignmentEdits: any, setEditedAssignment: any, currentUser: any) {
  const isStudent = currentUser.role === "STUDENT";
  return <div className="row my-4">
    <div className="col d-flex align-items-center justify-content-end">
      <label htmlFor="wd-points" className="form-label">
        <h5>Points*</h5>
      </label>
    </div>

    <div className="col align-items-center d-flex align-items-center justify-content-end">
      <input id="wd-points"
        type="number"
        min="0"
        defaultValue={assignment.points}
        className="form-control"
        onChange={(e) => {
          const editedAssignment = { ...assignmentEdits, points: e.target.value };
          setEditedAssignment(editedAssignment);
        }}
        readOnly={isStudent}
      />
    </div>
  </div>;
}

function assignmentGroupEditor(assignment: any, currentUser: any, assignmentEdits: any, setEditedAssignment: any) {
  const isStudent = currentUser.role === "STUDENT";

  const groupOptions = ["ASSIGNMENTS", "QUIZZES", "EXAMS", "PROJECTS"];

  return (
    <div className="row my-4">

      <div className="col d-flex align-items-center justify-content-end">
        <label htmlFor="wd-group" className="form-label">
          <h5>Assignment Group</h5>
        </label>
      </div>

      <div className="col align-items-center d-flex align-items-center">
        <select id="wd-group" className="form-select" onChange={(e) => { setEditedAssignment({ ...assignmentEdits, group: e.target.value }) }}>

          {groupOptions.map((group) => {
            if (assignment.group === group) {
              return (
                <option selected value={group} disabled={isStudent} key={group}>
                  {group}
                </option>);
            } else {
              return (
                <option value={group} disabled={isStudent} key={group}>
                  {group}
                </option>);
            }
          })}

        </select>
      </div>
    </div>
  );
}

function gradeDisplayChooser(assignment: any, currentUser: any, assignmentEdits: any, setEditedAssignment: any) {
  const isStudent = currentUser.role === "STUDENT";
  const gradeDisplayOptions = ["Percentage", "Letter Grade"];

  return <div className="row my-4">
    <div className="col d-flex align-items-center justify-content-end">
      <label htmlFor="wd-display-group-as" className="form-label">
        <h5>Display Grade As</h5>
      </label>
    </div>

    <div className="col align-items-center d-flex align-items-center">
      <select id="wd-display-group-as" className="form-select" onChange={(e) => setEditedAssignment({ ...assignmentEdits, grade_display: e.target.value })}>

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

function submissionTypeChooser(assignment: any, currentUser: any, assignmentEdits: any, setEditedAssignment: any, selectedOptions: string[], handleCheckboxChange: any) {
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
      <select id="wd-submission-type" className="form-select mt-2 mb-4" onChange={(e) => setEditedAssignment({ ...assignmentEdits, submission_type: e.target.value })}>
        {submissionTypeOptions.map((submissionType) => {
          if (assignment.submission_type === submissionType) {
            return (
              <option selected value={submissionType} disabled={isStudent}>
                {submissionType}
              </option>);
          } else {
            return (
              <option value={submissionType} disabled={isStudent}>
                {submissionType}
              </option>);
          }
        })}
      </select>

      <b>Online Entry Options</b>
      {entryOptionsEditor(entryOptions, assignment, currentUser, assignmentEdits, setEditedAssignment, selectedOptions, handleCheckboxChange)}
    </div>
  </div>;
}

//FIXME
function entryOptionsEditor(entryOptions: string[], assignment: any, currentUser: any, assignmentEdits: any, setEditedAssignment: any, selectedOptions: string[], handleCheckboxChange: any) {
  const isStudent = currentUser.role === "STUDENT";

  return (
    <form className="form-check" >
      {entryOptions
        .map((entry) => {
          return (
            <div>
              <label className="form-check-label my-2">
                <input id="wd-text-entry"
                  key={`option-${entry}`}
                  value={entry}
                  checked={selectedOptions.includes(entry)}
                  name="wd-entry-options"
                  type="checkbox"
                  className="form-check-input"
                  disabled={isStudent}
                  onChange={(e) => handleCheckboxChange(e.target.checked, e.target.value)}
                />
                {entry}
              </label>
              <br />
            </div>
          );
        })}
    </form>);
}

function assignmentDateEditors(assignment: any, assignmentEdits: any, setEditedAssignment: any, currentUser: any) {
  const isStudent = currentUser.role === "STUDENT";

  return <span>
    <div className="row">
      <label className="form-label">
        <b>Due*</b>
        <input className="form-control" id="wd-due-date" type="date" defaultValue={assignment.due_by_date} onChange={(e) => {
          const editedAssignment = { ...assignmentEdits, due_by_date: e.target.value };
          setEditedAssignment(editedAssignment);
        }} readOnly={isStudent} />
      </label>
    </div>

    <div className="row text-nowrap">

      <div className="col">
        <label className="form-label d-flex flex-column">
          <b>Available From:*</b>
          <input id="wd-available-from" className="form-control" type="date" defaultValue={assignment.available_date} onChange={(e) => {
            const editedAssignment = { ...assignmentEdits, available_date: e.target.value };
            setEditedAssignment(editedAssignment);
          }} readOnly={isStudent} />
        </label>
      </div>

      <div className="col">
        <label className="form-label d-flex flex-column">
          <b>Until:*</b>
          <input id="wd-available-until" className="form-control" type="date" defaultValue={assignment.available_until} onChange={(e) => {
            const editedAssignment = { ...assignmentEdits, available_until: e.target.value };
            setEditedAssignment(editedAssignment);
          }} readOnly={isStudent} />
        </label>
      </div>
    </div>
  </span>;
}
