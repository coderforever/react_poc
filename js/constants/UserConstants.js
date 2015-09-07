let UserConstants={
    CUSTOMER_ROLE: 'user',
    VENDER_ROLE: 'vender',
    ADMIN_ROLE: 'admin',
    LOGIN: 'login',
    SUCCESS: 'success',
    FAILED: 'failed',
    ADDRESS_LENGTH_LIMIT: 30,
    REGISTER: 'register',
    CUSTOMER_LOGIN_URL: 'customerLogin.html',
    VENDER_LOGIN_URL: 'venderLogin.html',
    LOGIN_SUCCESS_URL:{
        user: 'customerOrderList.html',
        vender: 'venderOrderList.html'
    }
};

export default UserConstants;