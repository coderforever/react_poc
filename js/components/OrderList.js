import React from 'react';
import OrderItem from './OrderItem';
import OrderStore from '../stores/OrderStore';
import OrderConstants from '../constants/OrderConstants';

export default class OrderList extends React.Component {

    getInitialState(){
        console.log("get default state");
        return {
            page: OrderConstants.PAGE_NO,
            size: OrderConstants.PAGE_SIZE,
            editable: true
        };
    }

    getDefaultProps(){
       console.log("get default props");
       return {
            orderList_data: [{id:1, name:"中文1", description:"asdfasdf"},{id:2, name:"订单名称", description:"asdfasdf"},{id:3, name:"test33", description:"asdfasdf"},{id:4, name:"test44", description:"asdfasdf"}]
        };
    }

    componentDidMount() {
        OrderStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        OrderStore.removeChangeListener(this._onChange);
    }

    render() {
        let orderItems=[];

        console.log(this.props.orderList_data);

        for(let order of [{id:1, name:"中文1", description:"asdfasdf"},{id:2, name:"订单名称", description:"asdfasdf"},{id:3, name:"test33", description:"asdfasdf"},{id:4, name:"test44", description:"asdfasdf"}]){
            orderItems.push(<OrderItem oid={order.id} description={order.description} name={order.name} />);
        }

        return (
            <div className="orderList">
                {orderItems}
            </div>
        );
    }

    _onChange(){
        console.log("React: store changed");
    }
}