export default function VariableTypes() {
    let numberVariable = 123;
    let isNumber = typeof numberVariable;

    let floatingPointNumber = 234.345;

    let stringVariable = "Hello World!";
    let isString = typeof stringVariable;

    let booleanVariable = true;
    let isBoolean = typeof booleanVariable;

    return (
        <div id="wd-variable-types">
            <h4>Variable Types</h4>

            numberVariable = {numberVariable}<br />
            floatingPointNumber = {floatingPointNumber}<br />
            stringVariable = {stringVariable}<br />
            booleanVariable = {booleanVariable}<br />

            isNumber = {isNumber}<br />
            isString = {isString}<br />
            isBoolean = {isBoolean}<hr />
        </div>
    );
}