import React from "react";

export default class Navbar extends React.Component {

	render() {
		return (
			<div>
				<nav class="navbar navbar-expand-lg bg-light">
					<a class="navbar-brand" href="#"><a to="/">CallAsap</a></a>

					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
						aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav mr-auto">
							<li class="nav-item active">
								<a to="/">Home</a>
							</li>
							<li class="nav-item">
								<a to="/search">Search</a>
							</li>
							<li class="nav-item">
								<a to="/about">About</a>
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
