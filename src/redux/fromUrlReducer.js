import { AXIOSED_TO_URL, AXIOSED_SUCCEEDED, AXIOS_FAILED } from "./sagas";

const initState = {
    products: {
        men: [],
        women: [],
    },
    isLoading: false,// для отслеживания хода запроса
    isError: false, // для отслеживания ошибки запроса
}

function fromUrlReducer (state=initState, action) {
    switch (action.type) {
        case AXIOSED_TO_URL: {
            let newState = {...state, isLoading: true};
            return newState;
        }

        case AXIOS_FAILED: {
            let newState = {...state, isError: true};
            return newState;
        }

        case AXIOSED_SUCCEEDED: {
            let newState = {...state, 
                isLoading: false,
                isError: false,
                products: {
                    men: [...action.productsFromUrl.men],
                    women: [...action.productsFromUrl.women]
                }
            }
            return newState;
        }
    
        default:
            return state;
    }
}

export default fromUrlReducer;