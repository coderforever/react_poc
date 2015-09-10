import React from 'react';
import { createHistory } from 'history';
import CustomerOrderRouter from './routes/CustomerOrderRouter';
import OrderMenu from './components/OrderMenu';
import UserConstants from './constants/UserConstants';

const history = createHistory();
React.render(<CustomerOrderRouter history={history}/>, document.getElementById('view-router'));
