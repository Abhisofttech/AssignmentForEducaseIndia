import React, { useState } from 'react'
import '../index.css';
import { Link } from 'react-router-dom';
const SignUpPage = () => {
  const [userDetail, setUserDetail] = useState({
    name: 'Marry Doe',
    phone: '9876543210',
    email: 'Marry@Gmail.com',
    password: '12578asdf',
    company: 'Popx',
    agency: true
  })
  return (
    <>
      <div className="page-container">
        <div >
          <p className="Heading">Create your <br /> PopX Account</p>
          <div className="input-container">
            <div className="input-box-container">
              <input type="text" value={userDetail.name} class="input-box" placeholder='Enter Full Name' required />
              <label className="label-box">Full Name<span id='mandtory'>*</span> </label>
            </div>
          </div > <br />
          <div className="input-container">
            <div className="input-box-container">
              <input type="text" value={userDetail.phone} class="input-box" placeholder='Enter Phone number' required />
              <label className="label-box">Phone number<span id='mandtory'>*</span></label>
            </div>
            <br />
          </div >
          <div className="input-container">
            <div className="input-box-container">
              <input type="email" value={userDetail.email} class="input-box" placeholder='Enter Email address' required />
              <label className="label-box"> Email address<span id='mandtory'>*</span> </label>
            </div>
          </div > <br />
          <div className="input-container">
            <div className="input-box-container">
              <input type="password" value={userDetail.password} class="input-box" placeholder='Enter password' required />
              <label className="label-box"> Password<span id='mandtory'>*</span></label>
            </div>
            <br />
          </div >
          <div className="input-container">
            <div className="input-box-container">
              <input type="text" value={userDetail.company} class="input-box" placeholder='Enter Company name' required />
              <label className="label-box">Company name <span id='mandtory'>*</span></label>
            </div>
            <br />
          </div >
          <br />
          <p className='agency'>Are you an agency?<span id='mandtory'>*</span></p>
          <input type="radio" name="agency" className='radio' checked={userDetail.agency} />Yes
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
