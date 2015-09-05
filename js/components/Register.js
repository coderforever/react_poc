import React from 'react';
import { Panel, Glyphicon, Input, Button } from 'react-bootstrap';

export default class CustomerLogin extends React.Component {

    render() {
        let title = (<h3>用户注册</h3>), phoneIcon = <Glyphicon glyph='phone'/>, passwordIcon = <Glyphicon glyph='lock'/>, locationIcon=<Glyphicon glyph='home'/>;
        return (
            <form>
                <Panel header={title} bsStyle='info'>
                    <label className='radio-inline'>
                        <input type='radio' value='' name='userType'/> 我是买家
                    </label>
                    <label className='radio-inline'>
                        <input type='radio' value='' name='userType'/> 我是卖家
                    </label>
                    <br/>
                    <Input type='text' addonBefore={phoneIcon} placeholder='请输入手机号码'/>
                    <Input type='password' addonBefore={passwordIcon} placeholder='请输入密码'/>
                    <Input type='password' addonBefore={passwordIcon} placeholder='请再次输入密码'/>
                    <Input type='text' addonBefore={locationIcon} placeholder='请输入联系地址'/>
                    <Button type='submit' bsStyle='success' className='register' block><Glyphicon glyph='user'/>注册</Button>
                </Panel>
            </form>
        );
    }
}