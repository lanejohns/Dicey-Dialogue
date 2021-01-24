import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './SignupForm.css'

const SignupFormPage = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user)
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] =useState("")
    const [errors, setErrors] = useState([])

    if(sessionUser) return <Redirect to="/" />

    const handleSubmit = (event) => {
        event.preventDefault()
        if(password === confirmPassword) {
            setErrors([])
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(res => {
                    if (res.data && res.data.errors) setErrors(res.data.errors)
                })
        }
        return setErrors(["Confirm password field must be the same as the Password field"])
    }

    return (
        // <div className="background inline" style={{height: "70%"}}>
        //     <div className="container" style={{width: "500px"}}>
        //         <form className="inline text-center border border-5 border-dark rounded bg-light" onSubmit={handleSubmit}>
        //             <ul>
        //                 {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        //             </ul>
        //             <label>
        //                 Email
        //             </label>
        //             <div></div>
        //                 <input
        //                 type="text"
        //                 value={email}
        //                 onChange={(event) => setEmail(event.target.value)}
        //                 required
        //                 />
        //             <div></div>
        //             <label>
        //                 Username
        //             </label>
        //             <div></div>
        //                 <input
        //                 type="text"
        //                 value={username}
        //                 onChange={(event) => setUsername(event.target.value)}
        //                 required
        //                 />
        //             <div></div>
        //             <label>
        //                 Password
        //             </label>
        //             <div></div>
        //                 <input
        //                 type="password"
        //                 value={password}
        //                 onChange={(event) => setPassword(event.target.value)}
        //                 />
        //             <div></div>
        //             <label>
        //                 Confirm Password
        //             </label>
        //             <div></div>
        //                 <input
        //                 type="password"
        //                 value={confirmPassword}
        //                 onChange={(event) => setConfirmPassword(event.target.value)}
        //                 />
        //             <div></div>
        //             <button className="btn btn-outline-dark btn-sm m-1" type="submit">Sign Up</button>
        //         </form>
        //     </div>
        // </div>
        <div className="container text-center">
            <form className="position-absolute top-50 start-50 translate-middle border border-dark border-4 text-white bg-dark" style={{width: "500px"}}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>Email</label>
                <div></div>
                <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                />
                <div></div>
                <label>Username</label>
                <div></div>
                <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
                />
                <div></div>
                <label>Password</label>
                <div></div>
                <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                />
                <div></div>
                <label>Confirm Password</label>
                <div></div>
                <input
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                />
                <div></div>
                <button className="btn btn-outline-light btn-sm m-2" type="submit">Sign Up</button>
                <h3>We hope you enjoy our app!</h3>
            </form>
        </div>
    )
}

export default SignupFormPage