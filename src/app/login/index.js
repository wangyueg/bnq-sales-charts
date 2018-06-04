import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './index.action';
import Loader from '../../components/loader/';
import LockImage from './images/icon_lock.png';
import PhoneImage from './images/icon_phone.png';
import './index.less';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: this.props.login.username,
			password: '',
			spinning: false
		}
	}

	render() {
		return (
			<div className="login">
				<div className="bg"></div>
				<div className="loginContainer">
					<div className="inputContainer">
						<img htmlFor="username" src={PhoneImage} alt="用户名" />
						<input type="text" id="username" placeholder="请输入手机号码" />
					</div>
					<div className="inputContainer">
						<img htmlFor="password" src={LockImage} alt="密码" />
						<input type="text" id="password" placeholder="请输入密码" />
					</div>
					<button>登录</button>
				</div>
				<Loader spinning={this.state.spinning} />
			</div>
		);
	}
}

export default connect(
	(state) => {
		return {login: state.Login}
	},
	(dispatch) => bindActionCreators({...actions}, dispatch)
)(Login);
