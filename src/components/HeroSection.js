import React from 'react';
import '../App.css';
import './HeroSection.css';
import logo from './image/me.jpeg'
import { MDBIcon } from 'mdbreact';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <div style={{ alignContent: 'center', justifyContent: 'center', display: 'flex' }}>
        <img src={logo} alt='Avatar' style={{ width: '20%', borderRadius: '70%' }} />
      </div>
      <div>
        <h1 className='h1'>SHASHWAT ANAND</h1>
        <p className='p'>Web Developer</p>
        <p className='p'>React Developer</p>
        <p className='p'>Cloud Computer</p>

      </div>
      <div className='navbar-container' >
        <a href="https://facebook.com" onClick="this.href='https://google.com';" size="lg" floating social="fb"  >
          <MDBIcon className='navbar-container' fab icon="facebook-f" />
        </a>
        <a href="https://twitter.com" onClick="this.href='https://google.com';" size="lg" floating social="tw">
          <MDBIcon className='navbar-container' fab icon="twitter" />
        </a>
        <a href="https://linkedin.com" onClick="this.href='https://google.com';" size="lg" floating social="li">
          <MDBIcon className='navbar-container' fab icon="linkedin-in" />
        </a>
        <a href="https://instagram.com" onClick="this.href='https://google.com';" size="lg" floating social="ins">
          <MDBIcon className='navbar-container' fab icon="instagram" />
        </a>
        <a href="https://youtube.com" onClick="this.href='https://google.com';" size="lg" floating social="yt">
          <MDBIcon className='navbar-container' fab icon="youtube" />
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
