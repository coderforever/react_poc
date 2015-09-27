let UserConstants={
    CUSTOMER_ROLE: 'user',
    VENDER_ROLE: 'vender',
    ADMIN_ROLE: 'admin',
    SYSADMIN_ROLE: 'sysadmin',
    LOGIN: 'login',
    ADD_VENDER:'add_vender',
    ADDRESS_LENGTH_LIMIT: 30,
    REGISTER: 'register',
    CUSTOMER_LOGIN_URL: 'customerLogin.html',
    VENDER_LOGIN_URL: 'venderLogin.html',
    SYSADMIN_LOGIN_URL: 'sysadminLogin.html',
    VENDERADMIN_LOGIN_URL: 'venderadminLogin.html',
    LOGIN_SUCCESS_URL:{
        user: 'customerEntrance.html',
        vender: 'venderOrderList.html',
        admin:'venderAdminManageVender.html',
        sysadmin:'sysManageVender.html'
    }
};

export default UserConstants;