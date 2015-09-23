import AppDispatcher from '../dispatchers/AppDispatcher';
import OrderConstants from '../constants/OrderConstants';

let OrderActions = {
    createOrder(order){
        console.log('Action: create');
        AppDispatcher.dispatch({
            actionType: OrderConstants.CREATE_ORDER,
            actionData: order
        });
    },

    updateOrder(param){
        console.log('Action: update');
        AppDispatcher.dispatch({
            actionType: OrderConstants.UPDATE_ORDER,
            actionData: param
        });
    }
}

export default OrderActions;