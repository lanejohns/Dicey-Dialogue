import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

const LoginFormPage = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleSubmit = (event) => {
        event.preventDefault()
        setErrors([])
        return dispatch(sessionActions.login({ credential, password}))
            .catch((res) => {
                if (res.data && res.data.errors) setErrors(res.data.errors)
            })
    }

    return (
        // <div className="background inline" style={{height: "70%"}}>
        //     <div className="container" style={{width: "500px"}}>
        //         <form className="inline text-center border border-5 border-dark rounded bg-light" onSubmit={handleSubmit}>
        //             <ul>
        //                 {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        //             </ul>
        //             <label className="">
        //                 Username or Email
        //             </label>
        //             <div></div>
        //             <input 
        //             className="m-0"
        //             type="text" 
        //             value={credential} 
        //             onChange = {(event) => setCredential(event.target.value)}
        //             required
        //             />
        //             <div></div>
        //             <label>
        //                 Password
        //             </label>
        //             <div></div>
        //             <input
        //             className="m-0"
        //             type="password"
        //             value={password}
        //             onChange={(event) => setPassword(event.target.value)}
        //             required
        //             />
        //             <div></div>
        //             <button className="btn btn-outline-dark btn-sm m-1" type="submit">Log In</button>
        //         </form>
        //     </div>
        // </div>
        <div className="container text-center">
            <h1 className="">Please log in using your Username or Email</h1>
            <div></div>
            {/* <img src="https://cpng.pikpng.com/pngl/s/32-325448_animated-wizard-clipart.png" alt="new" /> */}
            <form className="position-absolute top-50 start-50 translate-middle border border-dark border-4 text-white bg-dark" style={{width: "500px"}} onSubmit={handleSubmit}>
                <ul>
                  {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>Username or Email</label>
                <div></div>
                <input 
                type="text"
                value={credential}
                onChange = {(event) => setCredential(event.target.value)}
                required
                />
                <div></div>
                <label>Password</label>
                <div></div>
                <input 
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                />
                <div></div>
                <button className="btn btn-outline-light btn-sm m-2" type="submit">Log In</button>
            </form>


        </div>
    )
}

export default LoginFormPage