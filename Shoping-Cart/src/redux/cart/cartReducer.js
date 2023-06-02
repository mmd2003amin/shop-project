const initialState = {
    data : [],
    totalQuantity : 0,
    totalPrice : 0
};

const cartReducer = ( state=initialState , action ) => {

    const sumItems = item => {
        const totalQuantity = item.reduce((total , product) => total + product.quantity ,0);
        const totalPrice = item.reduce((total , product) => total + product.price * product.quantity  ,0);
        return { totalQuantity , totalPrice }
    }

    switch(action.type) {

        case "ADD-ITEM" :
            if(!state.data.find(item => item.name === action.payload.name)) {
                state.data.push({
                    ...action.payload,
                    quantity : 1
                })
            }
            return {
                ...state,
                data:[...state.data],
                ...sumItems(state.data)
            }

        case "REMOVE-ITEM" :
            const newDataItems = state.data.filter(item => item.name !== action.payload.name);
            return {
                ...state,
                data:[...newDataItems],
                totalQuantity : 0,
                ...sumItems(state.data)
            }

        case "INCREASE" :
            const findIndexI = state.data.findIndex(item => item.name === action.payload.name);
            state.data[findIndexI].quantity++;
            return {
                ...state,
                ...sumItems(state.data)
            } 

        case "DECREASE" :
            const findIndexD = state.data.findIndex(item => item.name === action.payload.name);
            state.data[findIndexD].quantity--;
            return {
                ...state,
                ...sumItems(state.data)
            } 

        case "CLEAR" :
            return {
                data : [],
                totalQuantity : 0,
                totalPrice : 0
            } 

        default : return state
    }
};

export default cartReducer;