import { React, useState } from 'react'
import propTypes from 'prop-types'
import ProgressCard from '../../ProgressCard'
import RoundedProgress from './RoundedProgress';
const GoalCard = ({ title, amount, total,done }) => {
   const [style, setStyle] = useState({});

   setTimeout(() => {
      const newStyle = {
         opacity: 1,
         width: `${done}%`
      }

      setStyle(newStyle);
   }, 200);
   return (
      <>
         <div className="w-full rounded-md shadow-full bg-white flex flex-col items-center h-72 justify-between">

            <div className="p-5 flex flex-col w-full h-full items-center justify-between">
               <h1 className="font-bold text-base text-center">
                  {title}
               </h1>
            
                <div className='my-auto'>
                   <RoundedProgress strokeWidth={1.5} percentage={done}/>
                </div>
            </div>

            <div className="w-full border-t-2 flex justify-between px-3 py-2">
               <small className='text-xs'>{`$${amount.toLocaleString()}`}</small>
               <small className='text-xs text-gray-400'>{`$${total.toLocaleString()}`}</small>
            </div>

         </div>
      </>
   )
}
GoalCard.propTypes = {
   title: propTypes.string.isRequired
}
export default GoalCard
