import React from 'react';
import UserConstants from '../constants/UserConstants';

export default class OrderMenu extends React.Component {

    render() {
        return (
            <div className='orderMenuBar'>
                <div className='menuGroup'>
                    <a className='menuItem' href={ this.props.role==UserConstants.CUSTOMER_ROLE ? '/customerOrder.html' : '/venderOrder.html' }>订单管理</a>
                    { this.props.role==UserConstants.CUSTOMER_ROLE ? (<a className='menuItem' href='/newOrder.html'>创建订单</a>) : '' }
                    <a className='menuItem personInfo'><span className="glyphicon glyphicon-user"></span></a>
                </div>
            </div>
        );
    }
}