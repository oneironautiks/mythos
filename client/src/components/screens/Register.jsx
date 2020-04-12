import React from 'react';

const Register = (props) => (
  <div>
    <h2>Register</h2>
    <hr />
    <form onSubmit={props.handleRegister}>
      <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
      <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
      <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
      <button>Register</button>
    </form>
  </div>
)

export default Register;