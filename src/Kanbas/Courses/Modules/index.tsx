export default function Modules() {
    return (
        <div>
            <button onClick={() => alert("TODO: collapse all functionality")} type={"button"}>Collapse All</button>

            <button onClick={() => alert("TODO: view progress functionality")} type={"button"}>View Progress</button>

            <select>
                <option>Publish All</option>
                <option>Save All</option>
                <option>Export All</option>
            </select>

            <button onClick={() => alert("TODO: add new module functionality")} type={"button"}>+ Module</button>

            {/*TODO: add the rest of stuff from canvas, readings slides etc*/}
            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Week 1</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 2</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">TODO</li>
                                <li className="wd-content-item">TODO</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
