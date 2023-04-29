import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { getMovies } from '../../actions/GetMovies';
import { Search } from '../../components/Input/Search'
import { MovieCard } from '../../components/MovieCard/MovieCard';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const fetchMoviesData = useCallback(async () => {
    const cancelToken = axios.CancelToken.source();
    const data = await getMovies({cancelToken: cancelToken.token});
    setMovies(data.results);

    return () => cancelToken.cancel();
  }, []);

  useEffect(() => {
    fetchMoviesData();
  }, [fetchMoviesData]);

  return (
    <section name="home-page">
        <Search />
        <section className="movie-list">
            {
            movies && movies.length > 0 && movies.map((movie) => {
                return <MovieCard 
                    key={movie.id} 
                    movie={movie} />
            })
            }
        </section>
    </section>
  )
}

export default Home