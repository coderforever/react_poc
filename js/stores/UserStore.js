import AppDispatcher from '../dispatchers/AppDispatcher';
import {EventEmitter} from 'events';
import UserConstants from '../constants/UserConstants';
import assign from 'object-assign';
import $ from 'jquery';

const CHANGE_EVENT = 'change';

let UserStore = assign({}, EventEmitter.prototype, {

    emitChange(...events) {
        this.emit(CHANGE_EVENT, ...events);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function (action) {
    let data = action.actionData, role, url;

    switch (action.actionType) {
        case UserConstants.LOGIN:
            role = data.role;
            // just for test
            if (role == UserConstants.SYSADMIN_ROLE) {
                url = '/login/admin';
                //$.post(url, data, function (result) {
                //    UserStore.emitChange(result.code, result.token);
                //});
                UserStore.emitChange('SUCCESS', '123', 'admin');
            } else {
                url = '/login/' + role;
                $.post(url, data, function (result) {
                    UserStore.emitChange(result.code, result.token);
                });
            }
            break;

        case UserConstants.REGISTER:
            role = data.userType;
            url = '/register/user';
            if (role == UserConstants.VENDER_ROLE) {
                url = '/admin/register/vender';
            }
            $.post(url, data, function (result) {
                UserStore.emitChange(result.code);
            });
            break;

        case UserConstants.ADD_VENDER:
            url = '/admin/vender/add';
            $.post(url, data, function (result) {
                UserStore.emitChange(result.code);
            });
            break;

        default:
            break;
    }
});

export default UserStore;