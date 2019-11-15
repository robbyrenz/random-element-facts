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
