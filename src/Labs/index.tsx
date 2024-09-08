//imports the function called Lab1 from file with a relative path of ./Lab1
import Lab1 from "./Lab1";

//create an element called Labs that will be used inside of App.tsx
export default function Labs() {
    return (
        <div id="wd-labs">
            <h1>Labs</h1>
            <Lab1/>
        </div>
    );
}
