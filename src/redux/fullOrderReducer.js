import { AXIOSED_FULL_ORDER, AXIOS_FULL_ORDER_SUCCESS, AXIOS_FULL_ORDER_FAIL } from '../redux/confirmOrderSaga';

const initState = {
    success: null,
    isLoading: false,
    isError: false,
    result: null
}

function fullOrderReducer(state = initState, action) {
    switch (action.type) {
        case AXIOSED_FULL_ORDER: {
            let newState = {...state, isLoading: true, success: null, result: null};
            return newState
        }

        case AXIOS_FULL_ORDER_SUCCESS: {
            let newState = {...state, success: true, isLoading: false, result: action.result}; 
            return newState
        }

        case AXIOS_FULL_ORDER_FAIL: {
            let newState = {...state, success: false, isError: true, isLoading: false, result: action.result}; 
            return newState
        }

        case 'CLEAR_SUCCESS_STATUS': {
            let newState = {...state, success: null};
            return newState;
        }
    
        default:
            return state;
    }
}

export default fullOrderReducer;