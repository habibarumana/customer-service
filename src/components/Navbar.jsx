import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-white shadow-sm fixed top-0 w-full z-50 '>
            

            <div className="navbar bg-white text-black max-w-[1150px] md:max-w-[1150px] mx-auto">
            <div className="navbar-start w-[270px] sm:w-[300px] md:w-[300px]">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a>Home</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Changelog</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Download</a></li>
                    <li><a>Contact</a></li>
                </ul>
                </div>
                <a className="font-bold text-[20px] md:text-xl w-full items-end">CS — Ticket System</a>
            </div>
                <div className='flex md:w-full justify-end items-center'>
                    <div className="navbar-center hidden lg:flex navbar-end">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                    </div>
                    <div className="w-[150px] text-end">
                    <button className='btn border-none  bg-gradient-to-r from-[#6732e4] to-[#a062f3] text-white'><span>+</span>New Ticket</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;