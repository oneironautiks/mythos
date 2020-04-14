import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Layout from '../shared/Layout';

class Story extends Component {
  constructor(props) {
    super(props);

    this.state = {
      story: null,
      updated: false,
      deleted: false
    }
  }

  async componentDidMount() {
    try {
      const story = await this.props.getOneStory(this.props.match.params.id);
      this.setState({
        story
      })
    } catch (err) {
      console.error(err);
    }
  }

  destroy = () => {
    this.props.deleteStory(this.state.story);
    this.setState({
      deleted: true
    });
  }

  render() {
    const { story, deleted } = this.state;

    if (!story) {
      return (
        <Layout>
          <h1 className="loading">Loading...</h1>
        </Layout>
      );
    }
    
    if (deleted) {
      return (
        <Redirect
          to={{
            pathname: '/stories',
            state: { msg: 'Story successfully deleted!' }
          }}
        />
      );
    }

    return (
      <Layout>
        {
          // this.props.story 
          // &&
          // <div>
          //   <h1>{this.props.story.namecp}</h1>
          // </div>
          <div className="story-container">
            <Link to="stories">
              <span className="return">Back to all stories</span>
            </Link>
            <main className="story">
              <h1>{story.title}</h1>
            </main>
          </div>
        }
      </Layout>
    )
  }
}

export default Story;