//SECTION 2.2.1 - Click Events

// arrow function (aka lambda function) that creates an alert that always says Hello World!
const hello = () => {
    alert("Hello World!");
};

//arrow function that takes in a string and uses it to create the alert message
const lifeIs = (good: string) => {
    alert(`Life is ${good}`);
};

export default function ClickEvent() {
    return (
        <div id="wd-click-event">
            <h2>Click Event</h2>

            {/* a button who's onClick has been set to the hello function */}
            <button onClick={hello} id="wd-hello-world-click">
                Hello World!
            </button>

            <button onClick={() => lifeIs("Good!")} id="wd-life-is-good-click">
                Life is Good!
            </button>

            {/* button who's onclick calls both functions */}
            <button id="wd-life-is-great-click"
                onClick={() => {
                    hello();
                    lifeIs("Great!");
                }}
            >
                Life is Great!
            </button>

            <hr />
        </div>
    );
}
