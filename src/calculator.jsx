import React from "react"

function Calculator (props) {
    const value = props.value
    return(
        <div>
            <button>{value}</button>
        </div>
    )
};

export default Calculator