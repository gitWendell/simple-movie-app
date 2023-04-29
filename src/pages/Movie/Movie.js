import React from 'react'
import { useParams } from 'react-router-dom'

const Movie = () => {
  const params = useParams();
  const movieId = params.movieId;

  return (
    <div>Movie</div>
  )
}

export default Movie