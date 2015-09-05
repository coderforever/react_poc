import AppDispatcher from '../dispatchers/AppDispatcher';
import UserConstants from '../constants/UserConstants';

let UserActions = {
    login(user){
        console.log('Action: login user');
        AppDispatcher.dispatch({
            actionType: UserConstants.LOGIN,
            actionData: user
        });
    }
}

export default UserActions;