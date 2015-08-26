import React from 'react';

import OrderItem from './OrderItem';

export default class OrderList extends React.Component {
    render() {
        let orderList_data=[{id:1, name:"中文1", description:"asdfasdf"},{id:2, name:"订单名称", description:"asdfasdf"},{id:3, name:"test33", description:"asdfasdf"},{id:4, name:"test44", description:"asdfasdf"}];

        let orderItems=[];

        for(let order of orderList_data){
            orderItems.push(<OrderItem oid={order.id} description={order.description} name={order.name} />);
        }

        return (
            <div className="orderList">
                {orderItems}
            </div>
        );
    }
}