import React, { useState } from 'react';
import "./razer.css";
import logo from './logo.svg';
import keyboard1 from './keyboard1.jpg';
import razerkit from './razerkit.webp';
import school from './school.webp';
import newrazer from './newrazer.webp';
import razerblade from './razerblade.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ChevronRight} from 'lucide-react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram , faXTwitter , faYoutube , faTiktok , faTwitch , faDiscord} from '@fortawesome/free-brands-svg-icons';
import {Search} from 'lucide-react';
const Razer = () => {
    const [showMenu, setShowMenu] = useState(true);
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    }
  
    return (
      <>
        
          <nav>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="link">
              <div className="menu-button" onClick={toggleMenu}>
                <span>&#9776;</span>
              </div>
              <ul className={showMenu ? "show" : ""}>
                <li><a href="index.html">Store</a></li>
                <li><a href="index.html">PC</a></li>
                <li><a href="index.html">Console</a></li>
                <li><a href="index.html">Mobile</a></li>
                <li><a href="index.html">Lifestyle</a></li>
                <li><a href="index.html">Services</a></li>
                <li><a href="index.html">Community</a></li>
                <li><a href="index.html">Support</a></li>
              </ul>
              <a href="index.html" className="icon2"><Search /></a>
            </div>
          </nav>
      
        <div className="header">
            <p>All orders over US$79 will enjoy free standard shipping to the United States.</p>
        </div>
        
        <div className="keyboard">
            <img src={keyboard1} alt="keyboard"/>
        </div>
       
        <div className="keyContent">
            <p>RAZER BLACKWIDOW V4 75%</p><br></br>
            <h5>SWAP OUT , SWAP IN , GAME ON.</h5>
            <h6 className="h6"><a href="index.html">Learn More </a><div className="icon"><ChevronRight /></div></h6>
            <h6 className="h5"><a href="index.html">Buy </a><div className="icon1"><ChevronRight /></div></h6>
        </div>
         
        <div className="razer-kit">
            <img src={razerkit} alt="razerkit"/>
        </div>
        <div className="keyContent-1">
            <p>RAZER KITSUNE</p><br></br>
            <h5>OPTICAL+PRECISION! THE ULTRA COMBO!</h5>
            <h6 className="h6"><a href="index.html">Learn More </a><div className="icon"><ChevronRight /></div></h6>
            <h6 className="h5"><a href="index.html">Buy </a><div className="icon1"><ChevronRight /></div></h6>
        </div>
        
        <div className="school">
            <img src={school} alt="school"/>
        </div>
        <div className="keyContent-2">
            <p>SCHOOL THE COMPETITION</p><br></br>
            <h5>ENJOY EXCLUSIVE EDUCATION PRICING</h5>
            <h6 className="h6"><a href="index.html">Learn More </a><div className="icon"><ChevronRight /></div></h6>
            <h6 className="h5"><a href="index.html">Buy </a><div className="icon1"><ChevronRight /></div></h6>
        </div>
        
        <div className="new">
            <img src={newrazer} alt="newrazer"/>
        </div>
        <div className="keyContent-3">
            <p>NEW RAZER BLADE 14</p><br></br>
            <h5>SMALL SIZE.BIG PERFORMANCE.</h5>
            <h6 className="h6"><a href="index.html">Learn More </a><div className="icon"><ChevronRight /></div></h6>
            <h6 className="h5"><a href="index.html">Buy </a><div className="icon1"><ChevronRight /></div></h6>
        </div>
        
        <div className="blade">
            <img src={razerblade} alt="razerblade"/>
        </div>
        <div className="keyContent-4">
            <p>NEW RAZER BLADE 16&18 MERCURY</p><br></br>
            <h5>PERFORMANCE REIMAGINED</h5>
           
    </div>
    <div className='footer-outer'>
      <div className='shop'>
        <ul type="none">
        <h3><li>Shop</li></h3>
          <li>RazerStores</li>
           <li>RazerCafe</li>
           <li>Store Locator</li>
           <li>Purchase Programs</li>
           <li>Education</li>
           <li>Exclusives</li>
           <li>RazerStore Rewards</li>
           <li>Newsletter</li>
        </ul>
      </div>
      <div className='explore'>
        <ul type="none">
        <h3> <li>Explore</li></h3>
        <li>Technology</li>
        <li>Chroma RGB</li>
        <li>Concepts</li>
        <li>Esports</li>
        <li>Collabs</li>
        </ul>
      </div>
      <div className='support'>
        <ul type="none">
        <h3> <li style={{fontWeight:"700"}}>Support</li></h3>
        <li>Get Help</li>
        <li>Registration & Warranty</li>
        <li>RazerStore Support</li>
        <li>RazerCare</li>
        <li>Manage Razer ID</li>
        <li>Support Videos</li>
        <li>Accessibility Statement</li>
        </ul>
      </div>
      <div className='company'>
        <ul type='none'>
        <h3>  <li style={{fontWeight:"700"}}> Company</li></h3>
       <li> About Us</li>
       <li> Careers</li>
       <li> Newsroom</li>
       <li> zVentures</li>
       <li> Contact Us</li>
        </ul>
      </div>
      <div className='socialmedia'>
        <ul type='none'>
          <li><h3>Follow Us</h3></li>
          <li><a><FontAwesomeIcon icon={faFacebook} /></a></li>
          <li><a><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a><FontAwesomeIcon icon={faXTwitter} /></a></li>
          <li><a><FontAwesomeIcon icon={faYoutube} /></a></li>
          <li><a><FontAwesomeIcon icon={faTiktok} /></a></li>
          <li><a><FontAwesomeIcon icon={faTwitch} /></a></li>
          <li><a><FontAwesomeIcon icon={faDiscord} /></a></li>
        </ul>
      </div>
      <div className='forgamer'>
        <h4>FOR GAMERS. BY GAMERS.™</h4>
      </div>
    </div>
    <hr></hr>
    <div className='lastfooter'>
      <div className='content1'>
        <div className='innercontent1'>
    <p>Copyright © 2024 Razer Inc. All rights reserved.</p>
    <p> Site Map </p>
    <p>|</p>
    <p>Legal terms</p>
    <p>|</p>
    <p>Privacy Policy</p>
    <p>|</p>
    <p>Cookie Setting</p></div>
    <div className='content2'>
      <p>United States  |  Change Location </p>
    </div>
    </div>
   
    </div>
        </>
    )
}
export default Razer;