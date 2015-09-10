import React from 'react';
import { Router, Route } from 'react-router';
import CustomerOrderListApp from '../apps/CustomerOrderListApp';
import CustomerOrderDetailApp from '../apps/CustomerOrderDetailApp';

export default class CustomerOrderRouter extends React.Component {

    render() {
        const { history } = this.props;
        return (
            <Router history={history}>
                <Route name='list' path='/customerOrder.html' component={CustomerOrderListApp}/>
                <Route name='detail' path='/detail/id/:id' component={CustomerOrderDetailApp}/>
            </Router>
        );
    }
}
