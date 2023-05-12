import React from 'react'
import './style.css'
import {FiSearch} from 'react-icons/fi';

export const Search = () => {

    return (
        <div className='search-input fixed z-10 w-full'>
            <div className='search-container bg-white flex flex-wrap p-2 m-5 w-1/2 rounded-lg'>
                <FiSearch className='self-center'/>
                <div className='border-l-2 ml-2 pl-2'>
                    <input class="focus:outline-none " type="text" placeholder='Search ...'/>
                </div>
            </div>
        </div>
        
    )
}
