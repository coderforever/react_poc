import React from 'react';
import OrderActions from '../actions/OrderActions';

export default class OrderList extends React.Component {
    render(){
        let id=this.props.oid, name=this.props.name, description=this.props.description;

        return (
            <div className="orderItem">
                <div className="orderItem_name">{name}</div>
                <div className="orderItem_description">{description}</div>
                <div className="orderItem_operations">
                    <div className="orderItem_red_btn" onClick={()=>this._deleteItem(id)}>删除</div>
                    <div className="orderItem_btn">查看详情</div>
                </div>
            </div>
        );
    }

    _deleteItem(item_id){
        console.log(item_id);
    }
}