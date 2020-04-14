import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../components/screens/Register';
import Login from '../components/screens/Login';
import CreateStory from '../components/screens/CreateStory';
import Stories from '../components/screens/Stories';
import Story from '../components/screens/Story';


const Routes = props => (
  <Switch>
        <Route
        exact path="/login" 
        render={(props) => (
          <Login
            handleLogin={props.handleLogin}
            handleChange={props.authHandleChange}
            formData={props.authFormData}
          />
        )} 
      />
      <Route 
        exact path="/register"
        render={(props) => (
        <Register 
          handleRegister={props.handleRegister}
          handleChange={props.authHandleChange}
          formData={props.authFormData}
          />
        )}
      />
      <Route 
        exact path="/stories"
        render={(props) => (
          <Stories 
            stories={props.stories}
            formData={props.formData}
            getOneStory={props.getOneStory}
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
        exact path="/stories"
        render={(props) => (
          <CreateStory 
            formData={props.formData}
            handleSubmit={props.handleSubmit}
            handleChange={props.handleChange}
            setStoryForm={props.setStoryForm}
          />
        )}
    />
     <Route
          exact path="/stories/:id"
          render={(props) => (
            <Story
              story={props.story}
              getOneStory={props.getOneStory}
              updateStory={props.updateStory}
              deleteStory={props.deleteStory}
              comments={props.comments}
              handleChange={props.commentForm}
              addCommentToStory={props.addCommentToStory}
              formData={props.formData}
            />
          )}
          />
    </Switch>
)

export default Routes;