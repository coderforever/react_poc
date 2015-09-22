/**
 * Created by tangl9 on 2015-09-22.
 */
import React from 'react';
import {Modal, Button, Input} from 'react-bootstrap';

export default class ModalTmpl extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            venderName: '',
            venderAddress: ''
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
                    <Modal.Body>
                        <h4>商户名称</h4>

                        <Input type='text' value={this.state.venderName} placeholder='请输入商户名称'
                               onChange={this._venderNameInputChange.bind(this)}/>

                        <h4>商户地址</h4>

                        <Input type="textarea" value={this.state.venderAddress} placeholder="请输入商户地址"
                               onChange={this._venderAddressInputChange.bind(this)}/>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="success" onClick={this._registerVender.bind(this)}>注册</Button>
                        <Button onClick={this._close.bind(this)}>关闭</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

    _venderNameInputChange(event) {
        this.setState({
            venderName: event.target.value
        })
    }

    _venderAddressInputChange(event) {
        this.setState({
            venderAddress: event.target.value
        })
    }

    _registerVender() {
        console.log(`name : ${this.state.venderName}, address : ${this.state.venderAddress}`);
    }

    _close() {
        this.setState({showModal: false});
        React.unmountComponentAtNode(document.getElementById('modal_section'));
    }
}

