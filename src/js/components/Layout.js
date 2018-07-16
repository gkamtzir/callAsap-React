/**
 * @author George Kamtziridis <georgekam96@gmail.com>
 */

import React from "react";

import Navbar from "./Navbar";

/**
 * @class Layout
 * @classdesc The react component which makes up the entire website.
 * @extends React.Component
 */
export default class Layout extends React.Component {
	
	constructor() {
		super();
	}

	/**
	 * Render the component's view.
	 * @memberOf Layout
     * @instance
     */
	render() {

		return (
			<div>
				<Navbar />
			</div>
		);
	}
}
