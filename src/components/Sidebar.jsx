import React from 'react'

const Sidebar = () => {
   return (
      <>
         <div className=' h-auto'>
            <div className="w-72 h-full main-bg-img flex flex-col items-center p-9 justify-between">

               <div className="logo z-10">
                  <img className='' height="42" width="127" src="/src/img/Group 1@2x.png" alt="" />
               </div>

               <ul className="menu z-10 w-full mb-auto mt-28">
                  <li className='flex my-4 items-center hover:bg-green-700 w-full rounded-lg text-center'>
                     <a className='text-white p-3 w-full' href="#">Dashboard</a>
                  </li>
                  <li className='flex my-4 items-center hover:bg-green-700 w-full rounded-lg text-center'>
                     <a className='text-white p-3 w-full' href="#">Advisors</a>
                  </li>
                  <li className='flex my-4 items-center hover:bg-green-700 w-full rounded-lg text-center'>
                     <a className='text-white p-3 w-full' href="#">My Documents</a>
                  </li>
                  <li className='flex my-4 items-center hover:bg-green-700 w-full rounded-lg text-center'>
                     <a className='text-white p-3 w-full' href="#">News Feed</a>
                  </li>
                  <li className='flex my-4 items-center hover:bg-green-700 w-full rounded-lg text-center'>
                     <a className='text-white p-3 w-full' href="#">Support</a>
                  </li>

               </ul>

            </div>
         </div>
      </>
   )
}

export default Sidebar