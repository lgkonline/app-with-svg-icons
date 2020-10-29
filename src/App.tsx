import React from "react";
import "./style.css"

// Import the icon component …
import Icon from "./Icon";

function App() {
    return (
        <div className="App">
            <main>
                <h1 className="title">Awesome icons</h1>

                {/* … and implement it! */}
                <h1><Icon /> in a headline</h1>

                <p><Icon /> in a paragraph</p>

                <h2>Coming from Instagram?</h2>
                <p>
                    You can find <a href="https://github.com/lgkonline/app-with-svg-icons" target="_blank" rel="noopener noreferrer">
                        the source code on GitHub!
                    </a>
                </p>
            </main>
        </div>
    );
}

export default App;
