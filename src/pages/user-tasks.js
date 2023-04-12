import Head from 'next/head';
import { useState } from 'react';
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


// Global variables
const categoryOptions = [
  'All Tasks',
  'Heavy Lifting',
  'Animal Care',
  'DIY',
  'Driving',
  'Cooking',
  'Yardwork'
];

export default function UserTasks({ userRequests }) {
  // Hooks
  const [fetchRequests, setfetchRequests] = useState(userRequests);
  const [category, setCategory] = useState(categoryOptions);
  // const [selectedSidebar, setSelectedSidebar] = useState(sidebar[0]);

  // Create dropdown select element to test filter functionality
  const dropdownSelect = (e) => {
    const selectedCategory = e.target.value;
    console.log('selectedCategory', selectedCategory);
    setCategory(selectedCategory);
  };

  const categoryFilter = categoryOptions.map((category, index) => {
    return (
      <option key={index} value={category}>
        {category}
      </option>
    );
  });

  // Template
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
          {/* <Sidebar
            sidebarOptions={sidebar}
            setSelectedSidebar={setSelectedSidebar}
          /> */}
          <section className='flex flex-col p-2 grow'>
            {/* The header will be different to the PageHeader component in the home page */}
            <div className="flex justify-between m-4 text-lg text-teal-700">
              <h1 className="text-[1.5em]">My requests for help</h1>
              <span>Filter by category</span>
              <select onChange={dropdownSelect}>
                {categoryFilter}
              </select>
            </div>
            <RequestList requests={fetchRequests} />
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
