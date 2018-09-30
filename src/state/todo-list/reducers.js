import initialState from './state';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case '[TODO-LIST] Add TODO':
            return [
                ...state,
                {
                    name: action.payload.name,
                    done: false
                }
            ]

        case '[TODO-LIST] Toggle TODO': 
            return [...state]
                .map((obj, i) => ({
                    ...obj,
                    ...(i === action.payload.index) && {
                        done: action.payload.value
                    }
                }))

        default:
            return state;
    }
};

export default reducer;