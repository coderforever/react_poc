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

    deleteOrder(id){
        console.log('Action: delete');
        AppDispatcher.dispatch({
            actionType: OrderConstants.DELETE_ORDER,
            actionData: id
        });
    }
}

export default OrderActions;