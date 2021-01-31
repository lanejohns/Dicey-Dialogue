const SET_COMMENTS = 'COMMENTS/setComments';
const ADD_COMMENTS = 'COMMENTS/AddComments';

export const setComments = (comments) => ({
    type: SET_COMMENTS,
    comments: comments
});

export const addComments = (comments) => ({
    type: ADD_COMMENTS, 
    comments: comments
});

export const commentReducer = (state = {}, action) =>  {
    let newState = Object.assign({}, state)
    switch(action.type) {
        case SET_COMMENTS:
            // newState[action.comments.id] = action.comments;
            action.comments.forEach(comment=>
                newState[comment.id]=comment)
            return newState;
        case ADD_COMMENTS:
            return Object.assign(newState, {
                [action.comments.id]: action.comments,
            });
        default:
            return state;
    }
}
