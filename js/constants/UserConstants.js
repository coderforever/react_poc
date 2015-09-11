let UserConstants={
    CUSTOMER_ROLE: 'user',
    VENDER_ROLE: 'vender',
    ADMIN_ROLE: 'admin',
    LOGIN: 'login',
    SUCCESS: 'SUCCESS',
    ADDRESS_LENGTH_LIMIT: 30,
    REGISTER: 'register',
    CUSTOMER_LOGIN_URL: 'customerLogin.html',
    VENDER_LOGIN_URL: 'venderLogin.html',
    LOGIN_SUCCESS_URL:{
        user: 'customerOrder.html',
        vender: 'venderOrder.html'
    }
};

export default UserConstants;