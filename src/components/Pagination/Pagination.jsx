import React, { useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import './style.css'

export const Pagination = ({totalPages = 1, onChange}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageNumbers = [];

    const handelChange = (page) => {
        setCurrentPage(page)
        onChange(page);
    };

    if(totalPages <= 5) {
        for(let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
    } else {
        const maxLeft = currentPage - Math.floor(5/2);
        const maxRight = currentPage + Math.floor(5/2);

        if(maxLeft < 1) {
            pageNumbers.push(1);
            pageNumbers.push(2);
            pageNumbers.push(3);
            pageNumbers.push(4);
            pageNumbers.push(5);
        } else if (maxRight > totalPages) {
            pageNumbers.push(totalPages - 4);
            pageNumbers.push(totalPages - 3);
            pageNumbers.push(totalPages - 2);
            pageNumbers.push(totalPages - 1);
            pageNumbers.push(totalPages);
        } else {
            pageNumbers.push(maxLeft);
            pageNumbers.push(maxLeft + 1);
            pageNumbers.push(currentPage);
            pageNumbers.push(maxRight - 1);
            pageNumbers.push(maxRight);
        }
    }

    return (
        <ul className="pagination">
            {currentPage > 1 && (
                <li className="page-item">
                    <a href="#" 
                        className="page-link" 
                        onClick={(e) => {
                            e.preventDefault();
                            handelChange(currentPage - 1)
                        }}>
                        <BsArrowLeft />
                    </a>
                </li>
            )}
            {pageNumbers.map((number) => (
                <li key={number} className={`page-item${number === currentPage ? ' active' : ''}`}>
                    <a href="#" 
                        className="page-link" 
                        onClick={(e) => {
                            e.preventDefault();
                            handelChange(number)
                        }}>
                        {number}
                    </a>
                </li>
            ))}
            {currentPage < totalPages && (
                <li className="page-item">
                    <a href="#" 
                        className="page-link" 
                        onClick={(e) => {
                            e.preventDefault();
                            handelChange(currentPage + 1)
                        }}>
                        <BsArrowRight />
                    </a>
                </li>
            )}
        </ul>
    )
}
