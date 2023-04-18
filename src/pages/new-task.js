import Head from 'next/head'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import TaskForm from '@/components/TaskForm'
import { useState } from 'react'
import prisma from '../../prisma/.db'


export default function NewTask(props) {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    startDate: "",
    endDate: "",
    category: "",
    nbHelpers: "",
    image: "",
    address: "",
    city: "",
    postcode: "",
    startTime: {
      hour: "1",
      minute: "00",
      ampm: "PM"
    },
    endTime: {
      hour: "1",
      minute: "00",
      ampm: "PM"
    }
  })
  return (
    <>
      <Head>
        <title>Happy Helpers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="full-height">
      <NavBar name={props.user.firstName}
                id={props.user.id}/>
        <div className="flex justify-center">
        <TaskForm formData={formData} setFormData={setFormData} user={props.user}/>
        </div>
      </main>

      <Footer/>
    </>
  )
}

export async function getServerSideProps() {

  const user = await prisma.user.findUnique({
    where: {
      id: 2
    },
    include: {
      address: true
    }
  })
  

  return {
    props:  { 
      user: JSON.parse(JSON.stringify(user)),
    }
  }
}