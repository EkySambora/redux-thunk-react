
const rootReducer = (state = { counter: 0 }, action) => {
    if(action.type === "INCREMENT_COUNTER") {
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if(action.type === "DECREMENT_COUNTER"){
        return{
            ...state,
            counter: state.counter - 1
        }
    }
    return state;
}

export default rootReducer;