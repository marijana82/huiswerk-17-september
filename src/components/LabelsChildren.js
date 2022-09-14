import React from "react";


function LabelsChildren(props) {
    return(
        <label
            htmlFor="frequency-field"
        >{props.title}

            {props.children}
        </label>

    )
}


export default LabelsChildren;



