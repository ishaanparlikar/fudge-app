import React from 'react'
import FinancialHealth from './components/FinancialHealth'
import MyGoals from './components/MyGoals'

import QuickStats from './components/QuickStats'
const App = () => {
   return (
      <>
         <div>
            <div className="md:flex items-center p-4 lg:p-0">
               <div className="w-1/2 mx-4">
                  <QuickStats />
               </div>
               <div className="w-1/2 mx-4">
                  <FinancialHealth />
               </div>
            </div>
            <div className="md:flex items-center p-4 lg:p-0">
               <div className='w-1/2 mx-4'>

               </div>
               <div className="w-1/2 mx-4">

               <MyGoals />
               </div>
            </div>
         </div>
      </>
   )
}
export default App

