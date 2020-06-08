import React, { useState, useEffect } from 'react';
import './pagination.scss';

/**
 * @description
 * @name Pagination - Component used for Pagination
 * @param {number} currentPage Page to be selected initially - default: 1
 * @param {number} totalCount Total number of items - Required
 * @param {number} itemsPerPage Number of items to be displayed in each page - Required
 * @param {number} pageRange Total numbers to be displayed on Pagination component - Default: totalCount
 * @param {string} prevButtonLabel default <
 * @param {string} nextButtonLabel  default >
 * @param {string} firstButtonLabel default <<
 * @param {string} lastButtonLabel default >>
 * @param {Object} liClass css class for page numbers
 * @param {Object} prevNextClass css class for prev and next list items
 * @param {Object} firstLastClass css class for first and last list items
 * @param {Object} prevButtonClass css class for prev and next buttons
 * @param {Object} nextButtonClass css class for prev and next buttons
 * @param {Object} firstButtonClass css class for first and last buttons
 * @param {Object} lastButtonClass css class for first and last buttons
 * @param {Function} onChange Callback function to be invoked when changes page
 * 
 * @returns {number} currentPage - Currently selected page number
 */

const Pagination = (props) => {
    const [pageNumbers, setPageNumbers] = useState([]);
    const [currentPage, setCurrentPage] = useState(null);
    const [lowerBound, setLowerBound] = useState(1);
    const [upperBound, setUpperBound] = useState(props.totalCount);
    let pageRange = props.pageRange ? props.pageRange : props.totalCount;

    useEffect(() => {
        let pageNumbers = [];
        if (props.totalCount && props.itemsPerPage && props.totalCount > props.itemsPerPage) {
            for (let i = 1; i <= Math.ceil(props.totalCount / props.itemsPerPage); i++) {
                pageNumbers.push(i);
            }
            setPageNumbers(pageNumbers);
            setCurrentPage(props.currentPage ? props.currentPage : 1);
            setUpperBound(pageRange);
        } else {
            setCurrentPage(props.currentPage ? props.currentPage : 1);
        }
    }, []);

    useEffect(() => {
        updateRange();
        props.onChange({ currentPage: currentPage });
    }, [currentPage])

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    }

    const handleClickPrev = (event) => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleClickNext = (event) => {
        if (currentPage < pageNumbers.length) {
            setCurrentPage(currentPage + 1);
        }
    }

    const handleClickFirst = (event) => {
        setCurrentPage(1);
    }

    const handleClickLast = (event) => {
        setCurrentPage(pageNumbers.length);
    }

    const updateRange = () => {
        if (lowerBound > currentPage || upperBound < currentPage) {
            let t = Math.floor(pageRange / 2);
            let lowerValue = currentPage - t;
            lowerValue = lowerValue < 1 ? 1 : ((lowerValue + (pageRange - 1) > pageNumbers.length) ? (pageNumbers.length - (pageRange - 1)) : lowerValue);
            setLowerBound(lowerValue);
            setUpperBound(lowerValue + (pageRange - 1));
        }
    }

    const renderPageNumbers = () => {
        return pageNumbers.map(number => {
            {
                return (
                    (number >= lowerBound && number <= upperBound) ?
                        <li className={`${number === currentPage ? 'active' : ''}`} style={props.liClass ? props.liClass : null}
                            key={number}
                            id={number}
                            onClick={handleClick}
                        >
                            {number}
                        </li>
                        : ''
                );
            }
        })
    }

    return (
        <>
            {pageNumbers && pageNumbers.length > 0 ?
                <div className="pagination-container">
                    <ul id="page-numbers">
                        <li style={props.firstLastClass ? props.firstLastClass : null} className={`prevClass ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button style={props.firstButtonClass ? props.firstButtonClass : null} onClick={handleClickFirst}>{props.firstButtonLabel ? props.firstButtonLabel : '<<'}</button>
                        </li>
                        <li style={props.prevNextClass ? props.prevNextClass : null} className={`prevClass ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button style={props.prevButtonClass ? props.prevButtonClass : null} onClick={handleClickPrev}>{props.prevButtonLabel ? props.prevButtonLabel : '<'}</button>
                        </li>
                        {renderPageNumbers()}
                        <li style={props.prevNextClass ? props.prevNextClass : null} className={`nextClass ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
                            <button style={props.nextButtonClass ? props.nextButtonClass : null} onClick={handleClickNext}>{props.nextButtonLabel ? props.nextButtonLabel : '>'}</button>
                        </li>
                        <li style={props.firstLastClass ? props.firstLastClass : null} className={`nextClass ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
                            <button style={props.lastButtonClass ? props.lastButtonClass : null} onClick={handleClickLast}>{props.lastButtonLabel ? props.lastButtonLabel : '>>'}</button>
                        </li>
                    </ul>
                </div>
                : ''}
        </>
    )
}

export default Pagination;