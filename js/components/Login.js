import React from 'react';
import { Panel, Glyphicon, Input, Button } from 'react-bootstrap';
import UserActions from '../actions/UserActions';
import UserConstants from '../constants/UserConstants';
import Codes from '../constants/Codes';
import UserStore from '../stores/UserStore';

export default class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            loginName: '',
            loginName_validate: true,
            password: '',
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
        const phoneIcon = <Glyphicon glyph='phone'/>;
        const passwordIcon = <Glyphicon glyph='lock'/>;
        return (
            <Panel header={title} bsStyle='info'>
                <Input type='text' addonBefore={phoneIcon} value={this.state.loginName} placeholder='请输入手机号/邮箱'
                       className={this.state.loginName_validate ? '' : 'error'}
                       onChange={this._phoneInputChange.bind(this)}/>
                <Input type='password' addonBefore={passwordIcon} value={this.state.password} placeholder='请输入密码'
                       className={this.state.password_validate ? '' : 'error'}
                       onChange={this._pwdInputChange.bind(this)}/>

                <div>
                    <span>没有账号，请<a href='register.html'>注册</a></span>
                    <Button bsStyle='info' bsSize='xsmall' className='pull-right find-password'>
                        <Glyphicon glyph='question-sign'/>找回密码
                    </Button>
                </div>
                { this.state.login_success == false ? (<div className="alert alert-error"><a className="close"
                                                                                             data-dismiss="alert">×</a><strong>登录失败！</strong>用户名或者密码错误
                </div>) : '' }
                <Button bsStyle='success' className='login' block onClick={this._executeLogin.bind(this)}><Glyphicon
                    glyph='log-in'/>登录</Button>
            </Panel>
        );
    }

    _phoneInputChange(event) {
        this.setState({
            loginName: event.target.value,
            loginName_validate: true
        });
    }

    _pwdInputChange(event) {
        this.setState({
            password: event.target.value,
            password_validate: true
        });
    }

    _executeLogin() {
        let loginName = this.state.loginName, passwordValue = this.state.password;
        if (!!loginName.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/) == false &&
            !!loginName.match(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/) == false) {
            this.setState({
                loginName_validate: false
            });
            return;
        }
        if (passwordValue == '') {
            this.setState({
                password_validate: false
            });
            return;
        }
        if (this.state.loginName_validate && this.state.password_validate) {
            UserActions.login({
                role: this.props.role,
                name: loginName,
                password: passwordValue
            });
        }
    }

    _onLogin(response, token) {
        if (response == Codes.SUCCESS) {
            localStorage['token'] = token;
            window.location.href = UserConstants.LOGIN_SUCCESS_URL[this.props.role];
        }
        else {
            this.setState({
                login_success: false
            });
        }
    }
}