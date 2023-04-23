import React from 'react'
import "./navbar.css"
import Logo from "../../assets/img/logo.png"
import { BiHomeSmile } from 'react-icons/bi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { IoIosLogOut } from 'react-icons/io';
import { MdMiscellaneousServices, MdOutlinePrivacyTip } from 'react-icons/md';
import { Link } from 'react-router-dom';
import RocketImg from '../../assets/img/rocket.png'
export default function Navbar() {
  return (
    <div className="mynav">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="tabs ">
            <Link to="/" className='link'>
            <div className='tab'>
                <div className="icon">
                  <BiHomeSmile />
                </div>
                <div className="text">
                  Home
                </div>
            </div>
            </Link>

            <Link to="/" className='link'>
              <div className='tab'>
                <div className="icon">
                  <HiOutlineDocumentText />
                </div>
                <div className="text">
                  Docs
                </div>
              </div>
            </Link>
           
            
            <Link to="/projects" className='link'>
            <div className='tab'>
              <div className="icon">
                <MdMiscellaneousServices />
              </div>
              <div className="text">
                Projects
              </div>
            </div>
            </Link>
            <Link to="/" className='link'>
              <div className='tab'>
                <div className="icon">
                  <MdOutlinePrivacyTip />
                </div>
                <div className="text">
                  Privacy
                </div>
              </div>
            </Link>
            <div className="underline"></div>
            <Link to="/signup" className='link'>
            <div className='tab'>
              <div className="icon">
                <MdMiscellaneousServices />
              </div>
              <div className="text">
                Sign up
              </div>
            </div>
            </Link>
            <div className='tab'>
              <div className="icon">
                <IoIosLogOut />
              </div>
              <div className="text">
                Logout
              </div>
            </div>
           
           <div className="upgrade">
                <div className="inner">
                  <h6>Upgrade to PRO</h6>
                  <small>Unlock premium features for free</small>
                  <div>
                    <button>TRY NOW</button>
                  </div>
                    <img src={RocketImg} alt="" />
                </div>
           </div>
            
           
        </div>
    </div>
  )
}
