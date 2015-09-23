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
            serviceName: '请选择服务',
            serviceID: '',
            orderDesc_validate: true,
            venderID_validate: true,
            serviceID_validate: true,
            venderMenuItems: [{
                id: 1,
                name: 'bcd'
            }],
            serviceMenuItems: [{
                id: 1,
                name: 'abc'
            }]
        };
    }

    componentDidMount() {
        OrderStore.addChangeListener(this._onCreateOrder.bind(this));

        let venderMenuItems = [];
        let serviceMenuItems = [];
        $.get('/venders', function (result) {
            if (result.code == Codes.SUCCESS) {
                for (let vender of result.venders) {
                    venderMenuItems.push(<MenuItem eventKey={vender.name+'#'+vender.id}>{vender.name}</MenuItem>);
                }
                this.setState({
                    venderMenuItems: venderMenuItems
                });
            }
        }.bind(this));

        $.get('/services', function (result) {
            if (result.code == Codes.SUCCESS) {
                for (let service of result.services) {
                    serviceMenuItems.push(<MenuItem eventKey={service.name+'#'+service.id}>{service.name}</MenuItem>);
                }
                this.setState({
                    serviceMenuItems: serviceMenuItems
                });
            }
        }.bind(this));

    }

    componentWillUnmount() {
        OrderStore.removeChangeListener(this._onCreateOrder.bind(this));
    }

    render() {
        let venderSelector = '';
        let serviceSelector = '';

        if (this.state.venderMenuItems.length > 0) {
            venderSelector = (
                <DropdownButton id='venderSelector' bsStyle={this.state.venderID_validate ? 'default':'danger'}
                                title={this.state.venderName} onSelect={this._venderChange.bind(this)}>
                    {this.state.venderMenuItems}
                </DropdownButton>
            );
        }

        if (this.state.serviceMenuItems.length > 0) {
            serviceSelector = (
                <DropdownButton id='serviceSelector' bsStyle={this.state.serviceID_validate ? 'default':'danger'}
                                title={this.state.serviceName} onSelect={this._serviceChange.bind(this)}>
                    {this.state.serviceMenuItems}
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
                        {serviceSelector}
                        <button type='submit' id='create_submit' className='normal_btn'>确认创建</button>
                    </div>
                </form>
            </div>
        );

    }

    _submitOrder(event) {
        // prevent form submit by default
        event.preventDefault();

        if (this.state.orderDesc_validate && this.state.venderID_validate && this.state.serviceID_validate) {
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
            venderID: arr[1],
            venderName: arr[0],
            venderID_validate: arr[1] != ''
        });
    }

    _serviceChange(event, key) {
        let arr = key.split('#');
        this.setState({
            serviceID: arr[1],
            serviceName: arr[0],
            serviceID_validate: arr[1] != ''
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