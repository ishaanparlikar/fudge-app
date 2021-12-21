import React from 'react'
import PropTypes from 'prop-types'
const Card = ({width, amount, text }) => {
   return (
      <>
      <div className={`bg-white shadow-full lg:p-5 p-4 mb-2 xl:mb-0  rounded-md ${width}`}>
         <h1 className='lg:text-2xl'>{`$${amount.toLocaleString()}`}</h1>
         <small className='text-xs'>{text}</small>
      </div>
      </>
   )
}

Card.propTypes = {
   width: PropTypes.string,
   amount: PropTypes.number.isRequired,
   text: PropTypes.string.isRequired
}
export default Card
