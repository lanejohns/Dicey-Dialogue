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
        </form>
    )
}

export default CreateComment