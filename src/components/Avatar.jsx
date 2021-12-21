import React from 'react'

const Avatar = ({name,status}) => {
   return (
      <div className='flex items-center my-3'>
         <div className='rounded-full'>
            <img className='rounded-full' src="https://picsum.photos/65" alt="Avatar" />
         </div>

         <div className='ml-3'>
            <h5 className="text-sm font-bold">{name}</h5>
            <span className="text-xs text-gray-500">
               <span className={`${status ? 'text-green-600' : ''} mr-1`}>
                  &#9679; 
               </span>
                  {status ? 'Online' : 'Offline'}
            </span>
         </div>
      </div>
   )
}

export default Avatar
