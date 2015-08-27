import React from 'react';
import OrderActions from '../actions/OrderActions';
import OrderItem from './OrderItem';
import OrderStore from '../stores/OrderStore';

export default class OrderList extends React.Component {

    componentDidMount() {
        OrderStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        OrderStore.removeChangeListener(this._onChange);
    }

    render() {
        let orderList_data=[{id:1, name:"中文1", description:"asdfasdf"},{id:2, name:"订单名称", description:"asdfasdf"},{id:3, name:"test33", description:"asdfasdf"},{id:4, name:"test44", description:"asdfasdf"}];

        let orderItems=[];

        for(let order of orderList_data){
            orderItems.push(<OrderItem oid={order.id} description={order.description} name={order.name} />);
        }

        return (
            <div className="orderList" onClick={this._createOrder}>
                {orderItems}
            </div>
        );
    }

    _createOrder(){
        OrderActions.createOrder();
    }

    _onChange(){
        console.log("React: store changed");
    }
}