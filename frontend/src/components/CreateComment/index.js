import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'

const CreateComment = () => {
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(createComment())
    // }, [dispatch])
    return (
        <form>
            <textarea></textarea>
            <button className="btn btn-outline-dark m-3">Submit</button>
        </form>
    )
}

export default CreateComment