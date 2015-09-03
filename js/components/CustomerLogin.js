import React from 'react';
import { Panel, Glyphicon, Input, Button } from 'react-bootstrap';

export default class CustomerLogin extends React.Component {

    render() {
        const title = (<h3>用户登录</h3>);
        const phoneIcon = <Glyphicon glyph='phone'/>;
        const passwordIcon = <Glyphicon glyph='lock'/>;
        return (
            <Panel header={title} bsStyle='info'>
                <Input type='text' addonBefore={phoneIcon} placeholder='请输入手机号码'/>
                <Input type='password' addonBefore={passwordIcon} placeholder='请输入密码'/>
                <div>
                    <span>没有账号，请<a href='register.html'>注册</a></span>
                    <Button bsStyle='info' bsSize='xsmall' className='pull-right find-password'>
                        <Glyphicon glyph='question-sign'/>找回密码
                    </Button>
                </div>
                <Button bsStyle='success' className='login' block><Glyphicon glyph='log-in'/>登录</Button>
            </Panel>
        );
    }
}