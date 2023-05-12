import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import {FiPlay } from 'react-icons/fi';
import { BsStarHalf } from 'react-icons/bs'
import { getHumanReadableDate } from '../../utils/helpers';

export const MovieSlide = ({ slide }) => {
    const {id, release_date, overview, popularity, vote_average, poster_path, title} = slide;

    return (
        <div className='movie-slide-holder'>
            <div className='slide-content'>
                <div className='slide-body'>
                    <h1 className="slide-title">{title}</h1>
                    <p className='slide-overview'>{overview}</p>
                    <div className='slide-badges flex'>
                        <p className='slide-badge sb-first'>
                            {getHumanReadableDate(release_date)}
                        </p>
                        <p className='slide-badge flex items-center'>
                            <BsStarHalf className='mr-2'/> 
                            <span> {vote_average} </span>
                        </p>
                        <p className='slide-badge'>
                            {popularity}
                        </p>
                    </div>
                    <Link to={"/movie/" + id} className="slide-play-button">
                        <FiPlay className='slide-play-icon'/> 
                        <span> Play Now </span>
                    </Link>
                </div>

                <div className="slide-image">
                    <div className='overlay'></div>
                    <img src={"https://image.tmdb.org/t/p/original/" + poster_path} />
                </div>
            </div>
        </div>
    )
}
