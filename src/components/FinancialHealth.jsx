import React from 'react'
import ProgressCard from './ProgressCard'
import Button from './Button'
const FinancialHealth = () => {
   return (
      <>
         <div className='w-full'>
            <div className='lg:flex text-center  mb-5 lg:mb-0 justify-between items-center'>
               <h5 className="font-bold text-base">My Financial Health</h5>
               <Button text='View Financial Health' />
            </div>
            <div className="max-w-3xl bg-white shadow-full mt-3 rounded-md w-full flex flex-col justify-between">
               <div className="px-8 py-2 mb-1">

                  <ProgressCard done='78' />


               </div>
               <div className="border-t p-2 text-center">
                  <small className="text-xxs">
                     Your financial health status is <span className='text-green-700 font-bold uppercase'>Good</span>. However there’s still room for improvement. <a className='text-blue-700 underline' href="#"> See how you can improve</a>
                  </small>
               </div>
            </div>
         </div>
      </>
   )
}

export default FinancialHealth
