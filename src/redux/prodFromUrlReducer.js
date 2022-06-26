import {AXIOSED_PRODUCT_TO_URL, AXIOSED_PRODUCT_SUCCEEDED, AXIOS_PRODUCT_FAILED} from './sagas';

const initState = {
    product: {},
    isLoading: false,// для отслеживания хода запроса
    isError: false, // для отслеживания ошибки запроса
}

function productFromUrlReducer (state=initState, action) {
    switch (action.type) {
        case AXIOSED_PRODUCT_TO_URL: {
            let newState = {...state, isLoading: true}
            return newState;
        }

        case AXIOSED_PRODUCT_SUCCEEDED: {
            let newState = {
                ...state,
                isLoading: false,
                isError: false,
                product: {...action.productFromUrl}
            }
            return newState;
        }

        case AXIOS_PRODUCT_FAILED: {
            let newState = {...state, isError: true}
            return newState;
        }
    
        default:
            return state;
    }
}

export default productFromUrlReducer;