import React from "react"

import periodicTable from "../data/periodic_table.json"
import Element from "./Element"

class ElementContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            elements: periodicTable.elements,
            randomElement: periodicTable.elements[0]
        }
        this.handleClick = this.handleClick.bind(this)
        // this.generateRandomElement = this.randomElement.bind(this)
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

    generateRandomElement() {

    }

    render() {
        return (
            <div className="container">
                <h1>{this.props.greetings}</h1>
                <Element element={this.state.randomElement} />
                <button onClick={this.handleClick}>Randomize!</button>
            </div>
        )
    }
}

export default ElementContainer
