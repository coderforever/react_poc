import Dispatcher from 'flux';
import EventEmitter from 'events';
import OrderConstants from '../constants/OrderConstants';

const CHANGE_EVENT="change";

let OrderStore = assign({}, EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

Dispatcher.register(function(action) {

    switch(action.actionType) {
        case OrderConstants.CREATE_ORDER:
            console.log("Store: "+OrderConstants.CREATE_ORDER);
            OrderStore.emitChange();
            break;

        default:
            break;
    }
});

export {OrderStore};