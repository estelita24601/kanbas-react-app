//SECTION 2.2.3 - Passing Functions as Parameters

//parameter is called `theFunction`, it must be of type `theFunction` which has no parameters and returns void
export default function PassingFunctions({ theFunction }: { theFunction: () => void }) {
    return (
        <div>
            <h2>Passing Functions</h2>
            <button onClick={theFunction} className="btn btn-primary">
                Invoke the Function
            </button>
            <hr />
        </div>
    );
}
