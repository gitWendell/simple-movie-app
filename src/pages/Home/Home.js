import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { getMovies } from '../../actions/GetMovies';
import { getPopularMovies } from '../../actions/GetPopularMovies';
import MovieList from '../../components/MovieList/MovieList';
import { Search } from '../../components/Input/Search';
import { Slideshow } from '../../components/Slideshow/Slideshow';
import { Title } from '../../components/Header/Title';
import { ButtonTab } from '../../components/ButtonTab/ButtonTab';
import { Pagination } from '../../components/Pagination/Pagination';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [slides, setSlides] = useState(0);

  const fetchMoviesData = useCallback(async () => {
      const cancelToken = axios.CancelToken.source();
      const data = await getMovies({page: currentPage, cancelToken: cancelToken.token});
      setMovies(data.results);
      setTotalPages(data.total_pages)
      return () => cancelToken.cancel();
  }, [currentPage]);

  // Data here is for Slideshow
  const fetchPopularMoviesData = useCallback(async () => {
    const cancelToken = axios.CancelToken.source();
    const data = await getPopularMovies({cancelToken: cancelToken.token});
    setSlides(data.results.slice(0, 5));

    return () => cancelToken.cancel();
  }, []);

  // Set Page
  const handlePageChange = (page) => {
    setCurrentPage(prevPage => {
      if (page < 1) {
        return 1;
      } else if (page > totalPages) {
        return totalPages;
      } else {
        return page;
      }
    });
  };

  useEffect(() => {
      fetchMoviesData();
      fetchPopularMoviesData();
  }, [fetchMoviesData, fetchPopularMoviesData, currentPage]);

  return (
    <section name="home-page">
        {/* <Search /> */}
        <Slideshow slides={slides}/>
        <ButtonTab custom_class='ml-2'/>
        <Title title="Recommended" custom_class='ml-2'/>
        <MovieList movies={movies}/>
        <Pagination totalPages={totalPages} onChange={handlePageChange}/>
    </section>
  )
}

export default Home