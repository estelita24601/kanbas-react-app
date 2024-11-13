//SECTION 2.3.7 - Array State Variables

import React, { useState } from "react";
export default function ArrayStateVariable() {
    // state variable called `array` that has a function called `setArray`
    const [array, setArray] = useState([1, 2, 3, 4, 5]);

    //function that adds a random number to `array` using `setArray`
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };

    // function that removes an alement from `array` given the index
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    };

    //TODO: add bootstrap classes for formatting
    //FIXME: delete button is too tall, entire thing might be too wide?
    return (
        <div id="wd-array-state-variables" className="container">

            <h2>Array State Variable</h2>
            <button onClick={addElement} className="btn btn-success mb-2">
                Add Element
            </button>

            <ul className="list-group">

                {array.map((item, index) => (

                    <li key={index} className="list-group-item d-flex justify-content-between">
                        <p className="fs-3 ms-2">{item}</p>

                        <button
                            onClick={() => deleteElement(index)}
                            id="wd-delete-element-click"
                            className="btn btn-danger py-1"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <hr />
        </div>
    );
}
