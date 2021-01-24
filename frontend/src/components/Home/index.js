import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Welcome, adventurer!</h1>
                        <p className="lead">We are sure you have travelled far and have seen much. </p>
                        <hr className="my-4"></hr>
                        <p>Do you wish to read the tales of others? Click below and venture forth!</p>
                        <button className="btn btn-outline-light">Onward!</button>
                </div>
            </div>
        </>
    )
}

export default Home