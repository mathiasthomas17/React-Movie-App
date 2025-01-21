import React from 'react'

const MovieCard = ({movie}) => {
    function onFavclick(){
        alert('Çlicked')
    }


  return (
    <div className='movieCard'>
        <div className='movie-poster'>
            <img src={movie.url} alt={movie.title} />
            <div className='movie-overlay'>
                <button className='favorite-btn' onClick={onFavclick}></button>
            </div>
            </div>
            <div>
                <h2 className='movie-info'>{movie.title}</h2>
                <p>{movie.release_date}</p>
            </div>
        </div>
  )
}

export default MovieCard