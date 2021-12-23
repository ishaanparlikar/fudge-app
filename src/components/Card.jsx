import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
const Card = ({width, amount, text }) => {
   const cx = classNames(
      'bg-white shadow-full lg:px-3 lg:py-4 p-4 mb-2 xl:mb-0 laptop:w-full laptop:my-2  rounded-md',
      width
   )
   return (
      <>
      <div className={cx}>
         <h1 className='text-2xl'>{`$${amount.toLocaleString()}`}</h1>
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
