import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';

const Layout = props => (
  <div className="layout">
        <Header
          user={props.user}
          handleLogout={props.handleLogout}
          handleLoginButton={props.handleLoginButton}
            />
      <div className="content">
        <nav>
          <NavLink
            className="mythosphere"
            to="/stories"
          >
            Traverse *the* MYTHOSPHERE
            </NavLink>
          <NavLink
            className="mythosphere"
            to="/create-story"
          >
            Offer Tribute to *the* MYTHOSPHERE
            </NavLink>
        </nav>
      <main>
        {props.children}
      </main>
    </div>
    <Footer />
  </div>
)

export default Layout;