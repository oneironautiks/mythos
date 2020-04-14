import React from 'react';

const StoryForm = props => (
  <div className="form-container">
    <form onSubmit={props.handleSubmit}>
      <label>Story Title</label>
      <input
        placeholder="title"
        value={props.story.title}
        name="title"
        required
        onChange={props.handleChange}
      />
      <label>Summary</label>
      <input
        placeholder="summary"
        value={props.story.summary}
        name="summary"
        required
        onChange={props.handleChange}
      />
      <label>Origin Info</label>
      <input
        placeholder="summary"
        value={props.story.summary}
        name="summary"
        required
        onChange={props.handleChange}
      />
      
    </form>
  </div>
)

export default StoryForm;