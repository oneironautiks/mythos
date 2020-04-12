import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class CreateStory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      add: false
    }
  }

  render() {
    return (
    <div>
      {
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
        }
      </div>
    )
  }
}

export default CreateStory;