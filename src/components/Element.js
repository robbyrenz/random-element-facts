import React from "react"

function Element(props) {
    return (
        <div className="container">
            <h1>{props.element.name}</h1>
            <h2>Appearance: {props.element.appearance}</h2>
            <h2>Discovered by: {props.element.discovered_by}</h2>
            <h2>Summary: {props.element.summary}</h2>
            <button onClick={props.handleClick}>Randomize!</button>
        </div>
    )
}

export default Element
