

const initState = {
    prods: []
};

function prodsReducer (state=initState, action) {
   
    switch (action.type) {
        case "ADD_PROD": {
            state.prods.push({
                product: action.newProduct,
                name: action.name,
                color: action.color,
                size: action.size,
                quantity: 1
            });
            let newState = {...state, 
                prods: [...state.prods]
            }
            return newState;
        }
        case "DEL_PROD": {
            let indexToDelete = state.prods.findIndex(i => {
                return i.color === action.color && i.size === action.size && i.product.name === action.name
            });
            if (indexToDelete >= 0) state.prods.splice(+indexToDelete, 1);
            let newState = {...state, 
                prods: [...state.prods]
            }
            return newState;
        }
        case "DEL_ALL_PRODS": {
            let newState = {prods: []};
            return newState;
        }
        case "INC_QUAN": {
            let indexToChange = state.prods.findIndex(i => { //фильтр по id?
                return i.color === action.color && i.size === action.size && i.product.name === action.name
            });
            state.prods[indexToChange].quantity++;
            let newState = {...state, 
                prods: [...state.prods]
            }
            return newState;
        }
        case "DEC_QUAN": {
            let indexToChange = state.prods.findIndex(i => { //фильтр по id?
                return i.color === action.color && i.size === action.size && i.product.name === action.name
            });
            let quantity = state.prods[indexToChange].quantity;
            if (quantity >1)  state.prods[indexToChange].quantity--;
            let newState = {...state, 
                prods: [...state.prods]
            }
            return newState;
        }
        default:
            return state;
    }
}

export default prodsReducer;