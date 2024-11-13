import React, { useState } from "react";
export default function EventObject() {
    const [event, setEvent] = useState(null); //this initializes the event

    //callback function
    const handleClick = (e: any) => {
        e.target = e.target.outerHTML;
        delete e.view;
        setEvent(e);
    };
    return (
        <div>
            <h2>Event Object</h2>

            {/* button that will trigger the event */}
            <button onClick={(e) => handleClick(e)}
                className="btn btn-primary"
                id="wd-display-event-obj-click">
                Display Event Object
            </button>

            {/* converts the event object into a string...??? */}
            <pre>{JSON.stringify(event, null, 2)}</pre>
            <hr />
        </div>
    );
}
