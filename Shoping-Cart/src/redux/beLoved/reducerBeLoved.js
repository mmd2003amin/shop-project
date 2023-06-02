const initialState = {
    data:[]
};

const reducerBeLoved = (state=initialState , action) => {
    switch(action.type) {

        case "save" :
            if(!state.data.find(item => item.name === action.payload.name)) {
                state.data.push({
                    ...action.payload
                })
            }
            return {
                ...state ,
                data:[...state.data]
            }

        case "remove" :
            const newDataItems = state.data.filter(item => item.name !== action.payload.name);
            return {
                ...state ,
                data:[...newDataItems]
            }
            
        default : return state
    }
};

export default reducerBeLoved;