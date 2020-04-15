import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minwidth: 300,
    height: 400,
    backgroundColor: "#a9a9a9"
  },
}));

const Stories = props => {
    const classes = useStyles();

    return (
      <div
        style={{ marginTop: 20, padding: 30 }}
      className={classes.root}>
        <Grid
          container
          spacing={3}
          justify="space-evenly"
          alignItems="flex-end"
        >
      {props.stories.map(story => (
        <Grid item xs
          alignContent="flex-end"
          key={story.id}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {story.title}
                </Typography>
                <Typography component="p">{story.summary}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Button size="small" color="primary">
                Share
              </Button> */}
              <Link to={`/stories/${story.id}`}>
              <Button size="small" color="primary">
                Read More
              </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </div>
    )
  }


export default Stories;

{/* {
                console.log(story)
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
                      <button
                        className="danger"
                        onClick={() => this.props.history.push(this.props.cancelPath)}
                      >
                        Cancel
                      </button>
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
                      <button
                        className="danger"
                        onClick={() => this.props.history.push(this.props.cancelPath)}
                      >
                        Cancel
                      </button>
                    <button
                      className="danger"
                      onClick={() => {
                      this.props.deleteStory(story)
                    }}>
                      Delete
                    </button>
                  </div>
              } */}