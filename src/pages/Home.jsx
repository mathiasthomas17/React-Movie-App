import React from 'react'
import MovieCard from '../components/MovieCard';
import { useState } from 'react';

const Home = () => {
    const movies = [
        {
          id: 1,
          title: "The Shawshank Redemption",
          releaseDate: "1994-09-22"
        },
        {
          id: 2,
          title: "The Dark Knight",
          releaseDate: "2008-07-18"
        },
        {
          id: 3,
          title: "Inception",
          releaseDate: "2010-07-16"
        },
        {
          id: 4,
          title: "Forrest Gump",
          releaseDate: "1994-07-06"
        },
        {
          id: 5,
          title: "The Matrix",
          releaseDate: "1999-03-31"
        },
        {
          id: 6,
          title: "The Godfather",
          releaseDate: "1972-03-24"
        },
        {
          id: 7,
          title: "Pulp Fiction",
          releaseDate: "1994-10-14"
        },
        {
          id: 8,
          title: "Fight Club",
          releaseDate: "1999-10-15"
        },
        {
          id: 9,
          title: "The Lord of the Rings: The Fellowship of the Ring",
          releaseDate: "2001-12-19"
        },
        {
          id: 10,
          title: "The Avengers",
          releaseDate: "2012-05-04"
        }
      ];
    //   Handle Submit Function
      const handleSumit = (e)=>{
        e.preventDefault()
        alert(searchQuerry)
        setSearchQuerry('')
      }
    //   State
      const [searchQuerry, setSearchQuerry] = useState('')
      
  return (
    <>
    <form onSubmit={handleSumit} className='search-form'>
        <input 
        type="text" 
        placeholder='Search Movies ...' 
        className='search-input'
        value={searchQuerry}
        onChange={(e) => setSearchQuerry(e.target.value)}
        />
        <button type='submit' className='search-button'> Search</button>

    </form>
    <div className='home'>
        <div className='movies-grid'>
            {movies.map ((movie)=>(
                movie.title.toLocaleLowerCase().startsWith(searchQuerry) && <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
    </div>
    </>
  )
}

export default Home