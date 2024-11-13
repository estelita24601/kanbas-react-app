//SECTION 2.3.3 - Boolean State Variables
import React, { useState } from "react";


export default function BooleanStateVariables() {
    // state variable - done
    // setter function - setDone
    // initial value for the state variable is `true`
    const [done, setDone] = useState(true);

    return (
        <div id="wd-boolean-state-variables">
            <h2>Boolean State Variables</h2>

            {/* if done is true then display "Done" else display "Not Done" */}
            <p>{done ? "Done" : "Not Done"}</p>

            <label className="form-control">
                <input
                    type="checkbox"
                    checked={done}
                    onChange={() => setDone(!done)}
                /> Done
            </label>

            {/* display this div if state variable `done` equals true */}
            {done && <div className="alert alert-success">Yay! you are done</div>}

            <hr />
        </div >
    );
}