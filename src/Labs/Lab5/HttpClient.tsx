import React, { useEffect, useState } from "react";
import axios from "axios";
import * as client from "./client";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER_A6;

export default function HttpClient() {
    //state variable for welcome message after a button click
    const [welcomeOnClick, setWelcomeOnClick] = useState("");
    //function for button click that fetches welcome message from the client
    const fetchWelcomeOnClick = async () => {
        const welcomeMessage = await client.fetchWelcomeMessage();
        setWelcomeOnClick(welcomeMessage);
    };

    //3.5.4 - RETRIEVE DATA ON LOAD
    const [welcomeOnLoad, setWelcomeOnLoad] = useState("");
    const fetchWelcomeOnLoad = async () => {
        const welcomeMessage = await client.fetchWelcomeMessage();
        setWelcomeOnLoad(welcomeMessage);
    };
    useEffect(() => { fetchWelcomeOnLoad(); }, []);


    return (
        <div>
            <h3>HTTP Client</h3> <hr />

            <h4>Requesting on Click</h4>
            <button className="btn btn-primary me-2" onClick={fetchWelcomeOnClick}>
                Fetch Welcome
            </button> <br />
            Response from server: <b>{welcomeOnClick}</b>

            <h4>Requesting on Load</h4>
            Response from server: <b>{welcomeOnLoad}</b>
            <hr />
        </div>
    );
}
