import React from 'react'
import Avatar from '../Avatar'
const Users = () => {
   return (
      <>

      <div className='p-6 border border-gray-200 rounded-lg'>
         <h4 className="font-bold">Users</h4>
         
            <div>
               <Avatar status={false} name='John Doe' />
               <Avatar status={true} name='John Doe' />
               <Avatar status={true} name='John Doe' />
               <Avatar status={false} name='John Doe' />
               <Avatar status={false} name='John Doe' />
               <Avatar status={true} name='John Doe' />
            </div>
      </div>
      </>
   )
}

export default Users
