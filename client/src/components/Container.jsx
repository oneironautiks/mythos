import React, { Component } from 'react';
// import { Route, Link } from 'react-router-dom';
// import { withRouter } from 'react-router';
// import Register from './screens/Register';
// import Login from './screens/Login';
// import CreateStory from './screens/CreateStory';
// import Header from './shared/Header';
import Layout from './shared/Layout';
// import Stories from './screens/Stories';
// import Story from './screens/Story';
import Routes from '../routes/Routes';

import {
  loginUser,
  registerUser,
  showStories,
  showOneStory,
  postStory,
  updateStory,
  destroyStory,
  removeToken,
  verifyUser,
  addToFavorites,
  showUser
} from '../services/api-helper';

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      stories: [],
      comments: [],
      story: {
        title: '',
        summary: '',
        place_of_origin: '',
       date_of_origin: '',
        story: '',
      },
      oneStory: null,
      formData: {
        name: ""
      },
      newComment: '',
      authFormData: {
        username: "",
        email: "",
        password: ""
      },
      viewUser: null,
      favorites: []
    }
  }


  componentDidMount = () => {
    this.getStories();
    // this.getStoryComments();
    this.handleVerify();
  }

  getStories = async () => {
    const stories = await showStories();
    this.setState({
      stories
    });
  }

  getOneStory = async (id) => {
    const oneStory = await showOneStory(id);
    this.setState({
      oneStory
    });
  }

  addStory = async (e) => {
    e.preventDefault();
    console.log(this.state.story)
    const newStory = await postStory({ ...this.state.story, user_id: this.state.user.id });
    this.setState(state => ({
      stories: [...state.stories, newStory]
    }));
  }

  addStoryToFavorites = async (id) => {
    const { favorites } = this.state;
    const favorite = await addToFavorites({ user_id: this.state.user.id, story_id: id });
    favorites.push(favorite);
    this.setState({
      favorites
    });
  }

  getUser = async (id) => {
    const viewUser = await showUser(id);
    this.setState({
      viewUser
    })
    return viewUser;
  }

  updateStory = async (story) => {
    const updatedStory = await updateStory(this.state.formData, story);
    this.setState(state => ({
      stories: state.stories.map(oneStory => {
        return oneStory.id === story.id ? updatedStory : oneStory;
      })
    }));
  }

 deleteStory = async (story) => {
    await destroyStory(story.id);
    this.setState(state => ({
      stories: state.stories.filter(oneStory => oneStory.id !== story.id)
    }));
 }
  
  handleLoginButton = () => {
    this.props.history.push('/login');
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      formData: {
        [name]: value
      }
    });
  }

  setStoryForm = (story) => {
    this.setState({
      formData: {
        name: story.name
      }
    });
  }

  // getStoryComments = async (story) => {
  //   const comments = await showStoryComments(story);
  //   this.setState({
  //     comments
  //   })
  // }

  // addCommentToStory = async (story, comment) => {
  //   const newComment = await postStoryComment(story, comment);
  //   this.setState(state => ({
  //     comments: [...state.comments, newComment],
  //     formData: {
  //       name: ""
  //     }
  //   }));
  // }

  // updateComment = async (story, comment) => {
  //   const updatedComment = await updateStoryComment(this.state.formData, story, comment);
  //   this.setState(state => ({
  //     comments: state.comments.map(oneComment => {
  //       return oneComment.id === comment.id ? updatedComment : oneComment;
  //     })
  //   }));
  // }

  // deleteComment = async (comment) => {
  //   await destroyComment(comment.id);
  //   this.setState(state => ({
  //     comments: state.comments.filter(oneComment => oneComment.id !== comment.id)
  //   }));
  // }

  // setCommentForm = (comment) => {
  //   this.setState({
  //     formData: {
  //       name: comment.name
  //     }
  //   });
  // }

//   commentForm = (e) => {
//     this.handleChange(e);
//  }

  // ====================================
  // ============= Auth =================
  // ====================================

  handleLogin = async () => {
    const user = await loginUser(this.state.authFormData);
    this.setState({
      user
    });
  }

  handleRegister = async (e) => {
    e.preventDefault();
    console.log(this.state.authFormData);
    const user = await registerUser(this.state.authFormData);
    this.setState({
      user
    });
  }

  handleVerify = async () => {
    const user = await verifyUser();
    if (user) {
      this.setState({
        user
      });
    }
  }

  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.setState({
      user: null
    });
    removeToken();
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(state => ({
      authFormData: {
        ...state.authFormData,
        [name]: value
      }
    }));
  }

  storyHandleChange = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    this.setState(state => ({
      story: {
        ...state.story,
        [name]: value
      }
    }))
      console.log(this.state.story);
  }

  render() {
    return (
      <div>
        <Layout
          user={this.state.user}
          handleLogout={this.handleLogout}
          handleLoginButton={this.handleLoginButton}
        >
        <Routes 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          authFormData={this.state.authFormData}
          formData={this.state.formData}
          handleRegister={this.handleRegister}
          handleLogin={this.handleLogin}
          authHandleChange={this.authHandleChange}
          stories={this.state.stories}
          getOneStory={this.getOneStory}
          deleteStory={this.deleteStory}
          updateStory={this.updateStory}
          addStory={this.addStory}
          setStoryForm={this.setStoryForm}
          getStories={this.getStories}
          comments={this.state.comments}
          story={this.state.story}
          oneStory={this.state.oneStory}
          storyHandleChange={this.storyHandleChange}
          addToFavorites={this.addStoryToFavorites}
          getUser={this.getUser}
          user={this.state.user}
          // favorites={this.state.favorites}
          />
       </Layout>
      </div>
    )
  }
}

export default Container;