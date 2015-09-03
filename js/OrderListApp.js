import React from 'react';

import OrderList from './components/OrderList';

import OrderMenu from './components/OrderMenu';

import LogoFooter from './components/LogoFooter';

React.render(<OrderMenu />, document.getElementById('menu_bar'));

React.render(<OrderList />, document.getElementById('list_panel'));

React.render(<LogoFooter />, document.getElementById('logo-footer'));
