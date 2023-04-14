import Head from 'next/head';
import { useState, useEffect, useMemo } from 'react';
import { Inter } from 'next/font/google';
import prisma from '../../prisma/.db';


// Component dependencies
import RequestList from '@/components/RequestList';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Sidebar from '@/components/Sidebar';

// Helper Functions
// import addCoordsToTasks from '../helpers/add-coords-to-tasks';
// import addCoordsToUser from '../helpers/add-coords-to-user'
// import addDistanceToTasks from '../helpers/add-distance-to-tasks';

export default function UserTasks({ userRequests }) {

  // Hooks
  const [category, setCategory] = useState('All Categories');
  const [status, setStatus] = useState('Any Status');

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
  for (const request of filteredRequests) {
    if (!categoryOptions.includes(request.category)) {
      categoryOptions.push(request.category);
    }
  }

  // Build an array of the available statuses
  const statusOptions = ['Any Status'];
  for (const request of filteredRequests) {
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

  // Template
  return (
    <>
      <Head>
        <title>Happy Helpers - My help requests</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <NavBar />
      <main className="bg-neutral-100">
        <div className="flex">
          {/* <Sidebar
            sidebarOptions={sidebar}
            setSelectedSidebar={setSelectedSidebar}
          /> */}
          <section className='flex flex-col p-2 grow'>
            <div className="flex justify-between m-4 text-lg text-teal-700">
              <h1 className="text-[1.5em]">My requests for help</h1>
              <div>
                <button
                  className="inline-block w-[8em] h-[3em] leading-none bg-transparent hover:bg-teal-700 text-teal-700 hover:text-white rounded font-semibold uppercase tracking-wide text-xs text-center items-center border border-teal-700 hover:border-transparent"
                  onClick={resetFilters}
                >
                  Reset
                </button>
                <span> Filter by request status: </span>
                <select
                  name="selectedStatus"
                  value={status}
                  onChange={handleStatusChange}
                >
                  {statusFilter}
                </select>
                <span> Filter by category: </span>
                <select
                  name="selectedCategory"
                  value={category}
                  onChange={handleCategoryChange}
                >
                  {categoryFilter}
                </select>
              </div>
            </div>
            <RequestList requests={filteredRequests} />
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

  return {
    props: { userRequests: JSON.parse(JSON.stringify(userRequests)) }
  };
};
