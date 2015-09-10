import React from 'react';
import { Link } from 'react-router';
import UserConstants from '../constants/UserConstants';

export default class OrderMenu extends React.Component {

    render() {
        return (
            <div className='orderMenuBar'>
                <div className='menuGroup'>
                    <Link className='menuItem' to={'/'+this.props.role+'/order/list'}>订单管理</Link>
                    { this.props.role == UserConstants.CUSTOMER_ROLE ? (
                        <Link className='menuItem' to='/customer/order/new'>创建订单</Link>) : '' }
                    <Link className='menuItem personInfo' to={'/'+this.props.role+'/order/list'}><span className="glyphicon glyphicon-user"></span></Link>
                </div>
            </div>
        );
    }
}