import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => (
  <header>
    <nav>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/stories">
        View All Stories
      </NavLink>
      {
        props.user 
          ? 
          (
          <>
            <h3 className="navbar-welcome">
              Welcome, {props.user && props.user.username}
              <button onClick={props.handleLogout}>Logout</button>
            </h3>
          <NavLink to="/change-password">
            Change Password
          </NavLink>
          {/* <NavLink to="/sign-out">
            Sign Out
          </NavLink> */}
          <NavLink to={`/${props.user.id}/fav-stories`}>
              Your Favorite Stories
          </NavLink>
            </>
          )
          :
          (
          <>
           <NavLink to="/login">
            Login
          </NavLink>
          <NavLink to="/register">
              Register
          </NavLink>
            </>
          )
         
      }
    </nav>
  </header>
)

export default Header;