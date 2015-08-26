import Dispatcher from 'flux';
import OrderConstants from '../constants/OrderConstants';

export let OrderActions = {
    createOrder(order){
        console.log("Action: create");
        Dispatcher.dispatch({
            actionType: OrderConstants.CREATE_ORDER
        });
    }
}