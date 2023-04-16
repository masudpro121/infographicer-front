import React from 'react'
import "./navbar.css"
import Logo from "../../assets/img/logo.png"
import { BiHomeSmile } from 'react-icons/bi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { GrBlog } from 'react-icons/gr';
import { MdMiscellaneousServices } from 'react-icons/md';

export default function Navbar() {
  return (
    <div className="nav">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="tabs">
            <div className='tab'>
              <div className="icon">
                <BiHomeSmile />
              </div>
              <div className="text">
                Home
              </div>
            </div>
            <div className='tab'>
              <div className="icon">
                <HiOutlineDocumentText />
              </div>
              <div className="text">
                Documentation
              </div>
            </div>
            <div className='tab'>
              <div className="icon">
                <GrBlog />
              </div>
              <div className="text">
                Blog
              </div>
            </div>
            <div className='tab'>
              <div className="icon">
                <MdMiscellaneousServices />
              </div>
              <div className="text">
                Services
              </div>
            </div>
            
        </div>
    </div>
  )
}
