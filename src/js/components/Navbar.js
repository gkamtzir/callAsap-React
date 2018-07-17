/**
 * @author George Kamtziridis <georgekam96@gmail.com>
 */

import React from 'react';

import { Link } from 'react-router-dom';

/**
 * @class Navbar
 * @classdesc The react component which makes up the navbar.
 * @extends React.Component
 */
export default class Navbar extends React.Component {

	/**
	 * Render the component's view.
	 * @memberOf Navbar
     * @instance
     */
	render() {

		return (
			<div>
				<nav class="navbar navbar-expand-lg bg-light">
					<div class="navbar-brand">
						<Link to="/">CallAsap</Link>
					</div>

					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
						aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav mr-auto">
							<li class="nav-item">
								<Link to="/" class={window.location.pathname === '/' ? 'active' : ''}>Home</Link>
							</li>
							<li class="nav-item">
								<Link to="/search" class={window.location.pathname === '/search' ? 'active' : ''}>Search</Link>
							</li>
							<li class="nav-item">
								<Link to="/about" class={window.location.pathname === '/about' ? 'active' : ''}>About</Link>
							</li>

							<li>
								<a class="icon external-link" href="https://github.com/gkamtzir" title="Follow on GitHub" target="_blank"><i class="fa fa-github"></i></a>
							</li>
							<li>
								<a class="icon external-link" href="https://plus.google.com/u/0/100012202947812721560" title="Follow with Google Plus" target="_blank"><i class="fa fa-google-plus"></i></a>
							</li>
							<li>
								<a class="icon external-link" href="https://twitter.com/Programmunity/" title="Follow with Twitter" target="_blank"><i class="fa fa-twitter"></i></a>
							</li>

						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
