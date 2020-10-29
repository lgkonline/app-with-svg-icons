import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LgkPillComponent } from "lgk"

ReactDOM.render(
    <React.StrictMode>
        <>
            <LgkPillComponent />
            <App />
        </>
    </React.StrictMode>,
    document.getElementById("root")
);