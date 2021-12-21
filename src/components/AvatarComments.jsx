import React from 'react'
import propTypes from 'prop-types'

const AvatarComments = ({name, status, comment, duration}) => {
   return (
      <>
         <div>
            <div className='flex items-center my-3'>
               <div className='rounded-full relative'>
                  <img className='rounded-full border-2 border-black' src="https://picsum.photos/50" alt="Avatar" />

                  <span className="text-xs text-gray-500 absolute bottom-0 right-0">
                     <span className={`${status ? 'text-green-600' : ''} mr-1`}>
                        &#9679;
                     </span>
                  </span>
               </div>

               <div className='ml-3'>
                  <h5 className="text-sm font-bold leading-3">{name}</h5>
                  <small className="text-xs text-gray-500 leading-3">{duration} hours ago</small>

               </div>
            </div>
            <p className='text-md leading-4'>{comment}</p>
         </div>
      </>
   )
}
AvatarComments.propTypes = {
   name: propTypes.string.isRequired,
   status: propTypes.bool,
   comment: propTypes.string.isRequired,
}
export default AvatarComments
