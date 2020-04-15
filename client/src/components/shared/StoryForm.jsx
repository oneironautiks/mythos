import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, TextareaAutosize, Paper, Button, Container, Typography, CssBaseline } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: '#996515',
    height: '75vh' 
  }
}))

const StoryForm = props => {
  const classes = useStyles();

  return (
    <>
      <Container maxwidth="lg">
        <Paper component="main" className={classes.main}>
          <form onSubmit={props.handleSubmit}>
            <Typography component="label">Story Title</Typography>
            <TextField
              placeholder="title"
              value={props.story.title}
              name="title"
              required
              onChange={props.handleChange}
              variant="filled"
            />
            <hr />
            <Typography component="label">Summary</Typography>
            <TextField
              placeholder="summary"
              value={props.story.summary}
              name="summary"
              required
              onChange={props.handleChange}
              variant="filled"
            />
            <hr />
            <Typography component="label">Origin Info</Typography>
            <TextField
              placeholder="locale"
              value={props.story.place_of_origin}
              name="place_of_origin"
              onChange={props.handleChange}
              variant="filled"
            />
            <TextField
              placeholder="era"
              value={props.story.date_of_origin}
              name="date_of_origin"
              onChange={props.handleChange}
              variant="filled"
            />
            <hr />
            <Typography component="label">Story</Typography>
            <TextareaAutosize
              placeholder="the story itself"
              value={props.story.story}
              name="story"
              required
              onChange={props.handleChange}
              rows={12}
              cols={125}
              variant="filled"
            />
            <Button type="submit">Submit</Button>
            <Button className="danger"
              onClick={() => props.history.push(props.cancelPath)}
            >Cancel</Button>
          </form>
        </Paper>
      </Container>
    </>
  )
}

export default StoryForm;