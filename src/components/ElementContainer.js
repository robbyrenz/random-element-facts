import React from "react"

import periodicTable from "../data/periodic_table.json"
import Element from "./Element"

class ElementContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            elements: periodicTable.elements,
            randomElement: periodicTable.elements[0],
            length: periodicTable.elements.length
        }
        this.handleClick = this.handleClick.bind(this)
        // this.generateRandomElement = this.randomElement.bind(this)
    }

    handleClick() {
        const randomNumber = Math.floor(Math.random() * this.state.length)
        this.setState({ randomElement: this.state.elements[randomNumber] })
    }

    generateRandomElement() {

    }

    render() {
        return (
            <div>
                <Element 
                    element={this.state.randomElement}
                    handleClick={this.handleClick}
                />
            </div>
        )
    }
}

export default ElementContainer
