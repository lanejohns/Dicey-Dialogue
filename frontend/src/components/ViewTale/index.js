import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import parser from 'react-html-parser'
import { fetchTale } from "../../utils/apiUtil"
import { getAllComments } from "../../utils/apiUtil"
import "./ViewTale.css"

import CreateComment from "../CreateComment/index"

const ViewTale = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const taleId = Number.parseInt(useParams().taleId)
    const taleSelector = useSelector(state => Object.values(state.tales))
    const comments = useSelector(state => Object.values(state.comments))
    let isHidden = true


    useEffect(() => {
        dispatch(fetchTale(taleId))
        dispatch(getAllComments(taleId))
    }, [dispatch])
    

    return (
        <>
            {taleSelector && taleSelector.map(tale => (
                <div>
                    <div className="divContainer container border border-dark rounded taleContainer"key={tale.id}>
                        <h2 className="taleTitle m-2">{parser(tale.title)}</h2>
                        <button type="button" className="btn btn-outline-dark m-2" onClick={() => isHidden = false}>Comments</button>
                        <hr className="my-2"></hr>
                        <div className="taleContent">{parser(tale.content)}</div>
                        {isHidden === true && (
                            <CreateComment />
                        )}
                    </div>
                    <div className="spacer"></div>
                    <h2 className="commentsTitle">Comments</h2>
                    <div className="container commentBox">
                    {comments && comments.map(comment => 
                        <div key={comment.id}>
                            <div className="comment">{comment.content}</div>
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