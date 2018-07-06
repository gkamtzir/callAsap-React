import React from "react";

import Navbar from "./Navbar";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "Welcome",
		};
	}

	render() {
		return (
			<div>
				<Navbar />
				{ this.state.title }
			</div>
		);
	}
}
