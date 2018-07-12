import React from "react";

import Navbar from "./Navbar";

export default class Layout extends React.Component {
	
	constructor() {
		super();
	}

	render() {

		return (
			<div>
				<Navbar />
			</div>
		);
	}
}
