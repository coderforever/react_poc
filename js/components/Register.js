import React from 'react';
import { Panel, Glyphicon, Input, Button } from 'react-bootstrap';

export default class CustomerLogin extends React.Component {

    render() {
        const title = (<h3>用户注册</h3>);
        const phoneIcon = <Glyphicon glyph='phone'/>;
        const passwordIcon = <Glyphicon glyph='lock'/>;
        return (
            <Panel header={title} bsStyle='info'>
                <Input type='text' addonBefore={phoneIcon} placeholder='请输入手机号码'/>
                <Input type='password' addonBefore={passwordIcon} placeholder='请输入密码'/>
                <Input type='password' addonBefore={passwordIcon} placeholder='请再次输入密码'/>
                <Button bsStyle='success' className='register' block><Glyphicon glyph='user'/>注册</Button>
            </Panel>
        );
    }
}