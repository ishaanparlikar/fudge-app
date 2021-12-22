import React from 'react'
import Button from '../Button'
import GoalCard from './componants/GoalCard'

const MyGoals = () => {
   return (
      <div>
         <div className="lg:flex text-center justify-between items-center p-4 lg:p-0 lg:my-4 my-2">
            <h1 className='font-bold text-base'>My Goals</h1>

            <Button text='View All Goals' />
         </div>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
            <GoalCard title='Retirement' amount={123456} total={20000000} done={80} />
            <GoalCard title='Vacation Home' amount={123456} total={20000000} done={40} />
            <GoalCard title='Travel' amount={123456} total={20000000} done={100} />

         </div>
      </div>
   )
}

export default MyGoals
