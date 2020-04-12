import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Stories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false
    }
  }

  render() {
    return (
      <div>
        {
          this.props.stories.map(story => (
            <div key={story.id}>
              {
                this.state.edit === story.id 
                  ? 
                  <div>
                    <form onSubmit={(e) => {
                      e.preventDefault();
                      this.props.updateStory(story);
                      this.setState({
                        edit: false
                      })
                    }}>
                      <input
                        name="name"
                        type="text"
                        value={this.props.formData.name}
                        onChange={this.props.handleChange}
                      />
                      <button>Submit</button>
                    </form>
                  </div>
                  :
                  <div>
                    <Link
                      to={`/stories/${story.id}`}
                      onClick={() => this.props.getOneStory(story.id)}
                    >
                      {story.name}
                    </Link>
                    <button onClick={() => {
                      this.props.setStoryForm(story);
                      this.setState({
                        edit: story.id
                      });
                    }}>
                      Edit Story
                    </button>
                    <button onClick={() => {
                      this.props.deleteStory(story)
                    }}>
                      Delete
                    </button>
                  </div>
              }
            </div>
          ))
        }
      </div>
    )
  }
}

export default Stories;