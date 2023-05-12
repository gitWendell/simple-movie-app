import React from 'react'
import { BiTrendingUp } from 'react-icons/bi'
import { BsBoxArrowInUpRight } from 'react-icons/bs'
import { TbMovie } from 'react-icons/tb'
import { FaListUl } from 'react-icons/fa'
import './style.css'

export const ButtonTab = ({custom_class = ''}) => {

    const selectedType = () => {
        
    }

    return (
        <div className={'button-tab mb-2 ' + custom_class}>
            <button className='simple-button inline-flex active'>
                <TbMovie />
                <span>Movies</span>
            </button>
            <button className='simple-button inline-flex '>
                <FaListUl />
                <span>TV Shows</span>
            </button>
            <button className='simple-button inline-flex'>
                <BsBoxArrowInUpRight />
                <span>Trending</span>
            </button>
        </div>
    )
}
