import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>
        <div className='footer_icons'>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className='footer_data'>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Legal Notice</li>
              <li>Investor Relations</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Media Center</li>
              <li>Jobs</li>
           </ul>
          </div>
          <div>
            <ul>
                <li>Terms of Use</li>
              <li>Cookie Preferences</li>
              <li>Contact Us</li> 
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer