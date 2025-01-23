const API_KEY = '08fc31ab772fbd3c90a210966c53e4ea'

const BASE_URL = 'https://api.themoviedb.org/3'

// Get Popular Movies 
export const getPopularMovies = async ()=>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
}

// Search Movies
export const searchMovies = async(query)=>{
    const encodedQuery = encodeURIComponent(query);
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodedQuery}`);

    // const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query = {encodeURIComponent(
    //     query)
    //     }`)
    const data = await response.json()
    return data.results
}