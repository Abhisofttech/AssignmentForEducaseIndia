import React from 'react'
import '../index.css'
import profileImage from '../assests/profile.png';
import cameraImage from '../assests/camera.png';
const ProfilePage = () => {
  return (
    <>
      <div className="page-container">
        <p class="profile-head">Account Settings</p>
        <div className="profile-info">
          <div className="profile-img">
            <img src={profileImage} alt="Profile" width={'90px'} height={'90px'} />
            <img className='icon' src={cameraImage} alt="Icon" width={'32px'} height={'32px'} />
          </div>
          <div className="profile-name">
            <p className='name'>Marry Doe</p>
            <p className='mail'>Marry@Gmail.Com</p>
          </div>
          <div className="profile-description">
            <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProfilePage
