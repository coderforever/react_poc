import React from 'react';
import { Panel, Glyphicon, Input, Button } from 'react-bootstrap';
import UserActions from '../actions/UserActions';
import UserConstants from '../constants/UserConstants';
import UserStore from '../stores/UserStore';

export default class Login extends React.Component {

    constructor(){
        super();
        this.state={
            phone: '',
            password: '',
            phone_validate:true,
            password_validate:true
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
                <Input type='text' addonBefore={phoneIcon} value={this.state.phone} placeholder='请输入手机号码' className={this.state.phone_validate ? '' : 'error'} onChange={this._phoneInputChange.bind(this)}/>
                <Input type='password' addonBefore={passwordIcon} value={this.state.password} placeholder='请输入密码' className={this.state.password_validate ? '' : 'error'} onChange={this._pwdInputChange.bind(this)}/>
                <div>
                    <span>没有账号，请<a href='register.html'>注册</a></span>
                    <Button bsStyle='info' bsSize='xsmall' className='pull-right find-password'>
                        <Glyphicon glyph='question-sign'/>找回密码
                    </Button>
                </div>
                <Button bsStyle='success' className='login' block onClick={this._executeLogin.bind(this)}><Glyphicon glyph='log-in'/>登录</Button>
            </Panel>
        );
    }

    _phoneInputChange(event){
        this.setState({
            phone: event.target.value,
            phone_validate: true
        });
    }

    _pwdInputChange(event){
        this.setState({
            password: event.target.value,
            password_validate: true
        });
    }

    _executeLogin(){
        let phoneValue=this.state.phone, passwordValue=this.state.password;
        if(!!phoneValue.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)==false){
            this.setState({
                phone_validate: false
            });
            return;
        }
        if(passwordValue==''){
            this.setState({
                password_validate: false
            });
            return;
        }
        if(this.state.phone_validate && this.state.password_validate){
            UserActions.login({
                role: this.props.role,
                name: phoneValue,
                password: passwordValue
            });
        }
    }

    _onLogin(result){
        if(result==UserConstants.LOGIN_SUCCESS){
            window.location.href='orderList.html';
        }
        else{
            this.setState({
                phone_validate:false,
                password_validate:false
            });
        }
    }
}