import { useEffect, useState } from 'react'
import MovieList from './MovieList';


function Home() {

    const [movieData, setMovieData] = useState([])

    const getTrendingMovies = () => {
        const serverURL = `${process.env.REACT_APP_serverURL}/trending`;

        fetch(serverURL)
            .then(response => {
                response.json().then(data => {
                    console.log(data)
                    setMovieData(data);

                })
            })
    }


    useEffect(()=>{
        getTrendingMovies()
    },[])

    return (
        <>
        
        <MovieList dataInHome={movieData}/>
        </>
    );
}

export default Home;