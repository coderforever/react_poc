import AppDispatcher from '../dispatchers/AppDispatcher';
import {EventEmitter} from 'events';
import OrderConstants from '../constants/OrderConstants';
import Codes from '../constants/Codes';
import UserConstants from '../constants/UserConstants';
import assign from 'object-assign';
import $ from 'jquery';

const CHANGE_EVENT='change';

function _redirectToLogin(role){
    if(role==UserConstants.CUSTOMER_ROLE){
        location.href='customerLogin.html';
    }
    else if(role==UserConstants.VENDER_ROLE){
        location.href='venderLogin.html';
    }
}

let OrderStore = assign({}, EventEmitter.prototype, {
    listOrders(role, page, size){
        let orders=[];
        $.ajax({
            type: 'get',
            url: '/'+role+'/orders?token='+localStorage['token'],
            async: false,
            success: function(data){
                if(data.code==Codes.SUCCESS){
                    orders=data.orders;
                }
                else if(data.code==Codes.USER_TOKEN_EXPIRE){
                    _redirectToLogin(role);
                }
            }
        });

        return {
            page: page,
            count: 1,
            data: orders
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
                if(result.code==Codes.USER_TOKEN_EXPIRE){
                    _redirectToLogin(role);
                }
                else{
                    OrderStore.emitChange(result.code);
                }
            });
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