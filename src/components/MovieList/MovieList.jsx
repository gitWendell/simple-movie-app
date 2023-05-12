import React  from 'react'
import { MovieCard } from '../MovieCard/MovieCard'

const MovieList = ({ movies }) => {

    return (
        <section className="movie-list">
            {
                movies && movies.length > 0 && movies.map((movie) => {
                    return <MovieCard 
                        key={movie.id} 
                        movie={movie} />
                })
            }
        </section>
    )
}

export default MovieList