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
        console.log("customer order list render");

        let orderItems=[], role=this.props.role, store=OrderStore.listOrders(role, this.state.page, this.state.size), orderData=store.data, page=store.page, count=store.count;

        if(orderData.length==0){
            orderItems.push(<div className='error orderItem'>没有订单数据</div>)
        }
        else{
            for(let i=0; i<orderData.length;i++){
                let order=orderData[i];
                orderItems.push(<OrderItem role={role} key={order.id} id={order.id} name={order.service} createTime={order.createTime} vender={order.vender} user={order.user} status={order.process}/>);
            }
        }

        return (
            <div className='orderList'>
                {orderItems}
                { count>1 ? <OrderPaginator page={page} count={count} onPageSelect={this._onPageSelect.bind(this)} /> : ''}
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