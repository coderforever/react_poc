import React from 'react';
import { Router, Route } from 'react-router';
import CustomerOrderListApp from '../apps/CustomerOrderListApp';
import CustomerOrderDetailApp from '../apps/CustomerOrderDetailApp';
import NewOrderApp from '../apps/NewOrderApp';

export default class CustomerOrderRouter extends React.Component {

    render() {
        const { history } = this.props;
        return (
            <Router history={history}>
                <Route name='html' path='/customerOrder.html' component={CustomerOrderListApp}/>
                <Route name='root' path='/' component={CustomerOrderListApp}/>
                <Route name='customerOrderList' path='/customer/order/list' component={CustomerOrderListApp}/>
                <Route name='customerOrderDetail' path='/customer/order/detail/id/:id'
                       component={CustomerOrderDetailApp}/>
                <Route name='newOrder' path='/customer/order/new' component={NewOrderApp}/>

            </Router>
        );
    }
}
