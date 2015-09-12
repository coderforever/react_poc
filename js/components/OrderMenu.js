import React from 'react';
import UserConstants from '../constants/UserConstants';

export default class OrderMenu extends React.Component {

    render() {
        let currentIndex=this.props.currentIndex;

        return (
            <div className='orderMenuBar'>
                <div className='menuGroup'>
                    <a className={'menuItem'+(currentIndex=='0'?' current':'')} href={ this.props.role==UserConstants.CUSTOMER_ROLE ? '/customerOrderList.html' : '/venderOrderList.html' }>订单管理</a>
                    { this.props.role==UserConstants.CUSTOMER_ROLE ? (<a className={'menuItem'+(currentIndex=='1'?' current':'')} href='/newOrder.html'>创建订单</a>) : '' }
                    <a className='menuItem personInfo'><span className="glyphicon glyphicon-user"></span></a>
                </div>
            </div>
        );
    }
}