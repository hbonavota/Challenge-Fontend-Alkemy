const initialState = {
    items: []
}

function rootReducer(state = initialState, action){
    if(action.type){
        return {
            ...state
        };
    }
    return state;
}

export default rootReducer;