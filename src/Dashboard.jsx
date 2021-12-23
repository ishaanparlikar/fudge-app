import { React, useEffect, useState } from 'react'
import Avatar from './components/Avatar'
import TopComments from './components/Comments'
import Feed from './components/Feed'
import FinancialHealth from './components/FinancialHealth'
import MyGoals from './components/MyGoals'
import Performance from './components/Performance'
import QuickStats from './components/QuickStats'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import Users from './components/Users'
import { CSSTransition } from 'react-transition-group'
const Dashboard = () => {
   const [active, setActive] = useState(false)
   const [showDash, setShowDash] = useState(false)
   useEffect(() => {
      setTimeout(() => {
         setActive(true)
      }, 600);
   }, [])
   return (
      <>
         <div className="xl:flex h-screen main-bg-img2">

            {/* {active ?


               : ''} */}

            <Sidebar />

            <div className='xl:py-6 pt-20 w-full z-20 relative'>
               <div className={`absolute bg-white  dashboard h-full overflow-scroll ${active ? 'active' : ''}`}>

                  <div>
                     <TopBar user='John Doe' />

                     <div className="row flex inner-dashboard  items-center mx-4 my-8">
                        <h1 className="text-2xl w-56">Dashboard Home</h1>
                        <hr className='xl:block hidden' />
                     </div>
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
               </div>
            </div>
         </div>
      </>
   )
}
export default Dashboard

