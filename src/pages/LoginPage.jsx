import React from 'react'
import '../index.css';
import { Link } from 'react-router-dom';
const LoginPage = () => {
  return (
    <>
      <div className="page-container">
        <div >
          <p className="Heading">Signin to your <br /> PopX Account</p>
          <p className='info' >Lorem, ipsum dolor sit amet, <br /> consectetur adipisicing elit.</p>
          <div className="input-container">
            <div className="input-box-container">
              <input type="email" value="" class="input-box" placeholder='Enter email address' />
              <label className="label-box">Enter Email </label>
            </div>
          </div > <br />
          <div className="input-container">
            <div className="input-box-container">
              <input type="password" value="" class="input-box" placeholder='Enter password' />
              <label className="label-box">Enter Password </label>
            </div>
            <br />
          </div >
          <br />
          <button className='btn-login'><Link to="/Profile">Login</Link></button>
        </div>
      </div>
    </>
  )
}
export default LoginPage
