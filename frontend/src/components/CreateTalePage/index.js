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
        <h1>This is where the user will write their tales!</h1>
        <ReactQuill value={text} onChange={handleChange} theme="snow"/>
        <button className="btn btn-outline-dark m-2">Submit</button>
        </div>
    )
}

export default CreateTalePage