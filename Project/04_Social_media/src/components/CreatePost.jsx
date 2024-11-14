import React from 'react'

function CreatePost() {
  return (
    <form className='form-container'>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Enter your User Id here</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>

    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Post Title</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>

    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Post Content</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>

    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Number of reactions </label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    
    <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          // ref={tagsElement}
          placeholder="Please enter tags using space"
        />
      </div>


    <button type="submit" className="btn btn-primary">Post</button>
  </form>
  )
}

export default CreatePost