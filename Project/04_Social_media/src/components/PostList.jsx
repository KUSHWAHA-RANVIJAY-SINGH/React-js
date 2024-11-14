import React, { useContext } from 'react'
import Post from "./Post";
import {PostList as PostListData} from '../store/post-list-store'

function PostList() {
  const {postList} = useContext(PostListData)
 
  return (
    <>
       {postList.map((item)=>{
         return <Post key={item.id} post={item}/>
       })}
       
    </>
  )
}

export default PostList




// {postList.map((post) => (
//   <Post key={post.id} post={post} />
// ))}