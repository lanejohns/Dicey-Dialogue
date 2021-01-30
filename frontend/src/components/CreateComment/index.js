import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { addComment } from '../../utils/apiUtil'
import { setComments } from '../../store/reducers/comments'

const CreateComment = () => {
    const dispatch = useDispatch()
    const [content, setContent] = useState("")
    // const taleId = useSelector(state => state.tales.id)
    const taleId = Number.parseInt(useParams().taleId)

    // useEffect(() => {
    //     dispatch(createComment())
    // }, [dispatch])

    const handleSubmit = async (event) => {
        event.preventDefault()
        const payload = {
            content,
            taleId
        }
        await dispatch(addComment(payload))
        setContent("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={content} onChange={(event) => setContent(event.target.value)}></textarea>
            {/* {taleId && console.log(taleId)} */}
            <button className="btn btn-outline-dark m-3 btn-sm">Submit</button>
        </form>
    )
}

export default CreateComment