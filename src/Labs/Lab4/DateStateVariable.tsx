//SECTION 2.3.5 - Date State Variable

import React, { useState } from "react";
export default function DateStateVariable() {
    const [startDate, setStartDate] = useState(new Date())

    const dateObjectToHtmlDateString = (date: Date) => {
        const year = date.getFullYear()
        // why month + 1 and not just month???
        const month = `${date.getMonth() + 1 < 10 ? 0 : ""}${date.getMonth() + 1}`
        // why date + 1 and not just date??
        const day = `${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`

        return `${year}-${month}-${day}`
    }

    return (
        <div id="wd-date-state-variables">
            <h2>Date State Variable</h2>
            <h3>{JSON.stringify(startDate)}</h3>
            <h3>{dateObjectToHtmlDateString(startDate)}</h3>
            <input
                className="form-control"
                type="date"
                defaultValue={dateObjectToHtmlDateString(startDate)}
                onChange={(changeEvent) => setStartDate(new Date(changeEvent.target.value))}
            />
        </div>
    );
}