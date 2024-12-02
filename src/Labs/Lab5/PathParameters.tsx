import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER_A6;
export default function PathParameters() {
    const [a, setA] = useState("");
    const [b, setB] = useState("");

    return (
        <div>
            <h3>Path Parameters</h3>

            <input
                id="wd-path-parameter-a"
                className="form-control mb-2"
                type="number"
                defaultValue={a}
                onChange={(e) => setA(e.target.value)}
            />

            <input
                id="wd-path-parameter-b"
                className="form-control mb-2"
                type="number"
                defaultValue={b}
                onChange={(e) => setB(e.target.value)}
            />

            <a className="btn btn-primary me-2" id="wd-path-parameter-add"
                href={`${REMOTE_SERVER}/lab5/add/${a}/${b}`}>
                Add {a} + {b}
            </a>

            <a className="btn btn-danger me-2" id="wd-path-parameter-subtract"
                href={`${REMOTE_SERVER}/lab5/subtract/${a}/${b}`}>
                Subtract {a} - {b}
            </a>

            <a className="btn btn-success me-2" id="wd-path-parameter-subtract"
                href={`${REMOTE_SERVER}/lab5/multiply/${a}/${b}`}>
                Multiply {a} * {b}
            </a>

            <a className="btn btn-warning me-2" id="wd-path-parameter-subtract"
                href={`${REMOTE_SERVER}/lab5/divide/${a}/${b}`}>
                Divide {a} / {b}
            </a>

            <hr />
        </div>
    );
}
