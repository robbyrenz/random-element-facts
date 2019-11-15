import React from "react"

class ElementContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            elements: null // put in the elements.json file here in state
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if (document.body.style.backgroundColor === "white") {
            document.body.style.backgroundColor = "black"
            document.body.style.color = "white"
        }
        else {
            document.body.style.backgroundColor = "white"
            document.body.style.color = "black"
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.greetings}</h1>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}

export default ElementContainer
