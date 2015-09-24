let UserConstants={
    CUSTOMER_ROLE: 'user',
    VENDER_ROLE: 'vender',
    SYSADMIN_ROLE: 'sysadmin',
    ADMIN_ROLE: 'admin',
    LOGIN: 'login',
    ADD_VENDER:'add_vender',
    ADDRESS_LENGTH_LIMIT: 30,
    REGISTER: 'register',
    CUSTOMER_LOGIN_URL: 'customerLogin.html',
    VENDER_LOGIN_URL: 'venderLogin.html',
    SYSADMIN_LOGIN_URL: 'sysadminLogin.html',
    LOGIN_SUCCESS_URL:{
        user: 'customerEntrance.html',
        vender: 'venderOrderList.html',
        sysadmin:'manageVender.html'
    }
};

export default UserConstants;