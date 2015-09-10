import React from 'react';
import OrderList from './../components/OrderList';
import OrderMenu from './../components/OrderMenu';
import UserConstants from './../constants/UserConstants';
import PermissionCheck from './../PermissionCheck';

PermissionCheck.loginCheck(UserConstants.CUSTOMER_LOGIN_URL);

export default class CustomerOrderListApp {
    render() {
        return (
            <div>
                <OrderMenu role={UserConstants.CUSTOMER_ROLE}/>
                <OrderList role={UserConstants.CUSTOMER_ROLE}/>
            </div>
        );
    }
}
