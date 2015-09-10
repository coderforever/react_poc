import React from 'react';
import { createHistory } from 'history';
import CustomerOrderRouter from './routes/CustomerOrderRouter';

const history = createHistory();
React.render(<CustomerOrderRouter history={history}/>, document.getElementById('view-router'));
