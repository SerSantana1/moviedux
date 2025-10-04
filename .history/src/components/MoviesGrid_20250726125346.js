import React, {useState, useEffect} from "react";
import '../styles.css';


export default function MoviesGrid(){

    const [movies, setMovies] = useState([]);

 

    useEffect(() => {

        fetch("movies.json")
        
        .then(response => Response.json() )
        .then(data => setMovies(data))
    

    },[])


    return(<div>{movies.length}</div>)
}