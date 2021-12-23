import React from 'react'
import propTypes from 'prop-types'
const TopBar = ({user}) => {
   return (
      <>

         <div className="row flex xl:flex-row flex-col items-center justify-between my-4 lg:mx-4">
            <div className='inline-flex items-center'>
               <img className='rounded-full mr-2' src="/src/img/profile.jpg" alt="" />

               <p className='font-light'>Welcome , <span className="font-bold">{user}</span> Here is your Dashboard</p>
            </div>

            <div className='inline-flex items-center w-52 justify-between'>
               <p className="font-light">Currency:GBP</p>
               <p className="font-light">My Account</p>
            </div>
         </div>

       

      </>
   )
}
TopBar.propTypes = {
   user: propTypes.string.isRequired
}
export default TopBar
