import React from 'react'
import MovieCard from '../components/MovieCard';
import { useState,useEffect } from 'react';
import '../css/Home.css'
import { searchMovies, getPopularMovies } from '../services/api';

const Home = () => {
  
    //   Handle Submit Function
      const handleSumit = (e)=>{
        e.preventDefault()
        alert(searchQuerry)
        setSearchQuerry('')
      }
    //   State
      const [searchQuerry, setSearchQuerry] = useState('')
      const [movies,setMovies] = useState([])
      const [error,setError ] = useState(null)
      const [loading,setLoading] = useState(true)

      useEffect(()=>{
        const loadPopularMovies = async()=>{
          try{
            const popularMovies = await getPopularMovies()
            setMovies(popularMovies)
            console.log(movies)
          }catch(err){
            console.log(err)
            setError('Failed To Load Movies')
          }
          finally{
            setLoading(false)
          }
        }
        loadPopularMovies()
      },[])
      
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