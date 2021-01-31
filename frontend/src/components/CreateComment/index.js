import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactQuill from "react-quill"
import { addComment } from '../../utils/apiUtil'
import { setComments } from '../../store/reducers/comments'

const CreateComment = () => {
    const dispatch = useDispatch()
    const [content, setContent] = useState("")
    const taleId = Number.parseInt(useParams().taleId)

    const handleChange = (value) => {
        setContent(value)
    }

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
            <ReactQuill value={content} onChange={handleChange} />
            <button type="submit" className="btn btn-outline-dark m-3 btn-sm">Submit</button>
        </form>
    )
}

export default CreateComment