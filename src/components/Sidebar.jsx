import { faChartLine, faChevronRight, faFile, faPhone, faSignal, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logo from '../img/Group 1@2x.png'
const Sidebar = () => {
   return (
      <>
         <div className=' h-auto'>
            <div className="w-72 h-full main-bg-img flex flex-col items-center p-9 justify-between">

               <div className="logo z-10">
                  <img className='' height="42" width="127" src={logo} alt="" />
               </div>

               <ul className="menu z-10 w-full mb-auto mt-28 flex flex-col items-center">
                  <li className='flex my-4 p-3  items-center hover:bg-green-700 w-48 text-white rounded-lg text-center'>
                     <span className='mr-4'>
                        <FontAwesomeIcon icon={faChartLine} />
                     </span>
                     <a className='text-white' href="#">
                        Dashboard</a>

                  </li>
                  <li className='flex my-4 p-3  items-center hover:bg-green-700 w-48 text-white rounded-lg text-center'>
                     <span className='mr-4'>
                        <FontAwesomeIcon icon={faUserCircle} />
                     </span>
                     <a className='text-white' href="#">
                        Advisor</a>
                  </li>
                  <li className='flex my-4 p-3  items-center hover:bg-green-700 w-48 text-white rounded-lg text-center'>
                     <span className='mr-4'>
                        <FontAwesomeIcon icon={faFile} />
                     </span>
                     <a className='text-white' href="#">
                        My Document</a>

                  </li>
                  <li className='flex my-4 p-3  items-center hover:bg-green-700 w-48 text-white rounded-lg text-center'>
                     <span className='mr-4'>
                        <FontAwesomeIcon icon={faSignal} />
                     </span>
                     <a className='text-white' href="#">
                        News Feed</a>
                     
                  </li>
                  <li className='flex my-4 p-3  items-center hover:bg-green-700 w-48 text-white rounded-lg text-center'>
                     <span className='mr-4'>
                        <FontAwesomeIcon icon={faPhone} />
                     </span>
                     <a className='text-white' href="#">
                        Support</a>

                  </li>


               </ul>

            </div>
         </div>
      </>
   )
}

export default Sidebar