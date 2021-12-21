import React from 'react'
import Article from './componants/Article'

const Feed = () => {
   return (

      <div className='p-6 border border-gray-200 rounded-lg'>
         <h4 className="font-bold">Industry News</h4>
         <div className='mt-7'>

            <Article
               title='The Future of Work'
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum numquam, rem quisquam molestiae ullam quos in nulla tenetur eligendi optio nemo illum nobis facere ducimus. Illum voluptatum cumque vel.'
               url='#'
            />
            <Article
               title='The Future of Work'
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum numquam, rem quisquam molestiae ullam quos in nulla tenetur eligendi optio nemo illum nobis facere ducimus. Illum voluptatum cumque vel.'
               url='#'
            />
            <Article
               title='The Future of Work'
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum numquam, rem quisquam molestiae ullam quos in nulla tenetur eligendi optio nemo illum nobis facere ducimus. Illum voluptatum cumque vel.'
               url='#'
            />
         </div>
      </div>
   )
}

export default Feed
