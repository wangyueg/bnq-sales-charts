import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.less';

class Loading extends Component {
	constructor(props) {
		super(props);

		this.state = {
		}
	}	

	render() {
		return (
			<div>
				Hello World!
			</div>
		);
	}
}

export default Loading;