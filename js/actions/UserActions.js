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
    }
}

export default UserActions;