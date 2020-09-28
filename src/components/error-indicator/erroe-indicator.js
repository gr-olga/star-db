import React from "react";
import "./error-indicator.css"
import icon from "./3408754.svg";

const ErrorIndicator =()=>{
    return(
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>
            <span className="boom">
                BOOM!
            </span>
            <span>
                Something has gone terribly wrong
            </span>
            <span>
                But, we already sent droids to fix it
            </span>
        </div>
    );

};
export default ErrorIndicator;