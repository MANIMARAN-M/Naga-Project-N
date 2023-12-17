import React from 'react'
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/actions/loginActions/loginActions';

const Login = () => {
  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = React.useState({
    userName: "",
    password: "",
  });
   // Function to handle the login form submission
   const loginHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(loginAction({ ...loginDetails, isLoggedIN: true }));
  }
  return (
    <form onSubmit={(e: React.SyntheticEvent) => loginHandler(e)} style={{width: "100%", maxWidth: "600px", margin: "20px auto"}}>
      {/* <!-- Email input --> */}
      <h1 className='mb-4'><strong>Login</strong></h1>
      <div className="form-outline mb-4">
        <input type="text" id="form2Example1" className="form-control" onChange={(e) => { setLoginDetails({ ...loginDetails, userName: e.target.value })}} />
        <label className="form-label" htmlFor="form2Example1">User name</label>
      </div>

      {/* <!-- Password input --> */}
      <div className="form-outline mb-4">
        <input type="password" id="form2Example2" className="form-control" onChange={(e) => { setLoginDetails({ ...loginDetails, password: e.target.value })}} />
        <label className="form-label" htmlFor="form2Example2">Password</label>
      </div>

      {/* <!-- Submit button --> */}
      <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
    </form>
  )
}

export default Login