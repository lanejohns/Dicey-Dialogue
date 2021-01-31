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
    }

    useEffect(() => {
        fetchTales()
        console.log(tales)
    }, [])

    return (
        <div className="container loreContainer">
            {tales.length > 1 && (
                            <div className="card-deck">
                                <div className="card mb3 cardDivs">
                                    <div className="card-body">
                                        <NavLink to={`/tales/${tales[0].id}`} className="btn btn-outline-light m-2">Read</NavLink>
                                        <h4>{tales[0].title}</h4>
                                        <h5>Scribed By: {tales[0].username}</h5>
                                        <p className="card-text">A small list of tips from an experienced dungeon master that will help for any game setting.</p>
                                    </div>
                                </div>
                                <div className="card mb3 cardDivs">
                                    <div className="card-body">
                                        <NavLink to={`/tales/${tales[1].id}`} className="btn btn-outline-light m-2">Read</NavLink>
                                        <h4>{tales[1].title}</h4>
                                        <h5>Scribed By: {tales[1].username}</h5>
                                        <p className="card-text">New player looking for advice on my first game. Plz help.</p>
                                    </div>
                                </div>
                                <div className="card mb3 cardDivs">
                                    <div className="card-body">
                                        <NavLink to={`/tales/${tales[2].id}`} className="btn btn-outline-light m-2">Read</NavLink>
                                        <h4>{tales[2].title}</h4>
                                        <h5>Scribed By: {tales[2].username}</h5>
                                        <p className="card-text">The title says it all.</p>
                                    </div>
                                </div>
                                <div className="card mb3 cardDivs">
                                    <div className="card-body">
                                        <NavLink to={`/tales/${tales[3].id}`} className="btn btn-outline-light m-2">Read</NavLink>
                                        <h4>{tales[3].title}</h4>
                                        <h5>Scribed By: {tales[3].username}</h5>
                                        <p className="card-text">It turned out exactly as you might imagine.</p>
                                    </div>
                                </div>
                            </div>
                        )}
        </div>
    )
}

export default LorePage