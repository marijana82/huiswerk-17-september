import React from "react";


function Buttons({clickHandler, textButton, disableButton, typeButton}) {
    return(
            <button
                className="reset_send"
                type={typeButton}
                disabled={disableButton}
                onClick={clickHandler}

            >{textButton}
            </button>

    )
}


export default Buttons;