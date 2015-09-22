/**
 * Created by tangl9 on 2015-09-22.
 */
import React from 'react';
import {Modal, Button, Input} from 'react-bootstrap';
import UserStore from '../stores/UserStore';

export default class ModalTmpl extends React.Component {
    constructor() {
        super();
        this._handleSubmit = this._handleSubmit.bind(this);
        this.state = {
            showModal: false,
            name:'',
            password:'',
            venderId:'',
            venderName: '',
            venderAddress: '',
            venderService: ''
        }
    }

    componentDidMount() {
        this.setState({showModal: true});
    }

    componentWillUnmount() {
        this.setState({showModal: false});
    }

    render() {
        return (
            <div>
                <Modal show={this.state.showModal} onHide={this._close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>

                    <form onSubmit={this._handleSubmit}>
                        <Modal.Body>
                            <h4>用户名</h4>

                            <input type='text' className='form-control' placeholder='请输入用户名' ref='name'/>

                            <h4>密码</h4>

                            <input type='text' className='form-control' placeholder='请输入密码' ref='password'/>

                            <h4>商户名称</h4>

                            <input type='text' className='form-control' placeholder='请输入商户名称' ref='venderName'/>

                            <h4>商户地址</h4>

                            <input type="text" className='form-control' placeholder="请输入商户地址" ref='venderAddress'/>

                            <h4>经营范围</h4>

                            <select className='form-control' ref='venderService'>
                                <option value='mobile'>手机</option>
                                <option value='car'>汽车</option>
                            </select>


                        </Modal.Body>
                        <Modal.Footer>
                            <Button bsStyle="success" type='submit'>注册</Button>
                            <Button onClick={this._close.bind(this)}>关闭</Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        );
    }

    _handleSubmit(e) {
        e.preventDefault();
        var name = React.findDOMNode(this.refs.name).value.trim();
        var password = React.findDOMNode(this.refs.password).value.trim();
        var venderName = React.findDOMNode(this.refs.venderName).value.trim();
        var venderAddress = React.findDOMNode(this.refs.venderAddress).value.trim();
        var venderService = React.findDOMNode(this.refs.venderService).value.trim();
        if (!name || !password || !venderName || !venderAddress || !venderService) {
            return;
        }

        console.log(`${venderName} , ${venderAddress} , ${venderService}`);
        UserStore.register({
            name: name,
            password: password,
            address: venderAddress,
            venderID: '',
            userType: UserConstants.VENDER_ROLE
        });

        React.findDOMNode(this.refs.venderName).value = '';
        React.findDOMNode(this.refs.venderAddress).value = '';
        React.findDOMNode(this.refs.venderService).value = '';
        return;
    }

    _close() {
        this.setState({showModal: false});
        React.unmountComponentAtNode(document.getElementById('modal_section'));
    }
}

