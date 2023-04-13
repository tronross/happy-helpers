import Head from 'next/head';
import { useState, useMemo, useEffect } from 'react';
import { Inter } from 'next/font/google';
import prisma from '../../prisma/.db';
import axios from "axios"

// Component dependencies
import RequestList from '@/components/RequestList';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import RequestSidebar from '@/components/RequestSidebar';


export default function UserTasks({ userRequests, offers }) {

  // Hooks
  const [category, setCategory] = useState('All Categories');
  const [status, setStatus] = useState('Any Status');
  const [selectedTask, setSelectedTask] = useState();
  const [selectedOffers, setSelectedOffers] = useState([]);

  /* When user clicks on accept offer from volunteer button:
   * In tasks table: set task status as pending where id = selectedTask
   * In offers table: set offer status as pending where id = offer.id
   */
  const handleAcceptOffer = async function(offerId) {

    await axios.put(`http://localhost:3000/api/offers/${offerId}`, {newStatus: 'PENDING'});
    await axios.put(`http://localhost:3000/api/tasks/${selectedTask}`, {newStatus: 'PENDING'});

  };

  // const updateTaskStatus = await prisma.task.update({
  //   where: {
  //     id: selectedTask
  //   },
  //   data: {
  //     status: 'PENDING'
  //   }
  // });


  // Create an array of offers received for a task when it is selected
  useEffect(() => {
    if (selectedTask) {
      const offersReceived = offers.filter((offer) => offer.taskId === selectedTask);
      setSelectedOffers(offersReceived);
    }
  }, [selectedTask, offers]);


  const filterRequests = function() {
    if (category === 'All Categories' && status === 'Any Status') {
      return userRequests;
    }
    if (category !== 'All Categories' && status === 'Any Status') {
      return userRequests.filter(request => request.category === category);
    }
    if (category === 'All Categories' && status !== 'Any Status') {
      return userRequests.filter(request => request.status === status);
    }
    if (category !== 'All Categories' && status !== 'Any Status') {
      return userRequests.filter(request => request.category === category && request.status === status);
    }
  };

  // Avoid duplicate function calls with useMemo
  const filteredRequests = useMemo(filterRequests, [category, status, userRequests]);

  // Build an array of the available categories
  const categoryOptions = ['All Categories'];
  for (const request of userRequests) {
    if (!categoryOptions.includes(request.category)) {
      categoryOptions.push(request.category);
    }
  }

  // Build an array of the available statuses
  const statusOptions = ['Any Status'];
  for (const request of userRequests) {
    if (!statusOptions.includes(request.status)) {
      statusOptions.push(request.status);
    }
  }

  // Create dropdown select element to filter by category
  const categoryFilter = categoryOptions.map((category, index) => {
    return (
      <option key={index} value={category}>
        {category}
      </option>
    );
  });

  // Create dropdown select element to filter by status
  const statusFilter = statusOptions.map((status, index) => {
    return (
      <option key={index} value={status}>
        {status}
      </option>
    );
  });

  // Event Handlers
  const resetFilters = function() {
    setCategory('All Categories');
    setStatus('Any Status');
  };

  const handleCategoryChange = function(event) {
    setCategory(event.target.value);
  };

  const handleStatusChange = function(event) {
    setStatus(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Happy Helpers - My help requests</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-neutral-100">
        <NavBar />
        <div className="flex">
          <RequestSidebar
            status={status}
            category={category}
            resetFilters={resetFilters}
            handleStatusChange={handleStatusChange}
            statusFilter={statusFilter}
            handleCategoryChange={handleCategoryChange}
            categoryFilter={categoryFilter}
            selectedOffers={selectedOffers}
            handleAcceptOffer={handleAcceptOffer}
          />
          <section className='flex flex-col p-2 max-w-6xl'>
            <div className="flex justify-between m-4 text-lg text-teal-700">
              <h1 className="text-[1.5em]">My requests for help</h1>
            </div>
            <RequestList
              requests={filteredRequests}
              selectedTask={selectedTask}
              setSelectedTask={setSelectedTask}
            />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

// Data fetching
export const getServerSideProps = async function() {

  /* Capture tasks with addresses:
    SELECT tasks.*, addresses.* FROM tasks
    JOIN addresses ON tasks.address_id = addresses.id
    WHERE tasks.user_id = 1
    ORDER BY start_date desc;
  */
  const userRequests = await prisma.task.findMany({
    where: {
      userId: 1
    },
    include: {
      address: true
    },
    orderBy: {
      startDate: 'desc',
    },
  });

  /* Capture offers with volunteer's user info:
    SELECT offers.*, users.* FROM offers
    JOIN users ON offers.user_id = users.id;
  */
  const offers = await prisma.offer.findMany({
    include: {
      user: true
    }
  });

  return {
    props: { userRequests: JSON.parse(JSON.stringify(userRequests)), offers }
  };
};
