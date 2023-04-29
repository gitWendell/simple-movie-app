import React from 'react'
import './style.css'
import {FiSearch} from 'react-icons/fi';

export const Search = () => {

    return (
        <div className='search-input'>
            <div className='bg-black flex flex-wrap w-fit'>
                <FiSearch />
                <input class="focus:outline-none px-4 " type="text" placeholder='Search ...'/>
            </div>
        </div>
    )
}
