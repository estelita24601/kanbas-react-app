export default function VariablesAndConstants() {
    var functionScoped = 2;
    // only use var as a last resort

    let blockScoped = 5;
    // block scope = can't access this variable outside of the current block { }
    // this variable must be declared before being used
    // this variable can't be redeclared inside of this block { }

    const constant1 = functionScoped - blockScoped;
    // also has block scope
    // const variables must be assigned a value when declared
    // can't re-assign a value

    return (
        <div id="wd-variables-and-constants">
            <h4>Variables and Constants</h4>

            <span>functionScoped = {functionScoped}</span> <br />
            {/* I can insert the value of my variables into text using { } */}

            blockScoped = {blockScoped}<br />

            constant1 = {constant1} <hr />
        </div>
    );

}