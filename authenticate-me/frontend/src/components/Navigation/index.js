import { NavLink } from "react-router-dom"
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton'
import './Navigation.css'


const Navigation = ( {isLoaded} ) => {
    const sessionUser = useSelector(state => state.session.user)

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        )
    } else {
        sessionLinks = (
            <>
            <NavLink className="btn btn-outline-dark btn-sm m-1" to="/login">Log In</NavLink>
            <NavLink className="btn btn-outline-dark btn-sm m-1" to="/signup">Sign up</NavLink>
            </>
        )
    }

    return (
        <ul>
            <li>
                <NavLink className="btn btn-outline-dark btn-sm m-1" exact to="/">Home</NavLink>
                {isLoaded && sessionLinks}
            </li>
        </ul>
    )
}

export default Navigation