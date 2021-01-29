import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom"
import { fetch } from '../../store/csrf'
import { parser } from 'react-html-parser'
import './Home.css'

    const Home = () => {
        const [tales, setTales] = useState([])
        // create a slice of state for tales

        async function fetchTales() {
            const response = await fetch('/api/tales')
            if(!response.ok) throw response
            const { tales } = await response.data
            setTales(tales)
            // console.log(tales)
        }
        

        // useEffect(() => {
        //     const getAllTales = async () => {
        //         await dispatch(fetchTales())
        //     }
        //     const results = getAllTales()
        //     setTales(results)
        // }, [])

        useEffect(() => {
            fetchTales()
            console.log(tales)
        }, [])

    return (
        <>
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Welcome to Dicey Dialogue!</h1>
                        <p className="lead">There are twenty sides to every story, tell yours!</p>
                        <hr className="my-4"></hr>
                        <p>Do you wish to read the lore of others or create your own tale? Click below and venture forth.</p>
                        <NavLink to="/lore" className="btn btn-outline-light m-2">Explore The Lore</NavLink>
                        <NavLink to="/newtale" className="btn btn-outline-light m-2">Tell Your Tale</NavLink>
                        </div>
                    <h1 className="featuredTales">Featured Tales</h1>
                    <div className="container d-flex justify-content-center cardDiv">
                        {/* We will want a way to query the database for the most recent tale, then render it  */}
                        {tales.length > 1 && (
                            // <div className="div1">
                            //     <div className="card-body">
                            //         <NavLink to={`/tales/${tales[1].id}`}className="btn btn-outline-light">{tales[1].title}</NavLink>
                            //         <h5 className="card-text mt-2">The first tale posted to Dicey Dialogue!</h5>
                            //     </div>
                            // </div>
                            <div className="card-deck">
                                <div className="card mb3 cardDivs">
                                    <div className="card-body">
                                        <NavLink to={`/tales/${tales[1].id}`} className="btn btn-outline-light m-2">Read</NavLink>
                                        <h4>{tales[1].title}</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
                                    </div>
                                </div>
                                <div className="card mb3 cardDivs">
                                    <div className="card-body">
                                        <NavLink to={`/tales/${tales[2].id}`} className="btn btn-outline-light m-2">Read</NavLink>
                                        <h4>{tales[2].title}</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    </div>
                                </div>
                                <div className="card mb3 cardDivs">
                                    <div className="card-body">
                                        <NavLink to={`/tales/${tales[3].id}`} className="btn btn-outline-light m-2">Read</NavLink>
                                        <h4>{tales[3].title}</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    </div>
                                </div>
                                <div className="card mb3 cardDivs">
                                    <div className="card-body">
                                        <NavLink to={`/tales/${tales[4].id}`} className="btn btn-outline-light m-2">Read</NavLink>
                                        <h4>{tales[4].title}</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="spacing"></div>
 
                    </div>
        </>
    )
}

export default Home