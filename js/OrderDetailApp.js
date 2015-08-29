import React from 'react';

import OrderDetail from './components/OrderDetail';

import OrderMenu from './components/OrderMenu';

React.render(<OrderMenu />, document.getElementById('menu_bar'));

React.render(<OrderDetail />, document.getElementById('detail_panel'));