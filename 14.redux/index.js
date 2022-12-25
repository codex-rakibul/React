// state - count: 0
// action -increment, decrement, reset
// reducer
// store
const {createStore} = require("redux");

// CONSTANTs
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const RESET = "RESET";
const ADD_USER = "ADD_USER";

const initialState = {
    users:["Sony"],
    count: 0,
};


//ACTIONS
const incrementAction = () => {
    return {
        type: INCREMENT,
    };
};
const decrementAction = () => {
    return {
        type: DECREMENT,
    };
};
const resetAction = () => {
    return {
        type: RESET,
    };
};
const incrementByValue = (value) => {
    return{
        type: INCREMENT_BY_VALUE,
        payload: value,
    }
};
const addUser = (user) => {
    return{
        type:ADD_USER,
        payload:user,
    };
};

//CREATING REDUCER
const counterReducer = (state= initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1,
            };
        case INCREMENT_BY_VALUE:
            return{
                ...state,
                count: state.count + action.payload,
            };
        
        case ADD_USER:
            return{
                users:[...state.users,action.payload],
                count: state.count + 1,
            }

        case DECREMENT:
            return{
                ...state,
                count: state.count - 1,
            };

        case RESET:
            return{
                ...state,
                count: 0,
            };
    
        default:
            state;
    }

};

// store

const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState());
});
// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(decrementAction());
// store.dispatch(incrementAction());
// store.dispatch(incrementAction());
// store.dispatch(decrementAction());
// store.dispatch(incrementByValue(10));
// store.dispatch(incrementByValue(55));
store.dispatch(addUser("Habib"));