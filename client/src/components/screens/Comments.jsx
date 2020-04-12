import React from 'react';

const Comments = props => (
  <div>
    {
      props.comments.map(comment => (
        <div key={comment.id}>
          <p>{comment.name}</p>
        </div>
      ))
    }
  </div>
)

export default Comments;