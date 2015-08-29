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
                    <a className='orderItem_red_btn' onClick={()=>this._deleteItem(id)} href='javascript:;'>删除</a>
                    <a className='orderItem_btn' href={'orderDetail.html?id='+id}>查看详情</a>
                </div>
            </div>
        );
    }

    _deleteItem(item_id){
        console.log('Delete item: '+item_id);
        OrderActions.deleteOrder(item_id);
    }
}