import AppDispatcher from '../dispatchers/AppDispatcher';
import {EventEmitter} from 'events';
import UserConstants from '../constants/UserConstants';
import assign from 'object-assign';
import $ from 'jquery';

const CHANGE_EVENT='change';

let UserStore = assign({}, EventEmitter.prototype, {

    emitChange(...events) {
        this.emit(CHANGE_EVENT,...events);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    let user=action.actionData,role,url;

    switch(action.actionType) {
        case UserConstants.LOGIN:
            role=user.role;
            url='/'+role+'/login';
            $.post(url, user, function(result){
                UserStore.emitChange(result.response, result.token);
            });
            break;

        case UserConstants.REGISTER:
            role=user.userType;
            url='/'+role+'/register';
            $.post(url, user, function(result){
                UserStore.emitChange(result.response);
            });
            break;

        default:
            break;
    }
});

export default UserStore;