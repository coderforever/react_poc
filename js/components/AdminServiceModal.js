/**
 * Created by tangl9 on 2015-09-22.
 */
import React from 'react';
import {Modal, Button, Input} from 'react-bootstrap';
import ServiceActions from '../actions/ServiceActions';

export default class AdminServiceModal extends React.Component {
    constructor() {
        super();
        this._handleSubmit = this._handleSubmit.bind(this);
        this.state = {
            showModal: false,
            name:'',
            description:'',
            venderID: ''
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
                            <h4>名称</h4>

                            <input type='text' className='form-control' placeholder='请输入名称' ref='name'/>

                            <h4>描述</h4>

                            <input type="text" className='form-control' placeholder="请输入描述" ref='description'/>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button bsStyle="success" type='submit'>保存</Button>
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
        var description = React.findDOMNode(this.refs.description).value.trim();
        if (!name || !description) {
            return;
        }

        console.log(`${name}, ${description}`);
        ServiceActions.addService({
            name: name,
            description: description,
            venderID:''
        });

        return;
    }

    _close() {
        this.setState({showModal: false});
        React.unmountComponentAtNode(document.getElementById('modal_section'));
    }
}

