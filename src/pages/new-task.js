import Head from 'next/head'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import TaskForm from '@/components/TaskForm'


export default function Home(props) {
  return (
    <>
      <Head>
        <title>Happy Helpers</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-b h-[calc(100vh-23.8px)] from-teal-400 to-teal-800">
        <NavBar />
        <div className="flex justify-center">
        <TaskForm />
        </div>
      </main>

      <Footer />
    </>
  )
}