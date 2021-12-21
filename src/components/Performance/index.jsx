import { React, useState } from 'react'
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend
);
export const options = {
   responsive: true,
   maintainAspectRatio: false,
   plugins: {
      legend: {
         position: 'bottom',
      },
      title: {
         // display: true,
         text: 'Chart.js Line Chart',
      },

   },

};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data1 = [25, 52, 25, 60, 37, 72, 20]
const data2 = [30, 32, 10, 78, 40, 60, 50]
export const data = {
   labels,
   datasets: [
      {
         label: 'Dataset 1',
         data: data1,
         borderColor: 'rgb(255, 99, 132)',
         backgroundColor: 'rgba(255, 99, 132, 0.5)',
         lineTension: 1,
         borderWidth: 1,
      },
      {
         label: 'Dataset 2',
         data: data2,
         borderColor: 'rgb(53, 162, 235)',
         backgroundColor: 'rgba(53, 162, 235, 0.5)',
         lineTension: 1,
         borderWidth: 1,
      },
   ],
};
const Performance = () => {
   const [toggle, setToggle] = useState(false)

   return (
      <div>
         <div className='flex justify-between items-center'>
            <h1 className="font-bold text-base w-1/2">My Performance</h1>

            <div className='flex justify-between w-1/2'>
               <button className={`py-2 px-3 hover:bg-gray-200 rounded-t-full rounded-b-full ${toggle ? 'bg-gray-200' : ''}`}>Weekly</button>
               <button className={`py-2 px-3 hover:bg-gray-200 rounded-t-full rounded-b-full ${toggle ? 'bg-gray-200' : ''}`}>Monthly</button>
               <button className={`py-2 px-3 hover:bg-gray-200 rounded-t-full rounded-b-full ${toggle ? 'bg-gray-200' : ''}`}>Yearly</button>
               <button className={`py-2 px-3 hover:bg-gray-200 rounded-t-full rounded-b-full ${toggle ? 'bg-gray-200' : ''}`}>All Time</button>
            </div>
         </div>
         <div className="h-72">

            <Line options={options} data={data} />
         </div>
      </div>
   )
}

export default Performance
