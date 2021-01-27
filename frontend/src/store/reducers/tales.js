// Action creators
export const taleAdded = (tale) => {
    return { type: 'RECEIVE_TALE', tale}
}

export const receiveTales = (tales) => {
    return { type: 'RECEIVE_TALES', tales}
}

// Reducers
const initialState = []
export const talesReducer = (state={}, action) => {
    let newState = Object.assign({}, state)
    switch(action.type) {
        case 'RECEIVE_TALE':
            return Object.assign(newState, {
                [action.tale.id]: action.tale,
            });
        case 'RECEIVE_TALES':
            let nextState = {}
            // console.log("THIS IS ACTION.TALES", action.tales)
            action.tales.forEach((tale) => (nextState[tale.id] = tale))
            return Object.assign(newState, nextState)

        default:
            return state
    }
}