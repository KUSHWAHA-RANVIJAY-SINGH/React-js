// import React, { useContext } from 'react'
const Post =({post})=> {
// const user =useContext(PostListProvider)
  return (
    <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role='alert'>This post has been reacted bt {post.reactions} people.</div>
  </div>
</div>
  )
}

export default Post