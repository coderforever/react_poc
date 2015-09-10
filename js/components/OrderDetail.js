import React from 'react';
import { Router, Route, Link } from 'react-router';
import OrderStore from '../stores/OrderStore';

export default class OrderDetail extends React.Component {

    render() {
        let search = location.pathname, regex = /detail\/id\/(\d+)$/, results = regex.exec(search);
        if (results != null && results.length == 2) {
            let order = OrderStore.getOrder(results[1]);
            return (
                <div className='orderDetail'>
                    <div className='orderTitle'>{order.name}</div>
                    <div className='orderDesc'>{order.description}</div>
                </div>
            );
        }
        else {
            return (
                <div className='orderDetail'>
                    <div className='errorMsg'>订单详情页面的URL地址不正确！</div>
                </div>
            );
        }
    }
}