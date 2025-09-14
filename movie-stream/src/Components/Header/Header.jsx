import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NetflixLogo from "../../assets/images/NetflixLogo.svg"

const Header = () => {
  return (
    <div>
      <div className='header_outer_container'>
        <div className='header_container'>
          <div className='header_left'>
            <ul>
              <li><img src={NetflixLogo} alt="netflixlogo" width="100" /></li>
              <li>Home</li>
              <li>TvShow</li>
              <li>Movie</li>
              <li>Latest</li>
              <li>Mylist</li>
              <li>Browse by Language</li>
            </ul>
          </div>
          <div className='right_container'>
            <ul>
              <li><SearchIcon /></li>
              <li><NotificationsNoneIcon /></li>
              <li><AccountBoxIcon /></li>
              <li><ArrowDropDownIcon /></li> 
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
