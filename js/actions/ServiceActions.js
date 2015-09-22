import AppDispatcher from '../dispatchers/AppDispatcher';
import ServiceConstants from '../constants/ServiceConstants';

let ServiceActions = {

    addService(service){
        console.log('Action : add service');
        AppDispatcher.dispatch({
            actionType: ServiceConstants.CREATE_SERVICE,
            actionData: service
        });
    },

    deleteService(service){
        console.log('Action : delete service');
        AppDispatcher.dispatch({
            actionType: ServiceConstants.DELETE_SERVICE,
            actionData: service
        });
    }
}

export default ServiceActions;