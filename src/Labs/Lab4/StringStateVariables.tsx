//SECTION 2.3.4 - String State Variables
import React, { useState } from "react";

export default function StringStateVariables() {
    // state variable is `firstName` and initial value is "John"
    const [firstName, setFirstName] = useState("John");

    return (
        <div>
            <h2>String State Variables</h2>
            <p>{firstName}</p>
            <input
                className="form-control"
                defaultValue={firstName}
                onChange={(inputEvent) => setFirstName(inputEvent.target.value)}>
            </input>
        </div >);
}