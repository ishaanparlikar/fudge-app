import React from 'react'
import propTypes from 'prop-types'
const TopBar = ({user}) => {
   return (
      <>

         <div className="row flex items-center justify-between my-4 lg:mx-4">
            <div className='inline-flex items-center'>
               <img className='rounded-full mr-2' src="https://picsum.photos/55" alt="" />

               <p className='font-light'>Welcome , <span className="font-bold">{user}</span> Here is your Dashboard</p>
            </div>

            <div className='inline-flex items-center w-52 justify-between'>
               <p className="font-light">Currency:GBP</p>
               <p className="font-light">My Account</p>
            </div>
         </div>

         <div className="row flex items-center lg:mx-4 my-8">
            <h1 className="text-2xl w-56">Dashboard Home</h1>
            <hr />
         </div>

      </>
   )
}
TopBar.propTypes = {
   user: propTypes.string.isRequired
}
export default TopBar
