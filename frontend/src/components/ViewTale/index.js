import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import parser from 'react-html-parser'
import { fetchTale } from "../../utils/apiUtil"
import "./ViewTale.css"

import CreateComment from "../CreateComment/index"

const ViewTale = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const taleId = Number.parseInt(useParams().taleId)
    const taleSelector = useSelector(state => Object.values(state.tales))
    let isHidden = true


    useEffect(() => {
        dispatch(fetchTale(taleId))
    }, [dispatch])
    

    return (
        <>
            {taleSelector && taleSelector.map(tale => (
                <div className="divContainer container border border-dark rounded taleContainer"key={tale.id}>
                    <h2 className="taleTitle m-2">{parser(tale.title)}</h2>
                    <button type="button" className="btn btn-outline-dark m-2" onClick={() => isHidden = false}>Comments</button>
                    <hr className="my-2"></hr>
                    <div className="taleContent">{parser(tale.content)}</div>
                </div>
            ))}
            {isHidden === false && (
                <CreateComment />
            )}
        </>
    )
}

export default ViewTale