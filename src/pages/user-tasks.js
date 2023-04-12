import Head from 'next/head';
import { useState } from 'react';
import { Inter } from 'next/font/google';
import { PrismaClient } from '@prisma/client';

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
const sidebarOptions = [
  'All Tasks',
  'Errands',
  'Housework',
  'Personal Care',
  'Tech Support',
  'Charity & Causes'
];

export default function UserTasks({ userRequests }) {
  // Hooks
  // do we need to put userRequests into state? can we add them directly as props for RequestList??
  const [fetchRequests, setfetchRequests] = useState(userRequests);
  const [sidebar, setSidebar] = useState(sidebarOptions);
  const [selectedSidebar, setSelectedSidebar] = useState(sidebar[0]);

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
          <Sidebar
            sidebarOptions={sidebar}
            setSelectedSidebar={setSelectedSidebar}
          />
          <section className='flex flex-col p-2 grow'>
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

  const prisma = new PrismaClient();

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
