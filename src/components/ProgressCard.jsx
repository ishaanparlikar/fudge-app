import { React, useState } from 'react'
import Button from './Button';

const ProgressCard = ({ done }) => {
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
            <div className="progress">
               <div className="progress-done" style={style}></div>
               <div className="flex justify-between mt-1">
                  <small className='poor uppercase font-bold text-xs'>Poor</small>
                  <small className='average uppercase font-bold text-xs'>Average</small>
                  <small className='good uppercase font-bold text-xs'>Good</small>
               </div>
            </div>
      </>

   )
}



export default ProgressCard
