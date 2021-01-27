import { receiveTales } from "../store/reducers/tales"
import { fetch } from "../store/csrf"




export const fetchTales = () => async (dispatch) => {
    const response = await fetch('/api/tales')
    if(!response.ok) throw response
    const { tales } = await response.data
    // console.log("TALES", tales)
    dispatch(receiveTales(tales))
    return tales
}