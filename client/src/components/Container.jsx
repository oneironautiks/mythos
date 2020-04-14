import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Register from './screens/Register';
import Login from './screens/Login';
import CreateStory from './screens/CreateStory';
// import Header from './shared/Header';
import Layout from './shared/Layout';
import Stories from './screens/Stories';
// import Story from './screens/Story';

import {
  loginUser,
  registerUser,
  showStories,
  showStoryComments,
  showOneStory,
  postStory,
  postStoryComment,
  updateStory,
  destroyStory,
  updateStoryComment,
  destroyComment,
  removeToken,
  verifyUser
} from '../services/api-helper';

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      stories: [],
      comments: [],
      oneStory: null,
      formData: {
        name: ""
      },
      newComment: '',
      authFormData: {
        username: "",
        email: "",
        password: ""
      }
    }
  }


  componentDidMount = () => {
    this.getStories();
    this.getStoryComments();
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

  addStory = async () => {
    const newStory = await postStory(this.state.formData);
    this.setState(state => ({
      stories: [...state.stories, newStory],
      formData: {
        name: ""
      }
    }));
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

  getStoryComments = async (story) => {
    const comments = await showStoryComments(story);
    this.setState({
      comments
    })
  }

  addCommentToStory = async (story, comment) => {
    const newComment = await postStoryComment(story, comment);
    this.setState(state => ({
      comments: [...state.comments, newComment],
      formData: {
        name: ""
      }
    }));
  }

  updateComment = async (story, comment) => {
    const updatedComment = await updateStoryComment(this.state.formData, story, comment);
    this.setState(state => ({
      comments: state.comments.map(oneComment => {
        return oneComment.id === comment.id ? updatedComment : oneComment;
      })
    }));
  }

  deleteComment = async (comment) => {
    await destroyComment(comment.id);
    this.setState(state => ({
      comments: state.comments.filter(oneComment => oneComment.id !== comment.id)
    }));
  }

  setCommentForm = (comment) => {
    this.setState({
      formData: {
        name: comment.name
      }
    });
  }

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

  render() {
    console.log(this.state.user)
    return (
      <div>
        {/* <header>
          <Link to="/"><h1>mythos</h1></Link>
          {
            this.state.user 
              ?
              <div>
                <h3>
                  Welcome, {this.state.user && this.state.user.username}
                  <button onClick={this.handleChange}>logout</button>
                </h3>
                <Link to="/stories">View All Stories</Link>
                <hr />
              </div>
              : 
              <button onClick={this.handleLoginButton}>Login/Register</button>
          }
        </header> */}
        {/* <Header
          user={this.state.user}
          handleLogout={this.handleLogout}
          handleLoginButton={this.handleLoginButton}
          /> */}
        <Layout
          user={this.state.user}
          handleLogout={this.handleLogout}
          handleLoginButton={this.handleLoginButton}
          />
        <Route
          exact path="/login" 
          render={(props) => (
            <Login
              handleLogin={this.handleLogin}
              handleChange={this.authHandleChange}
              formData={this.state.authFormData}
            />
          )} 
        />
        <Route 
          exact path="/register"
          render={(props) => (
          <Register 
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData}
            />
          )}
        />
        <Route 
          exact path="/stories"
          render={(props) => (
            <Stories 
              stories={this.state.stories}
              formData={this.state.formData}
              getOneStory={this.getOneStory}
              deleteStory={this.deleteStory}
              updateStory={this.updateStory}
              handleSubmit={this.addStory}
              handleChange={this.handleChange}
              setStoryForm={this.setStoryForm}
              getStories={this.getStories}
            />
          )}
        />
        <Route 
          exact path="/stories"
          render={(props) => (
            <CreateStory 
              formData={this.state.formData}
              handleSubmit={this.state.handleSubmit}
              handleChange={this.state.handleChange}
              setStoryForm={this.state.setStoryForm}
            />
          )}
          />
        {/* <Route
          exact path="/stories/:id"
          render={(props) => (
            <Story
              story={this.state.oneStory}
              comments={this.state.comments}
              handleChange={this.commentForm}
              addCommentToStory={this.addCommentToStory}
            />
          )}
          /> */}
        {/* <Route
          exact path="/stories/:id/comments"
          render={(props) => (
            <Comments 
              comments={this.state.comments}
              updateComment={this.updateComment}
              deleteComment={this.deleteComment}
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              formData={this.formData}
              setCommentForm={this.setCommentForm}
            />
          )}
          /> */}
      </div>
    )
  }
}

export default Container;