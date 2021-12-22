import React from 'react'
import Avatar from './components/Avatar'
import TopComments from './components/Comments'
import Feed from './components/Feed'
import FinancialHealth from './components/FinancialHealth'
import MyGoals from './components/MyGoals'
import Performance from './components/Performance'
import QuickStats from './components/QuickStats'
import TopBar from './components/TopBar'
import Users from './components/Users'
const Dashboard = () => {
   return (
      <>
         <div className='bg-white lg:p-6'>

            <TopBar user='John Doe'/>


            <div className="lg:flex items-center p-4 lg:p-0 lg:mb-10">
               <div className="lg:w-1/2 lg:mx-4">
                  <QuickStats />
               </div>
               <div className="lg:w-1/2 lg:mx-4">
                  <FinancialHealth />
               </div>
            </div>


            <div className="xl:flex items-center p-4 lg:p-0 lg:mb-10">
               <div className='xl:w-1/2 lg:mx-4'>
                  <Performance />
               </div>
               <div className="xl:w-1/2 lg:mx-4">
                  <MyGoals />
               </div>
            </div>



            <div className="xl:flex items-start p-4 lg:p-0 my-4 lg:mb-10">
               <div className='xl:w-1/2 tab:w-full lg:mx-4 mb-5 xl:mb-0  max-h-96 overflow-scroll'>
                  <Feed />
               </div>
               <div className="xl:w-1/2 lg:mx-4 md:flex h-full">
                  <div className='md:w-1/2 md:mr-4  mb-5 xl:mb-0 max-w-sm  overflow-scroll  max-h-96'>
                     <TopComments />
                  </div>

                  <div className='md:w-1/2 w-full  md:ml-4  mb-5 lg:mb-0  max-h-96  overflow-scroll'>
                     <Users />
                  </div>
               </div>
            </div>



         </div>
      </>
   )
}
export default Dashboard

