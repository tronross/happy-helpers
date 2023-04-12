import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Inter } from 'next/font/google';
import prisma from '../../prisma/.db';

// Helper functions
import addCoordsToTasks from '../helpers/add-coords-to-tasks';
import addCoordsToUser from '../helpers/add-coords-to-user'
import addDistanceToTasks from '../helpers/add-distance-to-tasks';
import sortTasksByDistance from '../helpers/sort-tasks-by-distance';
import sortTasksByStartTime from '../helpers/sort-tasks-by-start-time';


// Component dependencies
import TaskList from '@/components/TaskList';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Sidebar from '@/components/Sidebar';
import PageHeader from '@/components/PageHeader';
import Map from '@/components/Map';

// Global variables
const inter = Inter({ subsets: ['latin'] });
const sidebarOptions = [
  'All Tasks',
  'Animal Care',
  'Charity & Causes',
  'Cooking',
  'DIY',
  'Driving',
  'Errands',
  'Heavy Lifting',
  'Housework',
  'Personal Care',
  'Tech Support',
  'Yardwork'
];

export default function Home({ tasks, user }) {
  // console.log(tasks);

  // Hooks
  const [fetchTasks, setFetchTasks] = useState(tasks);
  const [sidebar, setSidebar] = useState(sidebarOptions);
  const [selectedSidebar, setSelectedSidebar] = useState(sidebar[0]);
  const [view, setView] = useState("List");
  // const [category, setCategory] = useState(0);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await axios.post('http://localhost:3000/api/tasks', fetchTasks);
  //     return data;
  //   };
  //   const theFetcher = fetchData();
  // console.log(theFetcher);
  // });
  // console.log(fetchTasks);

  // useEffect (() => {
  //   setFetchTasks((prev) => {
  //     prev.filter(item => ) 
  //   })

  // }, [selectedSidebar])

  const currentView = (view === "List" ? <TaskList tasks={fetchTasks} /> : <Map />)

  // Template
  return (
    <>
      <Head>
        <title>Happy Helpers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <div className="flex">
          <Sidebar
            sidebarOptions={sidebar}
            setSelectedSidebar={setSelectedSidebar}
          />
          <section className='flex flex-col p-2 grow'>
            <PageHeader setView={setView} city={user.city} />
            {currentView}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

// Data fetching
export async function getServerSideProps() {

  // Capture tasks with addresses:

  const tasks = await prisma.$queryRaw`
    SELECT tasks.*, addresses.city, addresses.latitude, addresses.longitude FROM tasks
    JOIN addresses ON tasks.address_id = addresses.id
    ORDER BY start_date desc;`

  // Define current user

  const userFetch = await prisma.$queryRaw`
    SELECT users.*, addresses.city, addresses.latitude, addresses.longitude FROM users
    JOIN addresses ON users.address_id = addresses.id
    WHERE users.id = 1`

  const user = userFetch[0];

  // Calculate distance between user and task, order by ascending distance
  addDistanceToTasks(tasks, user);
  sortTasksByDistance(tasks);

  return {
    props: {
      tasks: JSON.parse(JSON.stringify(tasks)),
      user: JSON.parse(JSON.stringify(user))
    }
  };
}
