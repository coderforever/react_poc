import AppDispatcher from '../dispatchers/AppDispatcher';
import {EventEmitter} from 'events';
import OrderConstants from '../constants/OrderConstants';
import assign from 'object-assign';

const CHANGE_EVENT="change";

let OrderStore = assign({}, EventEmitter.prototype, {
    emitChange() {
        this.emit(CHANGE_EVENT);
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
        case OrderConstants.CREATE_ORDER:
            console.log("Store: "+OrderConstants.CREATE_ORDER);
            OrderStore.emitChange();
            break;

        default:
            break;
    }
});

export default OrderStore;