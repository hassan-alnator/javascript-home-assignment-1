import React from 'react';
import { ReactComponent as Facebook  } from './assets/images/icon-facebook.svg';
import { ReactComponent as Twitter  } from './assets/images/icon-twitter.svg';
import { ReactComponent as Pinterest  } from './assets/images/icon-pinterest.svg';
import { ReactComponent as Instagram  } from './assets/images/icon-instagram.svg';

function Footer() {
  return (
    <footer className='footer py-5'>
      <div className='container py-5'>
        <div className='row'>
        <div className='col-12 col-md-4'>
          <div className='logo logo-white m-auto mb-5 m-md-0 mb-md-0'></div>
        </div>
        <div className='col-12 col-md-8'>
          <div className='align-items-center align-items-md-start d-flex flex-column flex-md-row gap-5 gap-md-0'>
          <div className='col text-center text-md-start'>
            <div className='d-flex flex-column gap-3 gap-md-4'>
              <h6 className='color-white mb-0'>Features</h6>
              <div className='d-flex flex-column gap-2'>
                <a href='http://localhost:3000/#' className='text-decoration-none'>Link Shortening</a>
                <a href='http://localhost:3000/#' className='text-decoration-none'>Branded Links</a>
                <a href='http://localhost:3000/#' className='text-decoration-none'>Analytics</a>
              </div>
            </div>
          </div>
          <div className='col text-center text-md-start'>
            <div className='d-flex flex-column gap-3 gap-md-4'>
              <h6 className='color-white mb-0'>Resources</h6>
              <div className='d-flex flex-column gap-2'>
                <a href='http://localhost:3000/#' className='text-decoration-none'>Blog</a>
                <a href='http://localhost:3000/#' className='text-decoration-none'>Developers</a>
                <a href='http://localhost:3000/#' className='text-decoration-none'>Support</a>
              </div>
            </div>
          </div>
          <div className='col text-center text-md-start'>
            <div className='d-flex flex-column gap-3 gap-md-4'>
              <h6 className='color-white mb-0'>Company</h6>
              <div className='d-flex flex-column gap-2'>
                <a href='http://localhost:3000/#' className='text-decoration-none'>About</a>
                <a href='http://localhost:3000/#' className='text-decoration-none'>Our Team</a>
                <a href='http://localhost:3000/#' className='text-decoration-none'>Careers</a>
                <a href='http://localhost:3000/#' className='text-decoration-none'>Contact</a>
              </div>
            </div>
          </div>
          <div className='col text-center text-md-start'>
            <div className='d-flex align-items-center gap-4'>
              <a href='http://localhost:3000/#' alt="facebook" target='blank'>
                <Facebook />
              </a>
              <a href='http://localhost:3000/#' alt="facebook" target='blank'>
                <Twitter />
              </a>
              <a href='http://localhost:3000/#' alt="facebook" target='blank'>
                <Pinterest />
              </a>
              <a href='http://localhost:3000/#' alt="facebook" target='blank'>
                <Instagram />
              </a>
            </div>
          </div>
          </div>
        </div>
        </div>
      
      </div>
      
    </footer>
  );
}

export default Footer;