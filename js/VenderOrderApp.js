import React from 'react';
import { createHistory } from 'history';
import VenderOrderRouter from './routes/VenderOrderRouter';

const history = createHistory();
React.render(<VenderOrderRouter history={history}/>, document.getElementById('view-router'));
