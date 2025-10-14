import React from 'react';
import Logo from '../assets/logo.png'
import Github from '../assets/git.png'
const Navbar = () => {
    return (
        <div className="navbar max-w-11/12 mx-auto border-none">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className='hover:bg-white'><a>Home</a></li>
                        <li ><a>Apps</a></li>
                        <li ><a>Installation</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-[#9F62F2]"><img className="w-10 h-10 rounded-full mr-2" src={Logo} alt="" />HERO.IO</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li className='hover:bg-white'><a className='hover:text-[#9F62F2]'>Home</a></li>
                    <li className='hover:bg-white'><a className='hover:text-[#9F62F2]'>Apps</a></li>
                    <li className='hover:bg-white'><a className='hover:text-[#9F62F2]'>Installation</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a
                    href="https://github.com/Shajid-Hasan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white flex items-center gap-2"
                >
                    <img src={Github} alt="GitHub" className="w-5 h-5" />
                    Contribute
                </a>
            </div>
        </div>
    );
};

export default Navbar;