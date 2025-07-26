import React from 'react'
import './Register.css'
const Register = () => {
  return (
    <div className='registration-page'>
        <div className="repart">
             <div className="logo">Register</div>
            <div className="username">
            <label htmlFor="forusername" >User Name</label>
            <input type="text" placeholder="username"/>
        </div>


        <div className="emailcontainer">
      <label htmlFor="inputemailadress" placeholder="email">Email</label>
        <input type="email" />
        </div>
        <div className="passwordcontainer">
            <label htmlFor="passwordcontainer">Password</label>
            <input type="password" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
   
</div>
         </div>
  )
}

export default Register
