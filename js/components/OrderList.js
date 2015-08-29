import React from 'react';
import OrderItem from './OrderItem';
import OrderPaginator from './OrderPaginator';
import OrderStore from '../stores/OrderStore';
import OrderConstants from '../constants/OrderConstants';

export default class OrderList extends React.Component {

    constructor(){
        super();
        this.state={
            page: OrderConstants.PAGE_NO,
            size: OrderConstants.PAGE_SIZE,
            editable: true
        };
    }

    componentDidMount() {
        OrderStore.addChangeListener(()=>this._onChange());
    }

    componentWillUnmount() {
        OrderStore.removeChangeListener(()=>this._onChange());
    }

    render() {
        console.log("render");

        let orderItems=[], store=OrderStore.listPage(this.state.page, this.state.size), orderData=store.data, page=store.page, count=store.count;

        for(let order of orderData){
            orderItems.push(<OrderItem key={order.id} oid={order.id} description={order.description} name={order.name} />);
        }

        return (
            <div className='orderList'>
                {orderItems}
                <OrderPaginator page={page} count={count} onPageSelect={this._onPageSelect.bind(this)} />
            </div>
        );
    }

    _onChange(){
        console.log('React: store changed');
        this.setState({
            page: OrderConstants.PAGE_NO
        });
    }

    _onPageSelect(page){
        this.setState({
            page: page
        });
    }
}