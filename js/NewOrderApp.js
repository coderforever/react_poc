import React from 'react';
import NewOrder from './components/NewOrder';
import OrderMenu from './components/OrderMenu';
import LogoFooter from './components/LogoFooter';

React.render(<OrderMenu />, document.getElementById('menu_bar'));
React.render(<NewOrder />, document.getElementById('new_order_panel'));
React.render(<LogoFooter />, document.getElementById('logo-footer'));
