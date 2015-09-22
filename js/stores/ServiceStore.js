import AppDispatcher from '../dispatchers/AppDispatcher';
import {EventEmitter} from 'events';
import Codes from '../constants/Codes';
import ServiceConstants from '../constants/ServiceConstants';
import assign from 'object-assign';
import $ from 'jquery';

const CHANGE_EVENT = 'change';

let ServiceStore = assign({}, EventEmitter.prototype, {
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
    let service = action.actionData;

    switch (action.actionType) {
        case ServiceConstants.CREATE_SERVICE:
            console.log('Store: ' + ServiceConstants.CREATE_SERVICE);
            let url = '/admin/service/add';
            $.post(url, service, function (result) {
                ServiceStore.emitChange(result.code);
            });
            break;

        case ServiceConstants.DELETE_SERVICE:
            console.log('Store: ' + ServiceConstants.DELETE_SERVICE);
            // TODO: delete data
            ServiceStore.emitChange();
            break;

        default:
            break;
    }
});

export default ServiceStore;