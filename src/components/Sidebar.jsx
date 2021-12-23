import { faBars, faChartLine,faTimes, faFile, faPhone, faSignal, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {React,useState} from 'react'
import logo from '../img/Group 1@2x.png'

const Sidebar = () => {
   const [isOpen, setIsOpen] = useState(false)
   if(isOpen){
      document.body.style.overflow = 'hidden'
   }
   else{
      document.body.style.overflow = 'auto'
   }
   return (
      <>
         <nav className='h-auto fixed xl:static top-0 right-0 xl:w-auto  w-full z-20  navbar'>
            <div className={`xl:w-72 xl:h-full transition-all delay-150 ${isOpen ? `h-screen` : `h-16 overflow-hidden`}  flex flex-col items-center xl:p-9 p-3  justify-between xl:bg-transparent bg-green-900`}>

               <div className="logo z-10 relative w-full flex items-center justify-center">
                  <img className='' height="42" width="127" src={logo} alt="" />
                  <span onClick={()=>setIsOpen(!isOpen)} className="hamburger-icon xl:hidden text-white absolute top-2 right-3 cursor-pointer hover:animate-bounce">
                     {isOpen ? <FontAwesomeIcon size='lg' icon={faTimes} /> : <FontAwesomeIcon size='lg' icon={faBars} />}
                     
                  </span>
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
         </nav>
      </>
   )
}

export default Sidebar