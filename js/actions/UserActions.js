import AppDispatcher from '../dispatchers/AppDispatcher';
import UserConstants from '../constants/UserConstants';

let UserActions = {
    login(user){
        console.log('Action: login user');
        AppDispatcher.dispatch({
            actionType: UserConstants.LOGIN,
            actionData: user
        });
    },

    register(user){
        console.log('Action: register user');

        AppDispatcher.dispatch({
            actionType: UserConstants.REGISTER,
            actionData: user
        });
    },

    addVender(vender){
        console.log('Action : add vender');
        AppDispatcher.dispatch({
            actionType:UserConstants.ADD_VENDER,
            actionData:vender
        });
    }
}

export default UserActions;