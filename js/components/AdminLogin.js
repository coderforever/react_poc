import React from 'react';
import { Panel, Glyphicon, Input, Button } from 'react-bootstrap';
import UserActions from '../actions/UserActions';
import UserConstants from '../constants/UserConstants';
import Codes from '../constants/Codes';
import UserStore from '../stores/UserStore';

export default class AdminLogin extends React.Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            username_validate: true,
            password_validate: true,
            login_success: true
        };
    }

    componentDidMount() {
        UserStore.addChangeListener(this._onLogin.bind(this));
    }

    componentWillUnmount() {
        UserStore.removeChangeListener(this._onLogin.bind(this));
    }

    render() {
        const title = (<h3>{this.props.title}</h3>);
        const userIcon = <Glyphicon glyph='user'/>;
        const passwordIcon = <Glyphicon glyph='lock'/>;
        return (
            <Panel header={title} bsStyle='info'>
                <Input type='text' addonBefore={userIcon} value={this.state.phone} placeholder='请输入用户名'
                       className={this.state.username_validate ? '' : 'error'}
                       onChange={this._usernameInputChange.bind(this)}/>
                <Input type='password' addonBefore={passwordIcon} value={this.state.password} placeholder='请输入密码'
                       className={this.state.password_validate ? '' : 'error'}
                       onChange={this._pwdInputChange.bind(this)}/>
                { this.state.login_success == false ? (<div className="alert alert-error"><a className="close"
                                                                                             data-dismiss="alert">×</a><strong>登录失败！</strong>用户名或者密码错误
                </div>) : '' }
                <Button bsStyle='success' className='login' block onClick={this._executeLogin.bind(this)}><Glyphicon
                    glyph='log-in'/>登录</Button>
            </Panel>
        );
    }

    _usernameInputChange(event) {
        this.setState({
            username: event.target.value,
            username_validate: true
        });
    }

    _pwdInputChange(event) {
        this.setState({
            password: event.target.value,
            password_validate: true
        });
    }

    _executeLogin() {
        let username = this.state.username, passwordValue = this.state.password;
        if (username == '') {
            this.setState({
                username_validate: false
            });
            return;
        }
        if (passwordValue == '') {
            this.setState({
                password_validate: false
            });
            return;
        }
        if (this.state.username_validate && this.state.password_validate) {
            UserActions.login({
                role: this.props.role,
                name: username,
                password: passwordValue
            });
        }
    }

    _onLogin(response, token, admin) {
        if (response == Codes.SUCCESS) {
            localStorage['token'] = token;
            window.location.href = UserConstants.LOGIN_SUCCESS_URL[this.props.role]+'?admin='+admin;
        }
        else {
            this.setState({
                login_success: false
            });
        }
    }
}