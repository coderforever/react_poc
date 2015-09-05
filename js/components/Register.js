import React from 'react';
import { Panel, Glyphicon, Input, Button } from 'react-bootstrap';
import UserActions from '../actions/UserActions';
import UserConstants from '../constants/UserConstants';
import UserStore from '../stores/UserStore';

export default class CustomerLogin extends React.Component {

    constructor(){
        super();
        this.state={
            userType: UserConstants.CUSTOMER_ROLE,
            phone:'',
            phone_validate:true,
            password:'',
            password_validate:true,
            address:'',
            address_validate:true,
            venderid:'',
            venderid_validate:true
        };
    }

    componentDidMount() {
        UserStore.addChangeListener(this._onRegister.bind(this));
    }

    componentWillUnmount() {
        UserStore.removeChangeListener(this._onRegister.bind(this));
    }

    render() {
        let title = (<h3>用户注册</h3>), phoneIcon = <Glyphicon glyph='phone'/>, passwordIcon = <Glyphicon glyph='lock'/>, locationIcon=<Glyphicon glyph='home'/>;
        return (
            <form onSubmit={this._registerUser.bind(this)}>
                <Panel header={title} bsStyle='info'>
                    <label className='radio-inline'>
                        <input type='radio' value={UserConstants.CUSTOMER_ROLE} checked={this.state.userType==UserConstants.CUSTOMER_ROLE} onChange={this._userTypeChange.bind(this)}/> 我是买家
                    </label>
                    <label className='radio-inline'>
                        <input type='radio' value={UserConstants.VENDER_ROLE} checked={this.state.userType==UserConstants.VENDER_ROLE} onChange={this._userTypeChange.bind(this)}/> 我是卖家
                    </label>
                    <br/>
                    <Input type='text' addonBefore={phoneIcon} placeholder='请输入手机号码' value={this.state.phone} className={this.state.phone_validate ? '' : 'error'} onChange={this._phoneInputChange.bind(this)}/>
                    <Input type='password' id='password1' addonBefore={passwordIcon} placeholder='请输入密码' className={this.state.password_validate ? '' : 'error'} onChange={this._pwdInputChange.bind(this)}/>
                    <Input type='password' id='password2' addonBefore={passwordIcon} placeholder='请再次输入密码' className={this.state.password_validate ? '' : 'error'} onChange={this._pwdInputChange.bind(this)}/>
                    <Input type='text' addonBefore={locationIcon} placeholder={'请输入联系地址（不超过'+UserConstants.ADDRESS_LENGTH_LIMIT+'字）'} className={this.state.address_validate ? '' : 'error'} value={this.state.address} onChange={this._addressInputChange.bind(this)}/>
                    <Button type='submit' bsStyle='success' className='register' block><Glyphicon glyph='user'/>注册</Button>
                </Panel>
            </form>
        );
    }

    _userTypeChange(event){
        this.setState({
            userType: event.target.value
        });
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

    _addressInputChange(event){
        this.setState({
            address: event.target.value,
            address_validate: true
        });
    }

    _registerUser(event){
        // prevent form submit by default
        event.preventDefault();

        //validate fields
        let phoneValue=this.state.phone;
        if(!!phoneValue.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)==false){
            this.setState({
                phone_validate: false
            });
            return;
        }
        let password1=document.getElementById('password1').value, password2=document.getElementById('password2').value;
        if(password1=='' || password1!=password2){
            this.setState({
                password_validate: false
            });
            return;
        }
        let addressValue=this.state.address, userType=this.state.userType;
        if(userType==UserConstants.CUSTOMER_ROLE){
            if(addressValue=='' || addressValue.length>UserConstants.ADDRESS_LENGTH_LIMIT){
                this.setState({
                    address_validate: false
                });
                return;
            }
        }

        UserActions.register({
            phone: phoneValue,
            password: password1,
            address: addressValue,
            venderid: null,
            userType: userType
        });
    }

    _onRegister(response){
        if(response==UserConstants.SUCCESS){
            let userType=this.state.userType;
            if(userType==UserConstants.CUSTOMER_ROLE){
                window.location.href='customerLogin.html';
            }
            else if(userType==UserConstants.VENDER_ROLE){
                window.location.href='venderLogin.html';
            }
        }
        else{
            this.setState({
                phone_validate:false
            });
        }
    }
}