import React from "react"

function CalculatorButton (props) {
    const value = props.value
    
    return(
        <button>{value}</button>
    )
};

export default CalculatorButton