import { receiveTales, taleAdded } from "../store/reducers/tales"
import { fetch } from "../store/csrf"




export const fetchTales = () => async (dispatch) => {
    const response = await fetch('/api/tales')
    if(!response.ok) throw response
    const { tales } = await response.data
    // console.log("TALES", tales)
    dispatch(receiveTales(tales))
    return tales
}

export const addTale = () => async (dispatch) => {
    const response = await fetch('/api/newtale')
    if(!response.ok) throw response
    const { tale } = await response.data
    dispatch(taleAdded(tale))
} 