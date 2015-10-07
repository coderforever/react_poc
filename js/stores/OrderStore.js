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
        let orders=[], limit=size, offset=(page-1)*limit, count=1;
        $.ajax({
            type: 'get',
            url: '/'+role+'/orders?token='+localStorage['token']+'&limit='+limit+'&offset='+offset+'&ordering=DESC',
            async: false,
            success: function(data){
                if(data.code==Codes.SUCCESS){
                    orders=data.orders;
                    count=Math.ceil(data.total/limit);
                }
                else if(data.code.indexOf("_TOKEN_")!=-1){
                    _redirectToLogin(role);
                }
            }
        });

        return {
            page: page,
            count: count,
            data: orders
       };
    },

    getOrder(id, role){
        let order=null;
        $.ajax({
            type: 'get',
            url: '/'+role+'/order/query?token='+localStorage['token']+'&orderID='+id,
            async: false,
            success: function(data){
                if(data.code==Codes.SUCCESS){
                    order=data.order;
                }
                else if(data.code.indexOf("_TOKEN_")!=-1){
                    _redirectToLogin(role);
                }
            }
        });
        return order;
    },

    getOrderHistory(id, role){
        let histories=[];
        $.ajax({
            type: 'get',
            url: '/'+role+'/order/history?token='+localStorage['token']+'&orderID='+id,
            async: false,
            success: function(data){
                if(data.code==Codes.SUCCESS){
                    histories=data.history;
                }
                else if(data.code.indexOf("_TOKEN_")!=-1){
                    _redirectToLogin(role);
                }
            }
        });
        return histories;
    },

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
    let actionData = action.actionData, url;

    switch(action.actionType) {
        case OrderConstants.CREATE_ORDER:
            console.log('Store: '+OrderConstants.CREATE_ORDER);
            url='/user/order/place';
            $.post(url, actionData, function(result){
                if(result.code.indexOf("_TOKEN_")!=-1){
                    _redirectToLogin(role);
                }
                else{
                    OrderStore.emitChange(result.code);
                }
            });
            break;

        case OrderConstants.UPDATE_ORDER:
            console.log('Store: '+OrderConstants.UPDATE_ORDER);
            url='/'+actionData.role+'/order/update';
            $.post(url, actionData, function(result){
                if(result.code.indexOf("_TOKEN_")!=-1){
                    _redirectToLogin(role);
                }
                else{
                    OrderStore.emitChange(result.code);
                }
            });
            break;

        default:
            break;
    }
});

export default OrderStore;