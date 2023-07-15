import { useEffect, useState } from 'react'

import MovieList from './MovieList'
function Home() {

    const [moviesData, setMoviesData] = useState([])

    const getAllMovies = () => {
        const serverURL = `${process.env.REACT_APP_serverURL}/trending`;
        fetch(serverURL)
            .then(response => {
                response.json().then(data => {
                    console.log(data)
                    setMoviesData(data)

                })
            })
    }

    useEffect(()=>{
        getAllMovies()
    },[])



    return (
        <>
           {/* <h1>Home</h1> */}
           {/* {//test:
          moviesData.map(movie => (
        <div key={movie.id}>{movie.title}</div>
      ))}  */}


      {// render MovieList componant and pass props
       }
      <MovieList movies={moviesData}/>  
        </>
    )
}

export default Home;