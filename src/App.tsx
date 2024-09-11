//import logo from './logo.svg';
import './App.css';
import Labs from "./Labs";
import React from 'react';
import {HashRouter, Route, Routes, Navigate} from "react-router-dom";
import Lab1 from "./Labs/Lab1";
import Kanbas from "./Kanbas";

function App() {
    return (
        <HashRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="Labs" />} />
                    <Route path="/Labs/*" element={<Labs />} />
                    <Route path="/Kanbas" element={<Kanbas />} />
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
