import React from 'react';
import FBicon from '../assets/fb.png'
import linkIcon from '../assets/linkedin.png'
import Xicon from '../assets/twitter.png'
import Emailicon from '../assets/email.png'



const Footer = () => {
    return (
        <div className='bg-[#000000] mt-12'>
            <div className='max-w-[1150px] mx-auto'>
                <div className=' text-white grid sm:grid-cols-1 md:grid-cols-5  gap-2 md:justify-items-center p-10 md:py-10 '>
                <div>
                    <a className="font-bold text-xl">CS — Ticket System</a>
                    <p className='text-[13px] text-justify text-[#8e8888]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                </div>
                <div>
                    <h2 className="font-bold text-xl">Company</h2>
                    <ul className='text-[#8e8888] mt-2 flex flex-col gap-2'>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Our Mission</a></li>
                        <li><a href="">Contact Saled</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold text-xl">Services</h2>
                    <ul className='text-[#8e8888] mt-2 flex flex-col gap-2'>
                        <li><a href="">Products & Services</a></li>
                        <li><a href="">Customer Stories</a></li>
                        <li><a href="">Download Apps</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold text-xl">Information</h2>
                    <ul className='text-[#8e8888] mt-2 flex flex-col gap-2'>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                        <li><a href="">Join Us</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold text-xl">Social Links</h2>
                    <ul className='text-[#8e8888] mt-2 flex flex-col gap-2'>
                        <li className='flex items-center gap-2'><img src={FBicon} alt="" /><a href="">@CS — Ticket System</a></li>
                        <li className='flex items-center gap-2'><img src={linkIcon} alt="" /><a href="">@CS — Ticket System</a></li>
                        <li className='flex items-center gap-2'><img src={Xicon} alt="" /><a href="">@CS — Ticket System</a></li>
                        <li className='flex items-center gap-2'><img src={Emailicon} alt="" /><a href="">support@cst.com</a></li>
                       
                        
                        
                    </ul>
                </div>
                
            </div>

            <hr />
            <div className='text-center text-white py-5'>
                <h2 >© 2025 CS — Ticket System. All rights reserved.</h2>
            </div>
            </div>
        </div>

    )
        

};

export default Footer;