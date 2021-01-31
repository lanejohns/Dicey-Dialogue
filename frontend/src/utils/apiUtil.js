import { receiveTales, taleAdded, receiveTale } from "../store/reducers/tales"
import { setComments, addComments, commentReducer} from "../store/reducers/comments"
import { fetch } from "../store/csrf"




export const fetchTales = () => async (dispatch) => {
    const response = await fetch('/api/tales')
    if(!response.ok) throw response
    const { tales } = await response.data
    // console.log("TALES", tales)
    dispatch(receiveTales(tales))
    return tales
}
export const fetchTale = (taleId) => async (dispatch) => {
    const response = await fetch(`/api/tales/${taleId}`)
    if(!response.ok) throw response
    const { tale } = await response.data
    // console.log("TALE", tale)
    dispatch(receiveTale(tale))
    return tale
}

export const addTale = (payload) => async (dispatch) => {
    const response = await fetch('/api/tales', {
        method: "POST",
        body: JSON.stringify(payload)
    })
    if(!response.ok) throw response
    const { tale } = await response.data
    dispatch(taleAdded(tale))
    return tale
} 

export const getAllComments = (id) => async (dispatch) => {
    const response = await fetch(`/api/comments/${id}`)
    if(!response.ok) throw response
    const { comments } = await response.data
    // console.log("THIS SHOULD BE A COMMENT", comments)
    dispatch(setComments(comments))
    return comments
}

export const addComment = (payload) => async (dispatch) => {
    const response = await fetch('/api/comments', {
        method: "POST",
        body: JSON.stringify(payload)
    })
    if(!response.ok) throw response
    const { comment } = await response.data
    console.log(comment)
    dispatch(addComments(comment))
}