export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">

            <label>
                <h3>Assignment Name</h3>
                <input type="text" id="wd-name" value="A1 - ENV + HTML" /><label htmlFor=""></label><br /><label
                    htmlFor=""></label><br />
            </label>

            <textarea id="wd-description" cols={30} rows={10}>
                The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, Links to each of the lab assignments, Link to the Kanbas application, Links to all relevant source code repositories. The Kanvas application should include a link to navigate back to the landing page.
            </textarea> <label htmlFor=""></label><br />

            <table>
                <tbody>

                    {/*Points*/}
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-points">Points</label>
                        </td>
                        <td>
                            <input type="number" id="wd-points" placeholder="100" min="0" />
                        </td>
                    </tr>

                    {/*Assignment Group*/}
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-group">Assignment Group</label>
                        </td>
                        <td>
                            <select id="wd-group">
                                <option selected>ASSIGNMENTS</option>
                                <option>QUIZZES</option>
                                <option>EXAMS</option>
                                <option>PROJECT</option>
                            </select>
                        </td>
                    </tr>

                    {/*Display Grade as*/}
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-display-group-as">Display Grade As</label>
                        </td>
                        <td>
                            <select id="wd-display-group-as">
                                <option selected>Percentage</option>
                                <option>Letter Grade</option>
                            </select>
                        </td>
                    </tr>

                    {/*Submission Settings*/}
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-submission-type">Submission Type</label>
                        </td>
                        <td style={{ borderStyle: "solid", borderWidth: "1px", borderColor: "lightgray", padding: "5px" }}>
                            <select id="wd-submission-type">
                                <option selected>Online</option>
                                <option>Physical</option>
                            </select> <br /><br />
                            Online Entry Options <br />
                            <input name="wd-entry-options" type="checkbox" id="wd-text-entry" />
                            <label htmlFor="wd-text-entry">Text Entry</label><br />

                            <input name="wd-entry-options" type="checkbox" id="wd-website-url" />
                            <label htmlFor="wd-website-url">Website URL</label><br />

                            <input name="wd-entry-options" type="checkbox" id="wd-media-recordings" />
                            <label htmlFor="wd-media-recordings">Media Recordings</label><br />

                            <input name="wd-entry-options" type="checkbox" id="wd-student-annotation" />
                            <label htmlFor="wd-student-annotation">Student Annotation</label><br />

                            <input name="wd-entry-options" type="checkbox" id="wd-file-upload" />
                            <label htmlFor="wd-file-upload">File Uploads</label><br />
                        </td>
                    </tr>

                    {/*Assignment Dates*/}
                    <tr>
                        <td align="right" valign="top">Assign</td>
                        <td style={{ borderStyle: "solid", borderWidth: "1px", borderColor: "lightgray", padding: "5px" }}>
                            <label htmlFor="wd-assign-to">Assign To</label> <br />
                            <input id="wd-assign-to" value="Everyone" /> <br /><br />
                            <label htmlFor="wd-due-date">Due</label> <br />
                            <input id="wd-due-date" type="date" /> <br /><br />

                            <table>
                                <tbody>
                                    <tr> {/*labels*/}
                                        <td><label htmlFor="wd-available-from">Available From:</label></td>
                                        <td><label htmlFor="wd-available-until">Until:</label></td>
                                    </tr>

                                    <tr> {/*date pickers*/}
                                        <td><input id="wd-available-from" type="date" /></td>
                                        <td><input id="wd-available-until" type="date" /></td>
                                    </tr>
                                </tbody>
                            </table>

                        </td>
                    </tr>

                </tbody>
            </table>

            <hr />

            {/*buttons*/}
            <table>
                <tbody>
                    <tr>
                        <td align="right" valign="top">
                            <button onClick={() => alert("TODO: Implement Cancel Button")}>Cancel</button>
                            <button onClick={() => alert("TODO: Implement Save Buttons")}>Save</button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}
