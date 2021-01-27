import ReactQuill from "react-quill"
import { useState } from 'react';
import "./CreateTalePage.css"


const CreateTalePage = () => {
    const [text, setText] = useState("")

    const handleChange = (value) => {
        setText(value)
    }

    return (
        <div className="container border border-dark rounded h-25 taleEditor">
        <p>Feel free to write about your experiences as a GM/player, any questions you may have for the community, or just a fun topic to speak on!</p>
        <ReactQuill value={text} onChange={handleChange} />
        <button className="btn btn-outline-dark m-2">Submit</button>
        </div>
    )
}

export default CreateTalePage