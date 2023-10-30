import React from 'react'
import {AiOutlineDashboard,AiOutlineLogout} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import {FiSettings} from "react-icons/fi"
import styled from "styled-components";

export default function Sidebar() {
  return (
    <Container className='vh-100  '><div className="d-flex flex-column flex-shrink-0 bg-dark vh-100 position" >
    <a href="/" className="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
      <svg className="bi" width="40" height="32"></svg>
      <span className="visually-hidden">Icon-only</span>
    </a>
    <ul className="nav nav-pills nav-flush flex-column mb-auto  ">
      <li className="border-bottom ">
        <a href="/" className="nav-link py-3 ms-5" aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
          <AiOutlineDashboard className='fs-3  me-2'/> Dashboard
        </a>
      </li>
     
      <li className='border-bottom'>
        <a href="/" className="nav-link py-3 ms-5" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="profile">
        <CgProfile className='fs-3  me-2'/> Edit Profile
        </a>
      </li>
      <li className='border-bottom '>
        <a href="/" className="nav-link py-3 ms-5 " title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
        <FiSettings className='fs-3  me-2'/> General Settings
        </a>
      </li>
      <li className='border-bottom  '>
        <a href="/" className="nav-link py-3 ms-5" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="logout">
        <AiOutlineLogout className='fs-3  me-2'/> Logout
        </a>
      </li>
    </ul>
    <div className="dropdown border-top">
      <a href="/" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
        
      </a>
      <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
        <li><a className="dropdown-item" href="/">New project...</a></li>
        <li><a className="dropdown-item" href="/">Settings</a></li>
        <li><a className="dropdown-item" href="/">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="/">Sign out</a></li>
      </ul>
    </div>
  </div></Container>
  )
}
const Container = styled.div`
.position{
  position: fixed;
  width: 15vw;
}

`;