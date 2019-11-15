import React from "react"

import periodicTable from "../data/periodic_table.json"
import Element from "./Element"

class ElementContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            elements: periodicTable.elements
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if (document.body.style.backgroundColor === "white") {
            document.body.style.backgroundColor = "black"
            document.body.style.color = "white"
            console.log(this.state.elements[0])
        }
        else {
            document.body.style.backgroundColor = "white"
            document.body.style.color = "black"
            console.log(this.state.elements[1])
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.greetings}</h1>
                <button onClick={this.handleClick}>Click me!</button>
                <Element element={this.state.elements[0]} />
            </div>
        )
    }
}

export default ElementContainer
