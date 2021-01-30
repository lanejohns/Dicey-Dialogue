import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, NavLink } from 'react-router-dom'
import parser from 'react-html-parser'
import { fetchTale } from "../../utils/apiUtil"
import { getAllComments } from "../../utils/apiUtil"
import "./ViewTale.css"

import CreateComment from "../CreateComment/index"

const ViewTale = ( {isLoaded} ) => {
    const dispatch = useDispatch()
    const taleId = Number.parseInt(useParams().taleId)
    const taleSelector = useSelector(state => Object.values(state.tales))
    const comments = useSelector(state => Object.values(state.comments))
    const sessionUser = useSelector(state => state.session.user)
    const [reveal, setReveal] = useState(false)


    useEffect(() => {
        dispatch(fetchTale(taleId))
        dispatch(getAllComments(taleId))
    }, [dispatch])

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
            <button type="button" className="btn btn-outline-dark m-2" onClick={(event) => setReveal(!reveal)}>Leave a Comment</button>
            {reveal === true && (
                    <CreateComment />
            )}
            </>
        )
    } else {
        sessionLinks = (
            <NavLink className="btn btn-outline-dark m-2" to="/login">Please login to leave a comment</NavLink>
        )
    }
    

    return (
        <>
            {taleSelector && taleSelector.map(tale => (
                <div>
                    <div className="divContainer container border border-dark rounded taleContainer"key={tale.id}>
                        <h2 className="taleTitle m-2">{parser(tale.title)}</h2>
                        <hr className="my-2"></hr>
                        <div className="taleContent">{parser(tale.content)}</div>
                        {isLoaded && sessionLinks}
                    </div>
                    <div className="spacer"></div>
                    <h2 className="commentsTitle">Comments</h2>
                    <div className="container commentBox">
                    {comments && comments.map(comment => 
                        <div key={comment.id}>
                            <div className="comment">{parser(comment.content)}</div>
                            <hr className="my-2"></hr>
                        </div>
                    )}
                    </div>
                </div>
            ))}
        </>
    )
}

export default ViewTale