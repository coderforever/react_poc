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

    deleteOrder(item_id){
        console.log('Action: delete');
        AppDispatcher.dispatch({
            actionType: OrderConstants.DELETE_ORDER,
            actionData: item_id
        });
    }
}

export default OrderActions;