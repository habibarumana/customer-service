import React from 'react';

import Victorimg from '../assets/vector1.png'

const ProgressCard = ({inProgress,resolved}) => {


    return (
        <div className='bg-[#f5f5f5] pt-30' >

            <div className='max-w-[1150px] mx-auto  grid grid-cols-2 gap-5 text-white p-5 md:p-0'>
                <div className='bg-gradient-to-br from-[#642ee4] to-[#9f61f2] h-40 md:h-50 flex flex-col justify-center items-center rounded-md relative overflow-hidden font-[700]'>
                    <h2 className='text-[25px]'>In-Progress</h2>
                   <h2 className='text-[35px] text-white/90'>{inProgress}</h2>
                   <img src={Victorimg} alt="" className='absolute top-0 md:-left-5 -left-15 h-[200px] ' />
                   <img src={Victorimg} alt="" className='absolute top-0 md:-right-5 -right-15 scale-x-[-1] h-[200px]'  />
                </div>
                <div className='bg-gradient-to-br from-[#54cf67] to-[#0c8e78] h-40 md:h-50 flex flex-col justify-center items-center rounded-md relative overflow-hidden font-[700]'>
                    <h2 className='text-[20px]'>Resolved</h2>
                    <h2 className='text-[30px] text-white'>{resolved}</h2>
                    <img src={Victorimg} alt="" className='absolute top-0 md:-left-5 -left-15 h-[200px]' />
                   <img src={Victorimg} alt="" className='absolute top-0 md:-right-5 -right-15 h-[200px]  scale-x-[-1]' />
                </div>
            </div>
        </div>
    );
};

export default ProgressCard;