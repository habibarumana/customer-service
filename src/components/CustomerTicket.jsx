
import { toast } from 'react-toastify';
import TicketCard from './TicketCard';


const CustomerTicket = ({ticketData,selectedTickets,setSelectedTickets,handleComplete,resolvedTickets,setResolvedTickets}) => {
      const handleRemoveResolved = (ticket) => {
        setResolvedTickets(prev => prev.filter(t => t.id !== ticket.id));
        toast.warn(`Ticket "${ticket.title}" removed from resolved`);
    };
    return (  
       <div className='bg-[#f5f5f5]'>
        <div className='max-w-[1150px]  mx-auto grid grid-cols-1 md:grid-cols-3 pt-10 gap-4 p-5  md:px-0'>
            <div className=' col-span-2'>
            <h2 className='text-[25px] font-[600] text-[#56585b]'>Customer Tickets</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 py-5   text-black'>

            {
                ticketData.map(ticketData => <TicketCard 
                    
                    key={ticketData.id} 
                    ticketData={ticketData}
                    selectedTickets={selectedTickets}
                    setSelectedTickets={setSelectedTickets}
                     
                    ></TicketCard>)
            }    
            </div>
            </div>    
            <div className='lg:col-span-1 flex flex-col w-full'>
                <div className='px-5'>
                    <h2 className='text-[25px] font-[600] text-[#56585b]'>Task Status</h2>
                    <div className='flex flex-col gap-2 py-5 bg-white p-2'>
                       {
                            selectedTickets.length  > 0 ? selectedTickets.map(ticket=>

                                
                        <div className='flex flex-col bg-white p-2 shadow-sm rounded-sm'>
                            <h2 className='font-[600] text-black'>{ticket.title}</h2>
                            <button onClick={() => {

                                handleComplete(ticket)
                                toast.success(`Ticket "${ticket.title}" completed `);
                                
                            }} className='btn  m-2 border-none   bg-[#02a53c] text-white'>Complete</button>
                        </div>
                        ): (
                            <div className='text-center bg-white text-gray-500 py-5'>No Tasks in Progress</div>
                        )
                        }
                       
                    </div>
                    <div className='px-5 bg-white p-2 mt-5' >
                    <h2 className='text-[25px] font-[600] text-[#56585b]'>Resolved Task</h2>
                <div className=' flex flex-col gap-2 py-2'>
                    { resolvedTickets.map(ticket => 
                    <div key={ticket.id} className='bg-[#d7f8e5a5] p-3 rounded-md text-black'> 
                    
                    <h2 className='font-[600] text-[13px]'>{ticket.title}</h2>
                    <div className='flex justify-between items-center'>
                        <p className='text-green-400'>✅ completed</p>
                        <button 
                                onClick={() => handleRemoveResolved(ticket)}
                                className='text-[13px] cursor-pointer text-red-500 hover:text-red-700'
                            >
                                click to remove
                            </button>
                    </div>                   
                     </div> ) }
                </div>
                </div>

                </div>                
                
            </div>
            
            
        </div>
    </div>

    );
};

export default CustomerTicket;