import React from 'react'
import '../index.css';
import { Link } from 'react-router-dom';
const SignUpPage = () => {
 
  return (
    <>
      <div className="page-container">
        <div >
          <p className="Heading">Create your <br /> PopX Account</p>
          <div className="input-container">
            <div className="input-box-container">
              <input type="text" value='Marry Doe' class="input-box" placeholder='Enter Full Name' required />
              <label className="label-box">Full Name<span id='mandtory'>*</span> </label>
            </div>
          </div > <br />
          <div className="input-container">
            <div className="input-box-container">
              <input type="text" value='9876543210' class="input-box" placeholder='Enter Phone number' required />
              <label className="label-box">Phone number<span id='mandtory'>*</span></label>
            </div>
            <br />
          </div >
          <div className="input-container">
            <div className="input-box-container">
              <input type="email" value='Marry@Gmail.com' class="input-box" placeholder='Enter Email address' required />
              <label className="label-box"> Email address<span id='mandtory'>*</span> </label>
            </div>
          </div > <br />
          <div className="input-container">
            <div className="input-box-container">
              <input type="password" value='12578asdf' class="input-box" placeholder='Enter password' required />
              <label className="label-box"> Password<span id='mandtory'>*</span></label>
            </div>
            <br />
          </div >
          <div className="input-container">
            <div className="input-box-container">
              <input type="text" value='Popx' class="input-box" placeholder='Enter Company name' required />
              <label className="label-box">Company name <span id='mandtory'>*</span></label>
            </div>
            <br />
          </div >
          <br />
          <p className='agency'>Are you an agency?<span id='mandtory'>*</span></p>
          <input type="radio" name="agency" className='radio' checked={true} />Yes
          <input type="radio" name="agency" className='radio' value="No" />No
          <div className="btn-container">
            <button className='btn-login'><Link to="/Profile">Create Account</Link></button>
          </div>
        </div>
      </div>
    </>
  )
}
export default SignUpPage
