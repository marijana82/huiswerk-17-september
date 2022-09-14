import React from "react";

function CounterButtons({titleFruitName, totalNumberOfFruit, stateFruitName, stateFruitSetterFunctionMin, stateFruitSetterFunctionPlus, buttonLabelMin, buttonLabelPlus}) {
    return(
        <article className="fruit">

            <h2>
                {titleFruitName}
            </h2>

            <button
                type="button"
                disabled={stateFruitName <= 0}
                onClick={() => stateFruitSetterFunctionMin(stateFruitName - 1)}
            >{buttonLabelMin}
            </button>

            <p>{totalNumberOfFruit}</p>

            <button
                type="button"
                onClick={() => stateFruitSetterFunctionPlus(stateFruitName + 1)}
            >{buttonLabelPlus}
            </button>

        </article>




    )
}

export default CounterButtons;

