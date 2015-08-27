import AppDispatcher from '../dispatchers/AppDispatcher';
import OrderConstants from '../constants/OrderConstants';

let OrderActions = {
    createOrder(order){
        console.log("Action: create");
        AppDispatcher.dispatch({
            actionType: OrderConstants.CREATE_ORDER
        });
    }
}

export default OrderActions;