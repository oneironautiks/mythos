import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../components/screens/Register';
import Login from '../components/screens/Login';
import StoryForm from '../components/shared/StoryForm';
import Stories from '../components/screens/Stories';
import Story from '../components/screens/Story';
import User from '../components/screens/User';
import About from '../components/screens/About';
import CreateStory from '../components/screens/CreateStory';
import EditStory from '../components/screens/EditStory';


const Routes = props => {
  console.log(props)

  return (
    <Switch>
      <Route
        exact path="/login"
        render={(props2) => (
          <Login
            {...props2}
            handleLogin={props.handleLogin}
            handleChange={props.authHandleChange}
            formData={props.authFormData}
          />
        )}
      />
      <Route
        exact path="/register"
        render={() => (
          <Register 
            handleRegister={props.handleRegister}
            handleChange={props.authHandleChange}
            formData={props.authFormData}
        />)}
      />
      <Route
        exact path="/stories"
        render={(props2) => (
          <Stories
            {...props2}
            stories={props.stories}
            formData={props.formData}
            deleteStory={props.deleteStory}
            updateStory={props.updateStory}
            handleSubmit={props.addStory}
            handleChange={props.handleChange}
            setStoryForm={props.setStoryForm}
            getStories={props.getStories}
          />
        )}
      />
      <Route
        exact path="/create-story"
        render={(props2) => (
          <CreateStory
            {...props2}
            formData={props.formData}
            handleSubmit={props.addStory}
            handleChange={props.storyHandleChange}
            setStoryForm={props.setStoryForm}
            story={props.story}
          />
        )}
      />
      <Route
        exact path="/edit-story"
        render={(props2) => (
          <StoryForm
            {...props2}
            formData={props.formData}
            handleSubmit={props.updateStory}
            handleChange={props.storyHandleChange}
            setStoryForm={props.setStoryForm}
            story={props.story}
          />
        )}
      />
      <Route
        exact path="/stories/:id"
        render={(props2) => (
          <Story
            {...props2}
            story={props.oneStory}
            getOneStory={props.getOneStory}
            updateStory={props.updateStory}
            deleteStory={props.deleteStory}
            comments={props.comments}
            handleChange={props.commentForm}
            formData={props.formData}
            addToFavorites={props.addToFavorites}
          />
        )}
      />
      <Route
        exact path="/users/:id"
        render={(props2) => (
          <User
            {...props2}
            getUser={props.getUser}
            user={props.user}
            favorites={props.favorites}
          />
        )}
      />
      <Route 
        exact path="/digital-campfire"
        render={(props2) => (
          <About
          />
        )}
      />
    </Switch>
  )
}

export default Routes;