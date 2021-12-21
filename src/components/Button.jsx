import React from 'react'
import PropTypes from 'prop-types'
const Button = ({text}) => {
   return (
      <div>
         <button className='bg-gray-200 rounded-t-full rounded-b-full p-2 text-xs hover:bg-gray-300'>{text}</button>
      </div>
   )
}
Button.propTypes={
   text: PropTypes.string.isRequired
}
export default Button
