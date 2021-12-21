import React from 'react'
import Card from './Card'

const QuickStats = () => {
   return (
      <>
         <div className='max-w-1/2 w-full'>

            <h5 className='font-bold text-base'>Quick Stats</h5>
            <div className="flex flex-wrap justify-between mt-4">
               <Card width={'w-72'} amount={123123} text={'Your net worth as of today'} />
               <Card width={'w-48'} amount={123123} text={'Your net worth as of today'} />
               <Card width={'w-48'} amount={123123} text={'Your net worth as of today'} />
            </div>
         </div>

      </>
   )
}

export default QuickStats
