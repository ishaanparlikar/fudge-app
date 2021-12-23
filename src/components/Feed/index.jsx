import {React,useState} from 'react'
import Article from './componants/Article'
import PostData from '../../posts.json'
import Pagination from './componants/Pagination'
const Feed = () => {
      const [posts, setPosts] = useState(PostData)
      const [currentPage,useCurrentPage] = useState(1)
      const [postPerPage,setPostPerPage] = useState(2)

      const indexOfLastPost = currentPage * postPerPage
      const indexOfFirstPost = indexOfLastPost - postPerPage
      const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)

      const paginate = (pageNumber) => {
         useCurrentPage(pageNumber)
      }
   return (

      <div className='p-6 border border-gray-200 rounded-lg h-full'>
         <h4 className="font-bold">Industry News</h4>
         <div className='mt-7'>

            {currentPosts.map(post => (
               <Article key={post.id} title={post.title} description={post.description} linkUrl='#' />

               ))}
               <Pagination pageNum={currentPage}  postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
         </div>
      </div>
   )
}

export default Feed
