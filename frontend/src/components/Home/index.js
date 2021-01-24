import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { NavLink } from "react-router-dom"
import './Home.css'

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Welcome to Dicey Dialogue!</h1>
                        <p className="lead">There are twenty sides to every story, tell yours!</p>
                        <hr className="my-4"></hr>
                        <p>Do you wish to read the lore of others or create your own tale? Click below and venture forth.</p>
                        <button className="btn btn-outline-light">Lore</button>
                        <NavLink to="/newtale" className="btn btn-outline-light m-2">Tell Your Tale</NavLink>
                </div>
            </div>
        </>
    )
}

export default Home