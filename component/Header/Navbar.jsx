import React, { use } from 'react';

import ecoLogo from '../../assets/eco_logo.png'
import { AuthContext } from '../../auth/AuthProvider';
import { NavLink } from 'react-router';
const Navbar = () => {

  const { user, signOutUser } = use(AuthContext);
  console.log(user)

  const signOutHandler = (e) => {
    e.preventDefault()
    console.log('sign btn was clik')
    signOutUser()
      .then(result => {
        console.log(result)
      })
  }




  const navLinks =
    <>
      <li><a className='text-[16px] text-[var(--accent)]' href="/">Home</a></li>

      {
        user && <>
          <li><a className='text-[16px] text-[var(--accent)]' href="/challenges">Challenges</a></li>
          <li><a className='text-[16px] text-[var(--accent)]' href="/myActivities">My Activities</a></li>
        </>
      }

    </>

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[var(--accent)]">

              <li>
                <NavLink to="/challenges">Challenges</NavLink>
              </li>

              <li>
                <NavLink to="/myActivities">My Activities</NavLink>
              </li>

              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>

              <li>
                <button onClick={signOutHandler}>Logout</button>
              </li>

            </ul>
          </div>
          <div className='flex items-center'>
            <img className='w-10' src={ecoLogo} alt="Eco Logo" />
            <h1 className='text-xl md:text-2xl font-semibold text-[var(--primary)]'>EcoTract</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">

          {
            user ? <div>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} className="flex items-center gap-5 m-1">
                  <div className="w-10">
                    <img className='rounded-2xl' src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                  </div>
                  <h2 className='text-[var(--accent)]'>{user.displayName}</h2>
                </div>
                <ul tabIndex="0" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                  <li><a href='/profile'>Profile</a></li>
                  <li><a href='/myActivities'>My Activities</a></li>
                  <li><a onClick={signOutHandler}>Sign Out</a></li>
                </ul>
              </div>

            </div>
              : <div><a href='/login' className='btn'>Log In</a></div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;