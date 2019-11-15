import React from "react"

import ElementContainer from "./components/ElementContainer"
import Header from "./components/Header"

function App() {
	return (
		<div>
			<Header heading={"Random Element Facts"} />
			<ElementContainer />
		</div>
	)
}

export default App
