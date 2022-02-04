const shelfReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ITEM':
            return action.payload;
    }
    return state;
}

export default shelfReducer;