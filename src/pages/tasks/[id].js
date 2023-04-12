import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import DetailedTask from "@/components/DetailedTask";
import { useState } from "react";
import DetailedTaskRow from "@/components/DetailedTaskRow";
import { useRouter } from "next/router";
import prisma from "../../../prisma/.db";


export default function TaskPage({selectedTask, selectedUser, userTasks}) {
  const selectedId = selectedTask.id


  return (
    <>
    <Head>
      <title>Happy Helpers</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar />
    <main>
      <h1 className="uppercase text-teal-600 px-10 mb-5 font-bold text-2xl">{selectedUser.firstName}&apos;s Tasks:</h1>
      <div className="">
        <DetailedTaskRow selectedId={selectedId} selectedUser={selectedUser} userTasks={userTasks}/>
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
      userId: selectedTask.userId
    }
  })


  return {
    props: { selectedTask: JSON.parse(JSON.stringify(selectedTask)),
             selectedUser: JSON.parse(JSON.stringify(currentUser)),
             userTasks: JSON.parse(JSON.stringify(userTasks))}
  };
}