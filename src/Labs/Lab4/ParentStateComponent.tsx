// SECTION 2.3.8 - Sharing State Between Components
import React, { useState } from "react";
import ChildStateComponent from "./ChildStateComponent"
export default function ParentStateComponent() {
    const [counter, setCounter] = useState(123);
    return (
        <div>
            <h2>Counter {counter}</h2>
            <ChildStateComponent
                counter={counter}
                setCounter={setCounter} />
            <hr />
        </div>
    );
}
