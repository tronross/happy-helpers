import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Inter } from 'next/font/google';
import { PrismaClient } from '@prisma/client';

// Helper functions
import getDistance from '../helpers/get-distance';
import getAllTasks from '../helpers/get-all-tasks';

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
  
  const tasks = await prisma.task.findMany()
  const addresses = await prisma.address.findMany()
  
  getAllTasks(tasks, addresses);


  // distance sandbox
  const user1 = await prisma.user.findUnique({
    where: {
      id: 1
    }
  })

  const user2 = await prisma.user.findUnique({
    where: {
      id: 2
    }
  })

  const user1AddId = user1.addressId;
  const location1 = await prisma.address.findUnique({
    where: {
      id: parseInt(user1AddId)
    }
  })

  const lat1 = location1.latitude;
  const lon1 = location1.longitude;

  const user2AddId = user2.addressId;
  const location2 = await prisma.address.findUnique({
    where: {
      id: parseInt(user2AddId)
    }
  })

  const lon2 = location2.longitude;
  const lat2 = location2.latitude;
  // console.log(lat1, lon1, lat2, lon2);

  const distance = getDistance(lat1, lon1, lat2, lon2);
  // console.log(location1)
  // console.log(location2)
  // console.log(` The distance between the two places is ${Math.round(distance)}km`)


  // console.log(tasks)
  return {
    props: { tasks: tasks }
  };
}
