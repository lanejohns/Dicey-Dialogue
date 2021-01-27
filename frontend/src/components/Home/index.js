import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom"
import { fetchTales } from '../../utils/apiUtil'
import { receiveTales } from '../../store/reducers/tales'
import { fetch } from '../../store/csrf'
import { parser } from 'react-html-parser'
import './Home.css'

    const Home = () => {
        // const parser = new DOMParser()
        const [tales, setTales] = useState([])
        // create a slice of state for tales

        // const stateTales = useSelector((state => Object.values(state)))
        const stateTales = useSelector((state => state.tales))

        // const looper = (objectsTales) => {
        //     for (const key in objectsTales) {
        //         setTales([...tales, key.title])
        //         console.log(key.title)
        //     }
        // }

        async function fetchTales() {
            const response = await fetch('/api/tales')
            if(!response.ok) throw response
            const { tales } = await response.data
            // console.log("TALES", tales)
            setTales(tales)
            console.log(tales)
        }

        const dispatch = useDispatch()
        

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
                        <button className="btn btn-outline-light">Lore</button>
                        <NavLink to="/newtale" className="btn btn-outline-light m-2">Tell Your Tale</NavLink>
                        </div>
                    <div>Section for recent articles</div>
                    {/* We will want a way to query the database for the most recent tale, then render it  */}
                    {tales.length > 1 && (
                        <>
                        <p>{tales[0].title}</p>
                        <p>{tales[1].title}</p>
                        <p>{tales[2].title}</p>
                        <p>{tales[3].title}</p>
                        </>
                    )}
                    {/* {console.log("this is the object that contains other objects", objectsTales)}
                    {stateTales && looper(objectsTales)} */}
                    {/* {stateTales && looper(stateTales)} */}
                    {/* {console.log("this is the object that contains other objects", objectsTales)} */}
                    {/* {console.log("this should be tales", tales)} */}
                    {/* {stateTales && ( */}
                        {/* <div>{stateTales.map(tale => <div>{tale}</div>)}</div> */}
                    {/* )} */}
                    </div>
        </>
    )
}

export default Home