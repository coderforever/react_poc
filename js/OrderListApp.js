import React from 'react';

import OrderList from './components/OrderList';

import OrderMenu from './components/OrderMenu';

React.render(<OrderMenu />, document.getElementById('menu_bar'));

React.render(<OrderList />, document.getElementById('list_panel'));
