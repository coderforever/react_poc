import React from 'react';
import OrderDetail from './../components/OrderDetail';
import OrderMenu from './../components/OrderMenu';
import UserConstants from './../constants/UserConstants';
import PermissionCheck from './../PermissionCheck';

PermissionCheck.loginCheck(UserConstants.VENDER_LOGIN_URL);

export default class VenderOrderDetailApp {
    render() {
        return (
            <div>
                <OrderMenu role={UserConstants.VENDER_ROLE}/>
                <OrderDetail />
            </div>
        );
    }
}
