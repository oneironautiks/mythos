import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import StoryForm from '../shared/StoryForm';


class CreateStory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      added: false
    }
  }

  render() {
    return (
      <>
      <StoryForm
          formData={this.props.formData}
          handleSubmit={this.props.addStory}
          handleChange={this.props.storyHandleChange}
          setStoryForm={this.props.setStoryForm}
          story={this.props.story}
      />
      {/* {
        this.state.add ?
          <div>
            <form onSubmit={(e) => {
              e.preventDefault();
              this.props.handleSubmit();
              this.setState({
                add: false
              });
            }}>
              <input 
                name="name"
                type="text"
                value={this.props.formData.name}
                onChange={this.props.handleChange}
              />
              <button>Submit Story</button>
            </form>
          </div>
          :
          <button onClick={() => {
            this.setState({
              add: true
            })
          }}>Add</button>
        } */}
      </>
    )
  }
}

export default CreateStory;