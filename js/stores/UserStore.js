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

    switch(action.actionType) {
        case UserConstants.LOGIN:
            let user=action.actionData, role=user.role, name=user.name, password=user.password, url='/'+role+'/login';
            $.post(url, {name:name,password:password}, function(result){
                if(result=="success"){
                    UserStore.emitChange(UserConstants.LOGIN_SUCCESS);
                }
                else{
                    UserStore.emitChange(UserConstants.LOGIN_FAILED);
                }
            });
            break;

        default:
            break;
    }
});

export default UserStore;