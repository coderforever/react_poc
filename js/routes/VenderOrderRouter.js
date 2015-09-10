import React from 'react';
import { Router, Route } from 'react-router';
import VenderOrderListApp from '../apps/VenderOrderListApp';
import VenderOrderDetailApp from '../apps/VenderOrderDetailApp.js';

export default class VenderOrderRouter extends React.Component {

    render() {
        const { history } = this.props;
        return (
            <Router history={history}>
                <Route name='list' path='/venderOrder.html' component={VenderOrderListApp}/>
                <Route name='detail' path='/detail/id/:id' component={VenderOrderDetailApp}/>
            </Router>
        );
    }
}
