import React from 'react';
import calender from '../assets/calender.png'

const TicketCard = ({ticketData, selectedTickets, setSelectedTickets}) => {

      const handleSelect = () => {
        if (!selectedTickets.find(ticket => ticket.id === ticketData.id)) {
        setSelectedTickets([...selectedTickets, ticketData]);
        }
    };
        
    return (
        <div>
            <div onClick={handleSelect} className='btn h-auto cursor-pointer bg-white shadow-md rounded-sm px-3 py-2 flex flex-col justify-be border-none gap-2 text-black  justify-start items-start '>
                <div className='flex justify-between items-center w-full'>
                    <h3 className='font-[600] text-[13px]'>{ticketData.title}</h3>
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-3xl ${
                                ticketData.status === "Open"
                                 ? "bg-[#b7f8cf]"
                                : ticketData.status === "In Progress"
                                ? "bg-[#f6f4b6]"
                                : "bg-gray-200"
                            }`}> 
                        <div className={`w-2 h-2 rounded-full ${
                            ticketData.status === "Open"
                                ? "bg-green-500"
                                : ticketData.status === "In Progress"
                                ? "bg-yellow-500"
                                : "bg-gray-400"
                            }`}></div>
                        <p className='text-[12px] font-[600]'>{ticketData.status}</p>
                    </div>
                </div>
                <p className='text-[12px] w-full text-left'>{ticketData.description}</p>
                <div className='flex justify-between items-center text-[12px] w-full'>
                    <div className='flex justify-between items-center gap-2'>
                        <p>#{ticketData.id}</p>
                        <p className={`uppercase font-[500] text-[10px] md:text-[12px] 
                            ${ticketData.priority === "HIGH" 
                            ? "text-red-600" 
                            : ticketData.priority === "MEDIUM" 
                            ? "text-yellow-500"
                            : ticketData.priority === "LOW" 
                            ? "text-green-600"
                            : "text-green-600" }`}>
                                {ticketData.priority} PRIORITY</p>
                        
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <p className='text-[10px] md:text-[12px]'>{ticketData.customer}</p>
                        <div className='flex items-center justify-center'>
                        <img src={calender} alt="" className='w-3 h-3 md:h-4 md:w-4 mr-1' />
                        <p>{ticketData.createdAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default TicketCard;