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
  'All Categories',
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
  
  // Hooks
  const [fetchTasks, setFetchTasks] = useState([...tasks]);
  const [sidebar, setSidebar] = useState(sidebarOptions);
  const [selectedSidebar, setSelectedSidebar] = useState(sidebar[0]);
  const [view, setView] = useState("List");
  const [filteredTasks, setFilteredTasks] = useState([...tasks]);
  
  const tasksToFilter = fetchTasks;
  const taskFilters = {
    distance: 50,
    category: 'All Categories'
  }
  const [category, setCategory] = useState(taskFilters.category)

  const filterTasks = function(tasks, filters) {
    let unfilteredTasks = [...tasks]
    const distance = filters.distance;
    const category = filters.category;


    const tasksCloserThan = unfilteredTasks.filter(task => task.distance <= distance);

    if (category === 'All Categories') {
      setFilteredTasks(tasksCloserThan)
    } else {
      const tasksInCategory = tasksCloserThan.filter(task => task.category === category);
      setFilteredTasks(tasksInCategory)
    }
  }
  
  // filterTasks([...tasks], taskFilters)
  const currentView = (view === "List" ? <TaskList tasks={filteredTasks} /> : <Map />)
  
  const tasksSortD = function() {
   setFilteredTasks(sortTasksByDistance([...tasks]))
  }

  const tasksSortT = function() {
    setFilteredTasks(sortTasksByStartTime([...tasks]))
  }


  
  // Template
  return (
    <>
      <Head>
        <title>Happy Helpers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar name={user.firstName}
                id={user.id}/>
        <div className="flex">
          <Sidebar
            sidebarOptions={sidebar}
            setSelectedSidebar={setSelectedSidebar}
            sortDistance={tasksSortD}
            sortTime={tasksSortT}
            filterTasks={() => filterTasks(tasksToFilter, taskFilters)}
            filters={taskFilters}
            setCategory={setCategory}
            />
          <section className='flex flex-col p-2 grow'>
            <PageHeader setView={setView} city={user.address.city} category={category} />
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
  const tasks = await prisma.task.findMany({
    where: {
      status: "OPEN"
    },
    include: {
      address: true
    },
    orderBy: {
      startDate: 'desc'
    }
  })
  
  // Define current user
  const userFetch = await prisma.user.findMany({
    where: {
      id: 2
    },
    include: {
      address: true
    }
  })
  
  const user = userFetch[0];
  console.log(user)
  
  // Add distance between user and task to tasks, order by ascending start time
  addDistanceToTasks(tasks, user);
  // const sortedTasks = sortTasksByDistance(tasks);
  // console.log(tasks)
  const sortedTasks = sortTasksByStartTime(tasks);
  // console.log(sortedTasks)
  return {
    props: {
      tasks: JSON.parse(JSON.stringify(sortedTasks)),
      user: JSON.parse(JSON.stringify(user))
    }
  };
}





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