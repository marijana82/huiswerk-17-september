import React from "react";


function Labels({textLabel, inputFieldPlaceholder, stateValue, stateSetterFunction}) {
    return(
        <label
            htmlFor="firstname-field"
        >{textLabel}
            <input
                id="firstname-field"
                type="text"
                name={stateValue}
                placeholder={inputFieldPlaceholder}
                value={stateValue}
                onChange={stateSetterFunction}
            />
        </label>

    )
}

export default Labels;
