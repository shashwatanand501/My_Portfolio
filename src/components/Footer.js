import React from 'react';
import './Footer.css';
import { MDBIcon } from 'mdbreact';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        I hereby declare that the information furnished above is true and I will be responsible for its authenticity.
        </p>
      </section>
      
    

      <div className='navbar-container_footer' >
        <div style={{ padding: '30%' }}>
          <a href="https://www.facebook.com/shashwat.anand.718/" onClick="this.https://www.facebook.com/shashwat.anand.718/" size="lg" floating social="fb"  >
            <MDBIcon fab icon="facebook-f" />
          </a>
        </div>
        <div style={{ padding: '30%' }}>
          <a href="https://twitter.com/1sHaShWaT21" onClick="this.href='https://twitter.com/1sHaShWaT21'" size="lg" floating social="tw">
            <MDBIcon fab icon="twitter" />
          </a>
        </div>
        <div style={{ padding: '30%' }}>
          <a href="https://www.linkedin.com/in/shashwat-anand-746341180/" onClick="https://www.linkedin.com/in/shashwat-anand-746341180/" size="lg" floating social="li">
            <MDBIcon fab icon="linkedin-in" />
          </a>
        </div>
        <div style={{ padding: '30%' }}>
          <a href="https://www.instagram.com/shashwat.anand.718/" onClick="this.https://www.instagram.com/shashwat.anand.718/" size="lg" floating social="ins">
            <MDBIcon fab icon="instagram" />
          </a>
        </div>
        <div style={{ padding: '30%' }}>

          <a href="https://github.com/shashwatanand501" onClick="this.href=': https://github.com/shashwatanand501';" size="lg" floating social="yt">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </div>

    </div>
  );
}

export default Footer;
