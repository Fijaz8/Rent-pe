import React from 'react'
import '../Register/Register.css'
const Login = () => {
  return (
    <div className='login-page'>
      <div className="repart">
             <div className="logo">Login</div>
            

        <div className="emailcontainer">
      <label htmlFor="inputemailadress" placeholder="email">Email</label>
        <input type="email" />
        </div>
        <div className="passwordcontainer">
            <label htmlFor="passwordcontainer">Password</label>
            <input type="password" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        </div>
    </div>
  )
}

export default Login
