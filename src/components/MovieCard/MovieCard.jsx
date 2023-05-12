import React from 'react'
import { Link } from 'react-router-dom'
import { getYearFromDate } from '../../utils/helpers';
import './style.css'

export const MovieCard = ({movie}) => {
    const {id, original_title, vote_average, poster_path, release_date } = movie;

    return (
        <div className="movie-card-container max-w-xs  m-2 inline-block">
            <Link to={"/movie/" + id}>
                <img className="rounded-t-lg border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700" 
                    src={"https://image.tmdb.org/t/p/original/" + poster_path} 
                    alt="" />
            </Link>
            <div className="py-2">
                <a href="#">
                    <h5 className="mb-2 leading-7 font-bold tracking-tight text-gray-900 dark:text-white whitespace-nowrap overflow-hidden text-ellipsis">
                        {original_title}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400 flex justify-between">
                    <span>{getYearFromDate(release_date)} &nbsp; • &nbsp; {vote_average}</span>
                    <span>Movie</span>
                </p>
            </div>
        </div>
    )
}
