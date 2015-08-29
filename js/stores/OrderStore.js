import AppDispatcher from '../dispatchers/AppDispatcher';
import {EventEmitter} from 'events';
import OrderConstants from '../constants/OrderConstants';
import assign from 'object-assign';

const CHANGE_EVENT='change';

let OrderStore = assign({}, EventEmitter.prototype, {
    listPage(page, size){
        //TODO: list a page of items
        return {
            page: page,
            count: 10,
            data: [{id:1, name:'中文1', description:'asdfasdf'},{id:2, name:'订单名称', description:'asdfasdf'},{id:3, name:'test33', description:'asdfasdf'},{id:4, name:'test44', description:'asdfasdf'}]
       };
    },

    getDetail(id){
        return {id:1, name:'订单名称订单名称', description:'订单描述信息'};
    },

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
            console.log('Store: '+OrderConstants.CREATE_ORDER);
            // TODO: insert data
            OrderStore.emitChange();
            break;

        case OrderConstants.DELETE_ORDER:
            console.log('Store: '+OrderConstants.DELETE_ORDER);
            // TODO: delete data
            OrderStore.emitChange();
            break;

        default:
            break;
    }
});

export default OrderStore;