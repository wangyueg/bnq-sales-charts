import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Login from './app/login/index';
import Home from './app/home/index';
import SubHome from './app/subHome/index';

export default () => {
	return (
		<Router>			
			<div id="router">
				<Route exact path="/" component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/subHome" component={SubHome} />
			</div>
		</Router>
	);
}