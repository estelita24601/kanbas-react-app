// creating our own function to add two numbers together
function add(a: number, b: number) {
    return a + b;
}
export default function LegacyFunctions() {
    const twoPlusFour = add(2, 4); //here we use the add function we made
    console.log(twoPlusFour);
    return (
        <div id="wd-legacy-functions">
            <h4>Functions</h4>
            <h5>Legacy ES5 functions</h5>

            {/*here we're putting the return value from our function*/}
            twoPlusFour = {twoPlusFour}

            <br />

            {/*here we're calling the function inside the html*/}
            add(2, 4) = {add(2, 4)}
            <hr />
        </div>
    );
}