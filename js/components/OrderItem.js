import React from 'react';
import OrderActions from '../actions/OrderActions';

export default class OrderList extends React.Component {
    render(){
        let id=this.props.oid, name=this.props.name, description=this.props.description;

        return (
            <div className='orderItem'>
                <div className='orderItem_name'>{name}</div>
                <div className='orderItem_description'>{description}</div>
                <div className='orderItem_operations'>
                    <a className='orderItem_red_btn' onClick={()=>this._deleteOrder(id)} href='javascript:;'>删除</a>
                    <a className='orderItem_red_btn' onClick={()=>this._rejectOrder(id)} href='javascript:;'>拒绝订单</a>
                    <a className='orderItem_btn' onClick={()=>this._confirmOrder(id)} href='javascript:;'>确认完成</a>
                    <a className='orderItem_btn' onClick={()=>this._completeOrder(id)} href='javascript:;'>完成订单</a>
                    <a className='orderItem_btn' onClick={()=>this._acceptOrder(id)} href='javascript:;'>接受订单</a>
                    <a className='orderItem_btn' href={'orderDetail.html?id='+id} target='_blank'>查看详情</a>
                </div>
            </div>
        );
    }

    _deleteOrder(id){
        console.log('Delete order: '+id);
        OrderActions.deleteOrder(id);
    }

    _rejectOrder(id){
        console.log('Reject order: '+id);
    }

    _confirmOrder(id){
        console.log('Confirm order: '+id);
    }

    _completeOrder(id){
        console.log('Complete order: '+id);
    }

    _acceptOrder(id){
        console.log('Accept order: '+id);
    }
}