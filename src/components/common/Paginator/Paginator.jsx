import React, {useState} from 'react';
import s from './Paginator.module.css';

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged  }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionSize = 10;

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftBorder = (portionNumber - 1) * portionSize + 1;
    let rightBorder  = leftBorder + portionSize;

    return (<div>
            { portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber-1)}}>left</button> }

            {pages
                .filter(p => p>=leftBorder && p<=rightBorder)
                .map(p => {
                return <span className={currentPage === p ? s.selectedPage : ''}
                             onClick={() => {
                                 onPageChanged(p)
                             }}
                >{p}</span>
            })}


            { portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber+1)}}>right</button> }

        </div>
    )
};

export default Paginator;