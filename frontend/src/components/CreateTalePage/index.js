import ReactQuill from "react-quill"
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { addTale } from "../../utils/apiUtil"
import "./CreateTalePage.css"


const CreateTalePage = ( {isLoaded} ) => {
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    const history = useHistory()
    const dispatch = useDispatch()

    // const usernameSelector = useSelector(state => Object.values(state.session))

    useEffect(() => {
        if (!isLoaded) {
            history.push("/login")
        }
    }, [dispatch])

    const username = useSelector(state => state.session.user.username)

    const handleChange = (value) => {
        setContent(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const payload = {
            title,
            content,
            username
        }
        const submitTale = await dispatch(addTale(payload))
        if (submitTale) {
            history.push("/")
        }
    }



    return (
        <div className="container border border-dark rounded h-25 taleEditor">
        <p>Feel free to write about your experiences as a GM/player, any questions you may have for the community, or just a fun topic to speak about!</p>
        <hr className="my-1"></hr>
        <form onSubmit={handleSubmit}>
            <input className="border border-dark rounded taleTitle" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="title"/>
            <ReactQuill value={content} onChange={handleChange} />
            <button disabled={content.length < 0 && title.length < 0} type="submit" className="btn btn-outline-dark m-2" >Submit</button>
        </form>
        </div>
    )
}

export default CreateTalePage