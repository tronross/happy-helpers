import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import axios from "axios";
import DetailedTaskRow from "@/components/DetailedTaskRow";
import TaskRow from "@/components/TaskRow";
import prisma from "../../../prisma/.db";
import { useEffect, useState } from "react";


export default function TaskPage({selectedTask, selectedUser, userTasks, offers, userAddress, similarTasks}) {

  console.log(selectedTask)

  const [selectedId, setSelectedId] = useState(selectedTask.id)
  // const [newSelectedId, setNewSelectedId] = useState(selectedTask.id)

  const sendOffer = async (taskId, userId, setOffer) => {
    await axios.post('http://localhost:3000/api/offers', [taskId, userId])
    .then(setOffer(true))
  }

  // useEffect(() => {
  //   setNewSelectedId(selectedId)
  //   console.log(selectedId)
  // }, [selectedTask])
  
  return (
    <>
    <Head>
      <title>Happy Helpers</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar />
    <main>
      <h1 className="uppercase text-teal-600 px-10 font-bold text-2xl">{selectedUser.firstName}&apos;s Tasks:</h1>
      <h1 className="uppercase text-teal-600 px-10 font-bold t-lg">{userTasks.length} Available</h1>
      <p></p>
      <div className="">
        <DetailedTaskRow sendOffer={sendOffer} selectedId={selectedId} selectedUser={selectedUser} userTasks={userTasks} offers={offers} userAddress={userAddress} rowType="userTasks" setSelectedId={setSelectedId}/>
      </div>
      <h1 className="uppercase text-teal-600 px-10 mt-10 font-bold text-2xl">Similar Tasks:</h1>
      <div className="">
        <TaskRow userTasks={similarTasks} rowType="similar" changeId={setSelectedId}/>
      </div>
    </main>

    <Footer/>
  </>
  )
}

export async function getServerSideProps(context) {
  const taskId = context.params.id;

  // Capture tasks and addresses and users
  const selectedTask = await prisma.task.findUnique({
    where: {
      id: Number(taskId)
    }
  })
  

  // Define current user
  const currentUser = await prisma.user.findUnique({
    where: {
      id: selectedTask.userId
    }
  })

  //Define current users tasks
  const userTasks = await prisma.task.findMany({
    where: {
      userId: selectedTask.userId,
      status: "OPEN"
    },
    include: {
      address: true,
    }
  })


  //all offers of logged in user
  const offers = await prisma.offer.findMany({
    where: {
      userId: 2
    }
  })


  //similar tasks by category but not current user
  const similarTasks = await prisma.task.findMany({
    where: {
      category: selectedTask.category,
      status: "OPEN"
    }
  })

  return {
    props: { selectedTask: JSON.parse(JSON.stringify(selectedTask)),
             selectedUser: JSON.parse(JSON.stringify(currentUser)),
             userTasks: JSON.parse(JSON.stringify(userTasks)),
             offers: JSON.parse(JSON.stringify(offers)),
             similarTasks: JSON.parse(JSON.stringify(similarTasks)),
            }
  };
}