import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
   <>
   <div className="page-container">
    <div className="home-page-container">
      <p className="Heading">Welcome to PopX</p>
      <p className='info' >Lorem, ipsum dolor sit amet, <br /> consectetur adipisicing elit.</p>
        <button className='colored-button'><Link to="/SignUp">Create Account</Link></button>
        <button className='btn-fade'><Link to="/Login">Already Registered? Login</Link></button>
    </div>
   </div>
   </>
  )
}
export default HomePage
