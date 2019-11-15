import React from "react"

function Element(props) {
    return (
        <div className="container">
            <h2>Name: {props.element.name}</h2>
            <h2>Appearance: {props.element.appearance}</h2>
            <h2>Discovered by: {props.element.discovered_by}</h2>
            <h2>Summary: {props.element.summary}</h2>
        </div>
    )
}

export default Element
