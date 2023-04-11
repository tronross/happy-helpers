import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Inter } from 'next/font/google';
import { PrismaClient } from '@prisma/client';

// Helper functions
import addCoordsToTasks from '../helpers/add-coords-to-tasks';
import addCoordsToUser from '../helpers/add-coords-to-user'
import addDistanceToTasks from '../helpers/add-distance-to-tasks';


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
  'Errands',
  'Housework',
  'Personal Care',
  'Tech Support',
  'Charity & Causes'
];

export default function Home({ tasks }) {
  console.log(tasks);
  
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

  const currentView = (view === "List" ? <TaskList tasks={fetchTasks}/> : <Map />)

  // Template
  return (
    <>
      <Head>
        <title>Happy Helpers</title>
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
            <PageHeader setView={setView}/>
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
  const prisma = new PrismaClient();
  // Capture tasks and addresses
  const tasks = await prisma.task.findMany()
  const addresses = await prisma.address.findMany()
  
  // Add latitude, longitude and city to tasks
  addCoordsToTasks(tasks, addresses);

  // Define current user
  const user = await prisma.user.findUnique({
    where: {
      id: 5
    }
  })

  // Add latitude, longitude and city to user; add distance between user and task to tasks
  addCoordsToUser(user, addresses);
  addDistanceToTasks(tasks, user);

  // console.log(tasks)
  return {
    props: { tasks: tasks }
  };
}
