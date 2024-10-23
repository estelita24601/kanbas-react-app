//imports the function called Lab1 from file with a relative path of ./Lab1
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import TOC from "./TOC";
import { Route, Routes, Navigate } from "react-router"

//create an element called Labs that will be used inside of App.tsx
export default function Labs() {
    return (
        <div id="wd-labs">
            <h1>Labs</h1>
            <h2>Estelita Chen</h2>
            <h3>CS 5610 Fall 2024</h3>
            <TOC />
            <Routes>
                <Route path="/" element={<Navigate to="Lab1" />} />
                <Route path="Lab1" element={<Lab1 />} />
                <Route path="Lab2" element={<Lab2 />} />
                <Route path="Lab3/*" element={<Lab3 />} />
                <Route path="Lab4/*" element={<Lab4 />} />
            </Routes>
        </div>
    );
}
