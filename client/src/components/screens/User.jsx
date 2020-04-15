import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Favorites from './Favorites';
import { Button, Paper, Container, Link, Grid, Card, CardContent, Typography, List, ListItem } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';


const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
})

class User extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInfo: null
    }
  }

  async componentDidMount() {
    const userInfo = await this.props.getUser(this.props.match.params.id);
    console.log(userInfo);
    this.setState({
      userInfo
    });
  }

  render() {
    console.log(this.props)
    const { userInfo } = this.state;
    const { classes } = this.props;

    if (!userInfo) {
      return (
        <div>
          ...loading...
        </div>
      )
    }
    return (
      <Paper>
      <Grid className={classes.root} container spacing={3}>   
        <Grid item xs={12}>
          <Card>
            <CardContent>
          <Typography component="h4">Username: <span className="username">{userInfo.username}</span></Typography>
          <Typography component="h4">Email: <span className="email">{userInfo.email}</span></Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} className="user-stories">
          <Card>
            <CardContent>
          <Typography component="h3">Your Personal Contributions</Typography>
          {userInfo.stories.map(story => (
            <List component="ul" key={story.id}>
              <ListItem className="story-title">{story.title}</ListItem>
              <ListItem className="story-title">{story.summary}</ListItem>
              <Link component={NavLink} to={`/stories/${story.id}`}>
                <p className="read-more">Read More</p>
            </Link>
              </List>
          ))}
            </CardContent>
          </Card>
        </Grid>
            <hr />
        <Grid item xs={12} sm={6} className="favorite-stories">
          <Card>  
            <CardContent>
          <Typography component="h3">Your Favs</Typography>
          {userInfo.favorites.map(favorite => (
            <List component="ul" key={favorite.id}>
                <ListItem className="story-title">{favorite.story.title}</ListItem>
                <ListItem className="story-summary">{favorite.story.summary}</ListItem>
              <Link component={NavLink} to={`/stories/${favorite.story.id}`}>
                <p className="read-more">Read More</p>
                </Link>
              </List>
          ))}
            </CardContent>
          </Card>
          </Grid>  
        </Grid>
      </Paper>
    )
  }
}

export default withStyles(useStyles)(User);