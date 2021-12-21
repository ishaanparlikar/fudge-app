import React from 'react'

const Article = ({ title, description, linkUrl }) => {
   return (
      <div className='mb-4'>
         <span className="text-xs text-gray-500">
            Date Posted
         </span>
         <h4 className="font-bold text-md mb-2">{title}</h4>
         <p className='mb-2'>{description}</p>
         <a href={linkUrl} className='text-blue-600 underline mb-2'>Read Full Article</a>
      </div>
   )
}

export default Article
