import React from 'react'
import '../css/MovieCard.css'
import { useMovieContext } from '../context/MovieContext'

const MovieCard = ({movie}) => {
    const {isFavorite,addToFavorites,removeFromFavorites} = useMovieContext()

    const favorite  = isFavorite(movie.id)
    function onFavclick(e){
        e.preventDefault()
        if(favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)

    }


  return (
    <div className='movieCard'>
        <div className='movie-poster'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className='movie-overlay'>
                <button className={`favorite-btn ${favorite ? 'active' : ''}`} onClick={onFavclick}></button>
            </div>
            </div>
            <div>
                <h2 className='movie-info'>{movie.title}</h2>
                <p>{movie.release_date?.split('-')[0]}</p>
            </div>
        </div>
  )
}

export default MovieCard