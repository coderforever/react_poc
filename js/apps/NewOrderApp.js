import React from 'react';
import NewOrder from '../components/NewOrder';
import OrderMenu from '../components/OrderMenu';
import LogoFooter from '../components/LogoFooter';
import UserConstants from '../constants/UserConstants';
import PermissionCheck from '../PermissionCheck';

PermissionCheck.loginCheck(UserConstants.CUSTOMER_LOGIN_URL);

export default class NewOrderApp {
    render() {
        return (
            <div>
                <OrderMenu role={UserConstants.CUSTOMER_ROLE}/>
                <NewOrder/>
            </div>
        );
    }
}
