import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import {  List,
          ListItem, 
          ListItemText, 
          Typography,
          CardHeader,
  Card,
          Button,
          CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#201710',
    opacity: 0.9
  },
  header: {
    maxHeight: '40vh',
  },
  list: {
    display: 'flex',
    alignItems: 'flex-end',
    justify: 'center',
  },
  welcome: {
    textAlign: 'center',
    justify: 'center'
  }
}))


const Header = props => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent
        component="header"
        className={classes.header}>
        <List
          className={classes.list}
          component="nav">
          {
            props.user
              ?
              (
                <>
                  <Typography component="h3" className={classes.welcome}>
                    Welcome, {props.user && props.user.username}
                  </Typography>
                  <ListItemText inset>
                    <Typography color="secondary" variant="title">
                      <NavLink
                        className="mythosphere"
                        to="/stories"
                      >
                        Traverse *the* MYTHOSPHERE
            </NavLink>
                    </Typography>
                  </ListItemText>
                  <ListItemText inset>
                    <Typography color="inherit" variant="title">
                      <NavLink
                        className="mythosphere"
                        to="/create-story"
                      >
                        Offer Tribute to *the* MYTHOSPHERE
            </NavLink>
                    </Typography>
                  </ListItemText>
                  {/* <ListItemText inset>  
          <Typography color="inherit" variant="title">
          <NavLink to="/change-password">
          Change Password
          </NavLink>
          </Typography>  
        </ListItemText> */}
                  {/* <NavLink to="/sign-out">
            Sign Out
          </NavLink> */}
                  <ListItemText inset>
                    <Typography color="inherit" variant="title">
                      <NavLink to={`/users/${props.user.id}`}>
                        Your Profile
          </NavLink>
                    </Typography>
                  </ListItemText>
                  <Button onClick={props.handleLogout}>Logout</Button>
                </>
              )
              :
              (
                <>
                  <ListItemText inset>
                    <Typography color="inherit" variant="title">
                      <NavLink to="/login">
                        Login
          </NavLink>
                    </Typography>
                  </ListItemText>
                  <ListItemText inset>
                    <Typography color="inherit" variant="title">
                      <NavLink to="/register">
                        Register
          </NavLink>
                    </Typography>
                  </ListItemText>
                </>
              )
         
          }
          <ListItem component="div">
            <ListItemText inset>
              <Typography color="inherit" variant="title">
                <NavLink to="/">
                  Home
      </NavLink>
              </Typography>
            </ListItemText>

            <ListItemText inset>
              <Typography color="inherit" variant="title">
                <NavLink to="/digital-campfire">
                  But, Why?
      </NavLink>
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  )
}

export default withRouter(Header);