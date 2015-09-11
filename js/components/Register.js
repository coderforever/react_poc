import React from 'react';
import { Panel, Glyphicon, Input, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import UserActions from '../actions/UserActions';
import UserConstants from '../constants/UserConstants';
import UserStore from '../stores/UserStore';
import $ from 'jquery';

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
            venderID:'',
            venderName:'',
            vender_validate:true,
            register_success: true,
            venderMenuItems:[]
        };
    }

    componentDidMount() {
        UserStore.addChangeListener(this._onRegister.bind(this));
        $.get('/venders', function(result){
            if(result.code==UserConstants.SUCCESS){
                for(let vender of result.venders){
                    this.state.venderMenuItems.push(<MenuItem eventKey={vender.name+'#'+vender.id}>{vender.name}</MenuItem>);
                }
            }
        }.bind(this));
    }

    componentWillUnmount() {
        UserStore.removeChangeListener(this._onRegister.bind(this));
    }

    render() {
        let title = (<h3>用户注册</h3>), phoneIcon = <Glyphicon glyph='phone'/>, passwordIcon = <Glyphicon glyph='lock'/>, locationIcon=<Glyphicon glyph='home'/>;
        let otherFields=<Input type='text' addonBefore={locationIcon} placeholder={'请输入联系地址（不超过'+UserConstants.ADDRESS_LENGTH_LIMIT+'字）'} className={this.state.address_validate ? '' : 'error'} value={this.state.address} onChange={this._addressInputChange.bind(this)}/>;
        if(this.state.userType==UserConstants.VENDER_ROLE){
            if(typeof this.state.venderMenuItems!=='undefined' && this.state.venderMenuItems.length>0){
                otherFields=(
                    <DropdownButton bsStyle={this.state.vender_validate ? 'default':'danger'} title={this.state.venderID=='' ? '请选择商铺':this.state.venderName} onSelect={this._venderChange.bind(this)}>
                        {this.state.venderMenuItems}
                    </DropdownButton>
                );
            }
            else{
                otherFields='';
            }
        }
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
                    {otherFields}
                    { this.state.register_success==false ? (<div className="alert alert-error"><a className="close" data-dismiss="alert">×</a><strong>注册失败！</strong>请重试。</div>) : '' }
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

    _venderChange(event, key){
        let arr=key.split('#');
        this.setState({
            venderID:arr[1],
            venderName:arr[0],
            vender_validate:true
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
        let addressValue=this.state.address, userType=this.state.userType, venderID=this.state.venderID;
        if(userType==UserConstants.CUSTOMER_ROLE){
            if(addressValue=='' || addressValue.length>UserConstants.ADDRESS_LENGTH_LIMIT){
                this.setState({
                    address_validate: false
                });
                return;
            }
        }
        else if(userType==UserConstants.VENDER_ROLE){
            if(venderID==''){
                this.setState({
                   vender_validate: false
                });
                return;
            }
        }

        UserActions.register({
            name: phoneValue,
            password: password1,
            address: addressValue,
            venderID: venderID,
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
                register_success:false
            });
        }
    }
}