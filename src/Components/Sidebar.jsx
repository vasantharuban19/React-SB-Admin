import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return <>
          {/* <!-- Sidebar --> */}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0"/>

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link to='/dashboard' className="nav-link" href="index.html">
                <i class="fa-solid fa-house"></i>                    <span>Dashboard</span></Link>
            </li>
            {/* <!-- Nav Item - Users --> */}
            <li className="nav-item active">
                <Link to='/users' className="nav-link" href="index.html">
                <i class="fa-regular fa-user"></i>                    <span>Users</span></Link>
            </li>
            {/* <!-- Nav Item - Class --> */}
            <li className="nav-item active">
                <Link to='/class' className="nav-link" href="index.html">
                <i class="fa-solid fa-magnifying-glass"></i>                    <span>Class</span></Link>
            </li>
            {/* <!-- Nav Item - Querry --> */}
            <li className="nav-item active">
                <Link to='/querry' className="nav-link" href="index.html">
                <i class="fa-solid fa-clipboard-question"></i>                    <span>Querry</span></Link>
            </li>

        </ul>
        {/* <!-- End of Sidebar --></hr> */}
  </>
}

export default Sidebar