import React from 'react';
import OrderActions from '../actions/OrderActions';
import OrderConstants from '../constants/OrderConstants';
import UserConstants from '../constants/UserConstants';
import $ from 'jquery';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import OrderStore from '../stores/OrderStore';
import Codes from '../constants/Codes';

export default class NewOrder extends React.Component {
    constructor() {
        super();
        this.state = {
            orderDescription: '',
            venderID: '',
            venderName: '请选择商铺',
            serviceID: '',
            orderDesc_validate: true,
            venderID_validate: true,
            serviceID_validate: true,
            venderMenuItems: []
        };
    }

    componentDidMount() {
        OrderStore.addChangeListener(this._onCreateOrder.bind(this));

        $.get('/venders', function (result) {
            if (result.code == Codes.SUCCESS) {
                for (let vender of result.venders) {
                    this.state.venderMenuItems.push(<MenuItem eventKey={vender.name+'#'+vender.id}>{vender.name}</MenuItem>);
                }
            }
        }.bind(this));

    }

    componentWillUnmount() {
        OrderStore.removeChangeListener(this._onCreateOrder.bind(this));
    }

    render() {
        let venderSelector = '';

        if (this.state.venderMenuItems.length > 0) {
            venderSelector = (
                <DropdownButton bsStyle={this.state.venderID_validate ? 'default':'danger'}
                                title={this.state.venderName} onSelect={this._venderChange.bind(this)}>
                    {this.state.venderMenuItems}
                </DropdownButton>
            );
        }
        return (
            <div className='create_div'>
                <form onSubmit={this._submitOrder.bind(this)}>
                    <label htmlFor='orderDesc_input' className='submit_label'>描述信息: </label><br/>
                    <textarea placeholder={'请输入描述信息（不超过'+OrderConstants.ORDER_DESC_LIMIT+'字）'}
                              value={this.state.orderDescription} id='orderDesc_input'
                              className={this.state.orderDesc_validate ? '' : 'error'}
                              onChange={this._descInputChange.bind(this)}/><br/>
                    <div>
                        {venderSelector}
                        <button type='submit' id='create_submit' className='normal_btn'>确认创建</button>
                    </div>
                </form>
            </div>
        );

    }

    _submitOrder(event) {
        // prevent form submit by default
        event.preventDefault();

        if (this.state.orderDesc_validate && this.state.venderID_validate) {
            OrderActions.createOrder({
                remark: this.state.orderDescription,
                serviceID: this.state.serviceID,
                token: localStorage['token']
            });
        }
    }

    _descInputChange(event) {
        let value = event.target.value;
        this.setState({
            orderDesc_validate: value.length <= OrderConstants.ORDER_DESC_LIMIT,
            orderDescription: value
        });
    }

    _venderChange(event, key) {
        let arr = key.split('#');
        this.setState({
            serviceID:5,
            venderID: arr[1],
            venderName: arr[0],
            venderID_validate: arr[1] != ''
        });
    }

    _onCreateOrder(code) {
        console.log(`_onCreateOrder code : ${code}`);
        if (code == Codes.SUCCESS) {
            alert('订单创建成功!');
            window.location.href = UserConstants.LOGIN_SUCCESS_URL[UserConstants.CUSTOMER_ROLE];
        } else {
            alert('订单创建失败!');
        }
    }
}