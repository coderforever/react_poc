import React from 'react';
import { Panel, Glyphicon, Input, Button } from 'react-bootstrap';

export default class CustomerLogin extends React.Component {

    render() {
        const title = (<h3>用户登录</h3>);
        const usernameIcon = <Glyphicon glyph='user'/>;
        const passwordIcon = <Glyphicon glyph='lock'/>;
        return (
            <Panel header={title} bsStyle='info'>
                <Input type='text' addonBefore={usernameIcon} placeholder='请输入用户名'/>
                <Input type='password' addonBefore={passwordIcon} placeholder='请输入密码'/>

                <div>
                    <span>没有账号，请<Button bsStyle='link' id='register'>注册</Button></span>
                    <Button bsStyle='info' bsSize='xsmall' className='pull-right find-password'><Glyphicon
                        glyph='question-sign'/>找回密码</Button>
                </div>
                <Button bsStyle='success' className='login' block><Glyphicon glyph='log-in'/>登录</Button>
            </Panel>
        );
    }
}