//SECTION 2.3.2 - Integer State Variables

import React, { useState } from "react";
export default function Counter() {
    const [count, setCount] = useState(7);
    console.log(count);
    return (
        <div id="wd-counter-use-state">
            {/* display the value of the count variable */}
            <h2>Counter: {count}</h2>

            {/* button to increment the count variable */}
            <button
                onClick={() => { setCount(count + 1); console.log(count); }}
                id="wd-counter-up-click">
                Up
            </button>

            {/* button to decrement the count variable */}
            <button
                onClick={() => { setCount(count - 1); console.log(count); }}
                id="wd-counter-down-click">
                Down
            </button>
            <hr />
        </div>);
}