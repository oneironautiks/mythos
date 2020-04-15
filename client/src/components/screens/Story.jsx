import React, { Component } from 'react';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import Layout from '../shared/Layout';
import { Button, Link, Container, Typography, Grid, Card } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    minHeight: '50vh'
    // color: theme.palette.text.secondary,
  },
});

// const classes = useStyles();

class Story extends Component {
  constructor() {
    super();

    this.state = {
      story: null,
      updated: false,
      deleted: false
    }
  }

  componentDidMount = async () => {
      console.log(this.props)
     await this.props.getOneStory(this.props.match.params.id);
   
  }

  destroy = () => {
    this.props.deleteStory(this.state.story);
    this.setState({
      deleted: true
    });
  }

  render() {
    const { deleted } = this.state;
    const { classes } = this.props;
    if (!this.props.story) {
      return (
        <div>
          <h1 className="loading">Loading...</h1>
        </div>
      );
    }
    
    if (deleted) {
      return (
        <Redirect
          to={{
            pathname: '/stories',
            state: { msg: 'this.props.oneStory successfully deleted!' }
          }}
        />
      );
    }

    return (
      <Grid className={classes.root} container spacing={3}>
        {
          // this.props.this.props.oneStory 
          // &&
          // <div>
          //   <h1>{this.props.this.props.oneStory.namecp}</h1>
          // </div>
          <Grid item xs={12} sm={6}>
            <Link
              component={RouterLink}
              to="/stories">
            {/* <Button
                size="small"
                color="primary"
                component={RouterLink}
                to="/stories"
              > */}
              <span className="return">Back to all stories</span>
                {/* </Button> */}
            </Link>
            <Card className={classes.card}>
              <h1>{this.props.story.title}</h1>
              <h2>{this.props.story.story}</h2>
              <Button
                size="small"
                color="primary"
                onClick={() => this.props.addToFavorites(this.props.story.id)}
              >Favorite</Button>
              <Button
                size="small"
                color="primary"
                onClick={() => this.destroy(this.props.story.id)}
              >Delete</Button>
            </Card>
          </Grid>
        }
      </Grid>
    )
  }
}

export default withStyles(useStyles, { withTheme: true })(Story);