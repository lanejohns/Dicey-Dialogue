import ReactQuill from "react-quill"
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux"
import "./CreateTalePage.css"


const CreateTalePage = () => {
    const [text, setText] = useState("")
    const [title, setTitle] = useState("")
    const history = useHistory()
    const dispatch = useDispatch()

    const handleChange = (value) => {
        setText(value)
    }

    const handleClick = (value) => {
        setText(value)
        history.push('/')
    }

    const handleTitle = (value) => {
        setTitle(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const payload = {
            title,
            text
        }
        // const submitTale = await dispatch(thunkactionhere(payload))
    }

    return (
        <div className="container border border-dark rounded h-25 taleEditor">
        <p>Feel free to write about your experiences as a GM/player, any questions you may have for the community, or just a fun topic to speak on!</p>
        <form>
            <input className="border border-dark rounded"value={title} onChange={(event) => setTitle(event.target.value)} placeholder="title"/>
            <ReactQuill value={text} onChange={handleChange} />
            <button type="submit" className="btn btn-outline-dark m-2" onSubmit={handleClick} >Submit</button>
        </form>
        </div>
    )
}

export default CreateTalePage