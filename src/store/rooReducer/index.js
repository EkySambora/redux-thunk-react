import { actionsType } from "../actions";

const rootReducer = (state = { counter: 0 }, action) => {
    if(action.type === actionsType.INCREMENT_COUNTER) {
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if(action.type === actionsType.DECREMENT_COUNTER){
        return{
            ...state,
            counter: state.counter - 1
        }
    }
    return state;
}

export default rootReducer;