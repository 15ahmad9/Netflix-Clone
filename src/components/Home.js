// import { useEffect, useState } from 'react';
// import MovieList from './MovieList';

// // function Home() {
//     export default function Home() {

//     const [moviesData, setMoviesData] = useState([]);

//     // const getAllMovies = () => {
//     //     const serverURL = process.env.REACT_APP_serverURL/trending;
      
//     //     // const serverURL = `http://localhost:3000/trending`;
//     //     fetch(serverURL)
//     //         .then(response => {
//     //             response.json().then(data => {
//     //                 console.log(data)
//     //                 setMoviesData(data)

//     //             })
//     //         })
//     // }


//     async function getAllMovies() {
//         const url = process.env.REACT_APP_serverURL;
//         const response = await fetch(`${url}/trending`);
//         const TrendingMovies = await response.json();
//         setMoviesData(TrendingMovies);   
//       }


//     useEffect(()=>{
//         getAllMovies()
//     },[]);

//     return <MovieList moviesData={moviesData}/>  
//         // <>
//         //    <h1>Home</h1>
//            {/* {//test:
//           moviesData.map(movie => (
//         <div key={movie.id}>{movie.title}</div>
//       ))} 

//       {// render MovieList componant and pass props
//        } */}
      
//         // </>
    
// }

// // export default Home;




import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";

export default function Home() {
  const [data, setData] = useState([]);

  

  async function getTrendingMovies() {
    const url = process.env.REACT_APP_serverURL;
    const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_KEY}&language=en-US`);
    const TrendingMovies = await response.json();
    setData(TrendingMovies.res);   
  }

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return <MovieList data={data} />;
}

