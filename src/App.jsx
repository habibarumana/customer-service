import Navbar from './components/Navbar'
 import { ToastContainer} from 'react-toastify';

import Footer from './components/Footer'
import ProgressCard from './components/ProgressCard'
import CustomerTicket from './components/CustomerTicket'
import './App.css'
import { Suspense, use, useState } from 'react'


const fetchTicket = async () => {
  const res = await fetch('/ticket.json');
  return res.json();
}

const ticketData = fetchTicket()


function App() {
  const tickets = use(ticketData);
  const [allTickets, setAllTickets] = useState([]);
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);


  if (tickets && allTickets.length === 0) {
    setAllTickets(tickets);
  }

  const handleComplete = (ticket) => {
    setSelectedTickets(prev => prev.filter(t => t.id !== ticket.id));
    setResolvedTickets(prev => [...prev, ticket]);
    setAllTickets(prev => prev.filter(t => t.id !== ticket.id));
  };

  const handleRemove = (ticket) => {
    setResolvedTickets(prev => prev.filter(t => t.id !== ticket.id));
    

  };

  return (
    <>
      <Navbar></Navbar>
      <ProgressCard
        inProgress={selectedTickets.length}
        resolved={resolvedTickets.length}
      />
      <Suspense fallback={<div className="flex justify-center items-center">
        <span className="loading loading-spinner w-20 h-20 text-error"></span>
      </div>}>
        <CustomerTicket
          ticketData={allTickets}
          selectedTickets={selectedTickets}
          setSelectedTickets={setSelectedTickets}
          handleComplete={handleComplete}
          handleRemove={handleRemove}
          resolvedTickets={resolvedTickets}
          setResolvedTickets= {setResolvedTickets}

        />
      </Suspense>
      <Footer></Footer>

      <ToastContainer></ToastContainer>
      
    </>
  )
}

export default App