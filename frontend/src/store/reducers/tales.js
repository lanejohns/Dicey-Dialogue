// Action creators
export const taleAdded = (tale) => {
    return { type: 'RECEIVE_TALE', tale}
}

export const receiveTales = (tales) => {
    return { type: 'RECEIVE_TALES', tales}
}

export const receiveTale = (tale) => {
    return { type: 'VIEW_TALE', tale}
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
        case 'VIEW_TALE':
            let anotherState = {}
            // console.log("THIS IS ACTION.TALES", action.tales)
            // action.tale.forEach((tale) => (anotherState[tale.id] = tale))
            // return Object.assign(newState, anotherState)
            // TODO: figure out why the tale is null <------
            newState[action.tale.id] = action.tale
            return newState

        default:
            return state
    }
}