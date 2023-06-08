import React from 'react'
import logo from '../../images/url@3x.png'
import logoSmall from '../../images/url.png'

import profileImg from '../../images/student.png'
import './Header.css'
function Header() {
  return (
    <div className='Header'>
        <img src={logo} className='HeaderLogo d-none d-lg-block'/>
        <img src={logoSmall} className='HeaderLogoSmall  d-lg-none'/>
        <div className='CourseName d-none d-lg-block'>Full Stack Web Developer Bootcamp</div>
        <div className='CourseNameSmall d-lg-none'>Get mentor support</div>
        <div class="dropdown position-absolute top-0 end-0 d-none d-lg-block">
          <button class="btn -toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={profileImg} className='ProfileImg rounded-circle '/>
    
          Profile
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Edit Profile</a></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </div>
        <div class="dropdown position-absolute top-0 end-0 d-lg-none">
          <button class="btn -toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={profileImg} className='ProfileImgSmall rounded-circle'/>
          Profile
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Edit Profile</a></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Header