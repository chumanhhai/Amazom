const cartReducer = (state = null, action) => {
    switch(action.type) {
        case "saveCart": return action.payload
        case "addItemToCart": {
            const newState = state.push(action.payload)
            return newState
        }
        default: return state
    }
}

export default cartReducer