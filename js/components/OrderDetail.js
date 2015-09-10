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
                    <a className='red_btn' onClick={()=>this._deleteOrder(id)} href='javascript:;'>删除</a>
                    <a className='red_btn' onClick={()=>this._rejectOrder(id)} href='javascript:;'>拒绝订单</a>
                    <a className='normal_btn' onClick={()=>this._confirmOrder(id)} href='javascript:;'>确认完成</a>
                    <a className='normal_btn' onClick={()=>this._completeOrder(id)} href='javascript:;'>完成订单</a>
                    <a className='normal_btn' onClick={()=>this._acceptOrder(id)} href='javascript:;'>接受订单</a>
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

    _deleteOrder(id) {
        console.log('Delete order: ' + id);
        OrderActions.deleteOrder(id);
    }

    _rejectOrder(id) {
        console.log('Reject order: ' + id);
    }

    _confirmOrder(id) {
        console.log('Confirm order: ' + id);
    }

    _completeOrder(id) {
        console.log('Complete order: ' + id);
    }

    _acceptOrder(id) {
        console.log('Accept order: ' + id);
    }
}