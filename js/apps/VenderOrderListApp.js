import React from 'react';
import OrderList from './../components/OrderList';
import OrderMenu from './../components/OrderMenu';
import UserConstants from './../constants/UserConstants';
import PermissionCheck from './../PermissionCheck';

PermissionCheck.loginCheck(UserConstants.VENDER_LOGIN_URL);

export default class VenderOrderListApp {
    render() {
        return (
            <div>
                <OrderMenu role={UserConstants.VENDER_ROLE}/>
                <OrderList role={UserConstants.VENDER_ROLE}/>
            </div>
        );
    }
}
