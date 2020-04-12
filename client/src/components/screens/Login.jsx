import React from 'react';
import { Link } from 'react-router-dom';

const Login = props => (
  <div>
    <h2>Login</h2>
    <hr />
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleLogin();
    }}>
      <input
        name="email" 
        type="text"
        value={props.formData.email}
        onChange={props.handleChange}
      />
      <button>Login</button>
      <Link to="/register">Register</Link>
      </form>
  </div>
)

export default Login;