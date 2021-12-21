import React from 'react'
import Avatar from './components/Avatar'
import TopComments from './components/Comments'
import Feed from './components/Feed'
import FinancialHealth from './components/FinancialHealth'
import MyGoals from './components/MyGoals'
import Performance from './components/Performance'
import QuickStats from './components/QuickStats'
import Users from './components/Users'
const Dashboard = () => {
   return (
      <>
         <div className='bg-white p-6'>

            <div className="md:flex items-center p-4 lg:p-0 lg:mb-10">
               <div className="w-1/2 mx-4">
                  <QuickStats />
               </div>
               <div className="w-1/2 mx-4">
                  <FinancialHealth />
               </div>
            </div>


            <div className="md:flex items-center p-4 lg:p-0 lg:mb-10">
               <div className='w-1/2 mx-4'>
                  <Performance/>
               </div>
               <div className="w-1/2 mx-4">
                  <MyGoals />
               </div>
            </div>



            <div className="md:flex items-start p-4 lg:p-0 my-4 lg:mb-10">
               <div className='w-1/2 mx-4  max-h-96 overflow-scroll'>
                  <Feed/>
               </div>
               <div className="w-1/2 mx-4 md:flex h-full">
                  <div className='w-1/2 mr-4 max-w-sm  overflow-scroll  max-h-96'>
                     <TopComments/>
                  </div>
   
                  <div className='w-1/2 ml-4  max-h-96  overflow-scroll'>
                     <Users />
                  </div>
               </div>
            </div>



         </div>
      </>
   )
}
export default Dashboard

