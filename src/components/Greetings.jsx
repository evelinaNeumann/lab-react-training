import React from "react";

function Greetings (props) {
    const {lang,children} = props;
    let greeting; 

    switch (lang) {
        case "de":
            greeting = "Guten Tag";
            break;
        case "en":
            greeting = "Hello";
            break;
        case "es":
            greeting = "Hola";
            break;
        case "fr":
            greeting = "Bonjour";
            break;
        default:
            greeting = "Hello";
    }
    return (
        <div>
            {greeting}, {children}!

        </div>
    );                
    }

    export default Greetings;

    