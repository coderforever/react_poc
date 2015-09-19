import AppDispatcher from '../dispatchers/AppDispatcher';
import {EventEmitter} from 'events';
import OrderConstants from '../constants/OrderConstants';
import assign from 'object-assign';
import $ from 'jquery';

const CHANGE_EVENT='change';

let OrderStore = assign({}, EventEmitter.prototype, {
    listOrders(role, page, size){
        //TODO: list a page of items
        return {
            page: page,
            count: 10,
            data: [{id:1, name:'中文1', description:'asdfasdf'},{id:2, name:'订单名称', description:'asdfasdf'},{id:3, name:'test33', description:'asdfasdf'},{id:4, name:'test44', description:'asdfasdf'}]
       };
    },

    getOrder(id){
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
    let order = action.actionData;

    switch(action.actionType) {
        case OrderConstants.CREATE_ORDER:
            console.log('Store: '+OrderConstants.CREATE_ORDER);
            let url='/user/order/place';
            $.post(url, order, function(result){
                OrderStore.emitChange(result.code, result.token);

            })
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