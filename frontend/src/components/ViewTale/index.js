import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import { fetchTale } from "../../utils/apiUtil"
import "./ViewTale.css"

import CreateComment from "../CreateComment/index"

const ViewTale = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { taleId } = useParams()
    const taleSelector = useSelector(state => Object.values(state.tales))
    const userSelector = useSelector(state => Object.values(state.session))
    // const tale = useSelector((state) => state.tale.list.map(taleId => state.tale[taleId]))
    const [tale, setTale] = useState([])
    // const [seeComments, setSeeComments] = useState(false)
    let isHidden = true


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
            {taleSelector && taleSelector.map(tale => (
                <div className="divContainer h-50 container border border-dark rounded taleContainer"key={tale.id}>
                    <h2 className="taleTitle">{tale.title}</h2>
                    <button type="button" className="btn btn-outline-dark m-2" onClick={() => isHidden = false}>Comments</button>
                    <hr className="my-2"></hr>
                    <div className="taleContent">{tale.content}</div>
                </div>
            ))}
            {userSelector && userSelector.map((user) => (
                <div key={user.id}>
                    {/* <div>Scribed by: {user.username}</div> */}
                    <button className="btn btn-outline-dark m-2">Follow Author</button>
                </div>
            ))}
            {isHidden === false && (
                <CreateComment />
            )}
        </>
    )
}

export default ViewTale