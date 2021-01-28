import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { fetchTale } from "../../utils/apiUtil"

const ViewTale = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { taleId } = useParams()
    const taleSelector = useSelector(state => Object.values(state.tales))
    // const tale = useSelector((state) => state.tale.list.map(taleId => state.tale[taleId]))
    const [tale, setTale] = useState([])


    useEffect(() => {
        dispatch(fetchTale(taleId))
        setTale(taleSelector)
    }, [dispatch])
    // TODO: access the state and render the tale to the page
    

    // if(!tale) {
    //     history.push("/")
    // }

    return (
        <>
            <h1>This is where a single tale will render</h1>
            {taleSelector && taleSelector.map(tale => (
                <div>
                    <div>{tale.title}</div>
                    <div>{tale.content}</div>
                </div>
            ))}
            
        </>
    )
}

export default ViewTale