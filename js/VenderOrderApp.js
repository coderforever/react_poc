import React from 'react';
import { createHistory } from 'history';
import VenderOrderRouter from './routes/VenderOrderRouter';
import OrderMenu from './components/OrderMenu';
import UserConstants from './constants/UserConstants';

const history = createHistory();
React.render(<VenderOrderRouter history={history}/>, document.getElementById('view-router'));
