import React from 'react'
import AvatarComments from '../AvatarComments'
const TopComments = () => {
   return (
      <>
         <div className='p-6 border border-gray-200 rounded-lg'>
            <h4 className="font-bold">Top Comments</h4>

            <AvatarComments
               name='John Doe'
               status={true}
               comment='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, et nihil eos nostrum, sit provident voluptate tempora optio esse fugiat ducimus corporis quas perspiciatis. Nobis quibusdam quasi odio possimus ipsa cumque ducimus nisi quo asperiores?'
               duration={2}
            />
            <AvatarComments
               name='John Doe'
               status={true}
               comment='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, et nihil eos nostrum, sit provident voluptate tempora optio esse fugiat ducimus corporis quas perspiciatis. ?'
               duration={2}
            />
            <AvatarComments
               name='John Doe'
               status={true}
               comment='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,'
               duration={2}
            />
         </div>
      </>
   )
}


export default TopComments
