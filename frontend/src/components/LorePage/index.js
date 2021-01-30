import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom"
import { fetch } from '../../store/csrf'
import { parser } from 'react-html-parser'
import './LorePage.css'

const LorePage = () => {

    const [tales, setTales] = useState([])

    async function fetchTales() {
        const response = await fetch('/api/tales')
        if(!response.ok) throw response
        const { tales } = await response.data
        setTales(tales)
        // console.log(tales)
    }

    useEffect(() => {
        fetchTales()
        console.log(tales)
    }, [])

    return (
        <div className="container loreContainer">
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
    )
}

export default LorePage