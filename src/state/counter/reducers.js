import initialState from './state';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case '[COUNTER] Increment':
            return {
                ...state,
                counter: state.counter + 1
            };

        case '[COUNTER] Decrement':
            return {
                ...state,
                counter: state.counter - 1
            };

        case '[COUNTER] LoadSucceeded':
            return {
                ...state,
                counter: action.value.counter
            };

        default:
            return state;
    }
};

export default reducer;