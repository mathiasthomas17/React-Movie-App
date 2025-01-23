import React from 'react'
import '../css/MovieCard.css'

const MovieCard = ({movie}) => {
    function onFavclick(){
        alert('Çlicked')
    }


  return (
    <div className='movieCard'>
        <div className='movie-poster'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className='movie-overlay'>
                <button className='favorite-btn' onClick={onFavclick}></button>
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