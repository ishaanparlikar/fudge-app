import React from 'react'

const RoundedProgress = ({ strokeWidth, percentage }) => {
   const radius = (50 - strokeWidth / 2);
   const pathDescription = `
      M 50,50 m 0,-${radius}
      a ${radius},${radius} 0 1 1 0,${2 * radius}
      a ${radius},${radius} 0 1 1 0,-${2 * radius}
    `;

   const diameter = Math.PI * 2 * radius;
   const progressStyle = {
      stroke: '#74b35a',
      strokeLinecap: 'round',
      strokeDasharray: `${diameter}px ${diameter}px`,
      strokeDashoffset: `${((100 - percentage) / 100 * diameter)}px`,
   };

   return (
      <>
      <svg
         className={'CircularProgressbar'}
         viewBox="0 0 100 100"
         width={180}
         height={180}
      >
         <path
            className="CircularProgressbar-trail"
            d={pathDescription}
            strokeWidth={strokeWidth}
            fillOpacity={0}
            style={{
               stroke: '#e7e7e7',
            }}
         />

         <path
            className="CircularProgressbar-path"
            d={pathDescription}
            strokeWidth={strokeWidth}
            fillOpacity={0}
            style={progressStyle}
         />

         <text
            className="CircularProgressbar-text"
            x={50}
            y={45}
            style={{
               fill: '#000000',
               fontSize: '16px',
               dominantBaseline: 'central',
               textAnchor: 'middle',
            }}
         >
            {`${percentage}%`}
         </text>
         <text
            className="CircularProgressbar-text"
            x={50}
            y={60}
            style={{
               fill: '#000000',
               fontSize: '8px',
               dominantBaseline: 'central',
               textAnchor: 'middle',
            }}
         >
            on Track
         </text>
      </svg>
      </>
      
   );
};
export default RoundedProgress
