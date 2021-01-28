import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { fetchTale } from "../../utils/apiUtil"

const ViewTale = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    // const tale = useSelector((state) => state.tale.list.map(taleId => state.tale[taleId]))

    useEffect(() => {
        dispatch(fetchTale())
    }, [dispatch])
    // TODO: access the state and render the tale to the page

    // if(!tale) {
    //     history.push("/")
    // }

    return (
        <>
            <h1>This is where a single tale will render</h1>
        </>
    )
}

export default ViewTale