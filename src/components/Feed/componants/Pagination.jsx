import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { number } from 'prop-types'

const Pagination = ({ postPerPage, totalPosts, paginate, pageNum }) => {
   const pageNumbers = []
   for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
      pageNumbers.push(i)
   }
 
   return (
      <nav className='flex items-center bg-blue-100 rounded-lg w-40 p-2'>
         <FontAwesomeIcon icon={faChevronLeft} />
         <ul className='flex w-20 mx-auto  items-center justify-between'>
            {pageNumbers.map(number => (
               <li key={number} className={`pagination-item text-blue-600 ${pageNum==number ? 'font-bold text-black' : ''}`}>
                  <a onClick={() => paginate(number)} href='#!'>{number}</a>
               </li>
            ))}
         </ul>
         <FontAwesomeIcon icon={faChevronRight} />
      </nav>
   )
}

export default Pagination
