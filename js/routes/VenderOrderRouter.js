import React from 'react';
import { Router, Route } from 'react-router';
import VenderOrderListApp from '../apps/VenderOrderListApp';
import VenderOrderDetailApp from '../apps/VenderOrderDetailApp.js';

export default class VenderOrderRouter extends React.Component {

    render() {
        const { history } = this.props;
        return (
            <Router history={history}>
                <Route name='html' path='/venderOrder.html' component={VenderOrderListApp}/>
                <Route name='root' path='/' component={VenderOrderListApp}/>
                <Route name='venderOrderList' path='/vender/order/list' component={VenderOrderListApp}/>
                <Route name='venderOrderDetail' path='/vender/order/detail/id/:id' component={VenderOrderDetailApp}/>
            </Router>
        );
    }
}
