
const initState = {
    delivery: {},
    payment: {}
}

function delInfoReducer(state = initState, action) {
    switch (action.type) {
       
        case 'ADD_DEL_INFO': {
            let newState = {...state,
                delivery: action.infoData
            };
            return newState;
        }
        
        case 'ADD_PAY_INFO': {
            let newState = {...state,
                payment: action.infoData
            };
            return newState;
        }

        default:
            return state;
    }
}

export default delInfoReducer;