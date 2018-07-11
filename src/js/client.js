import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/main.css';
import '../css/font.css';

import Layout from './components/Layout';
import Home from './components/Home';
import Search from './components/Search';	
import About from './components/About';		

const app = document.getElementById('app');
ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route path='/' component={Layout} />
			<Route exact path='/' component={Home} />
			<Route path='/search' component={Search} />
			<Route path='/about' component={About} />
		</div>	
	</BrowserRouter>
	, app);
