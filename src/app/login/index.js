import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './index.action';
import Loader from '../../components/loader/';
import './index.less';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: this.props.login.username,
			password: '',
			spinning: true
		}
	}

	render() {
		setTimeout(() => {
			this.setState({
				spinning: false
			})
		}, 400)
		return (
			<div>
				<div className="loginContainer">
					<div className="inputContainer">
						<label htmlFor="username">用户名</label>
						<input type="text" id="username" />
					</div>
					<div className="inputContainer">
						<label htmlFor="password">密码</label>
						<input type="text" id="password" />
					</div>
				</div>
				<Loader spinning={this.state.spinning} />
			</div>
		);
	}

	componentDidMount() {
		this.props.loginByAccount();
	}
}

export default connect(
	(state) => {
		return {login: state.Login}
	},
	(dispatch) => bindActionCreators({...actions}, dispatch)
)(Login);
