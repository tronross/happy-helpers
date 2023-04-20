import Head from 'next/head';
import { Inter } from 'next/font/google';
import Image from 'next/image';

// Component imports
import Button from '@/components/Button';
import Link from 'next/link';

// import main from 

const inter = Inter({ subsets: ['latin'] });

export default function Landing() {

  // Template
  return (
    <>
      <Head>
        <title>Happy Helpers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          {
            `.bg-shape {
                width: 620px;
                height: 620px;
                border-radius: 9999px;
            }

            .opacity-50 {
              opacity: .5;
            }

            .bg-blur {
              filter: blur(150px)
            }
            `
          }
        </style>
      </Head>
      <main>
        <div className='absolute inset-0 flex justify-between'>
          <div className='bg-shape bg-teal-600 opacity-50 bg-blur'></div>
          <div className='bg-shape bg-violet-600 opacity-50 bg-blur'></div>
        </div>
        <nav className="flex justify-between items-center p-5 tracking-wide font-bold mx-5 mb-2 fixed sticky top-0 z-50">
          <Link className="text-green-900 text-xl" href="/">
            Happy Helpers
          </Link>
          <Link href="/profile-page/1">
            <button className="bg-white hover:bg-teal-300 active:bg-green-900 px-10 py-1 rounded-full text-violet-400 h-8 text-xl">
              Login
            </button>
          </Link>
        </nav>
        <section className="mx-20">
          <article className="flex justify-center">
            <div className="w-1/2 flex flex-col justify-center">
              <h1 className="text-green-900 font-bold text-6xl">
                Find your next volunteer Opportunity
              </h1>
              <br></br>
              <p className="text-3xl text-green-900">
                Happy Helpers gives everyone a chance to have a nearby hand when needed most.
              </p>
            </div>
            <img src="/images/main.png" alt="main" className="w-1/2" />
          </article>

          <h1 className="flex justify-center text-green-900 font-bold text-4xl pt-40">How it Works?</h1>

          <article className="flex justify-center pt-20">
            <p className="w-1/2 flex flex-col justify-center text-3xl text-black-900">
              Users can post a task they need help with or browse upcoming tasks which can be filtered by location, category and date.
            </p>
            <img src="/images/1.png" alt="1" className="w-1/2" />
          </article>

          <article className="flex justify-center pt-20">
            <img src='/images/2.png' alt="2" className="w-1/2" />
            <p className="flex flex-col justify-center text-3xl text-black-900 w-1/2">
              Offering help is simple, just find a task you want to volunteer for and hit OFFER. Once an offer comes in for one of your own tasks, you can view their profiles and select the best match.
            </p>
          </article>

          <article className="flex justify-center pt-20">
            <p className="w-1/2 flex flex-col justify-center text-3xl text-black-900">
              After being accepted for a task, you can view it on your profile page with more information. Patiently wait for the day to come to receive help or help your neighbor with their task.
            </p>
            <img src="/images/3.png" alt="3" className="w-1/2" />
          </article>

          <article className="flex justify-center pt-20">
            <img src="/images/4.png" alt="4" className="w-1/2" />
            <p className="flex flex-col justify-center text-3xl text-black-900 w-1/2">
              Once your task is finished don't forget to check it complete and reward your volunteer with a star if deserved. Stars show up on your profile to show others they can rely on you to get the task done.
            </p>
          </article>

          <article className="border-black border-solid border-4 p-10 rounded-3xl">
            <h1 className="flex justify-center text-green-900 font-bold text-4xl">
              Sign Up and Join Our Community
            </h1>
            <br></br>
            <div className="flex justify-center">
              <div className="w-1/2 border-solid border-green-900 border-r-4 px-10">
                <h1 className="text-green-900 text-5xl font-bold">
                  Happy Helpers
                </h1>
                <br></br>
                <p className="text-black-900 text-2xl">A crowd-sourcing volunteering app with a focus on building community through in-person interactions and mutual aid.</p>
              </div>
              <form className="flex flex-col content-center w-1/2 px-10">
                <input className="rounded-full border-violet-300 border-solid border-2 pl-10 text-2xl placeholder-green-900 mb-5" type="text" id="firstName" name="firstName" placeholder="First Name" />
                <input className="rounded-full border-violet-300 border-solid border-2 pl-10 text-2xl placeholder-green-900 mb-5"type="text" id="lastName" name="lastName" placeholder="Last Name" />
                <input className="rounded-full border-violet-300 border-solid border-2 pl-10 text-2xl placeholder-green-900 mb-5"type="text" id="email" name="email" placeholder="Email" />
                <input className="rounded-full border-violet-300 border-solid border-2 pl-10 text-2xl placeholder-green-900 mb-5" type="text" id="password" name="password" placeholder="Password" />
              </form>
            </div>
            <div className="flex justify-center pt-10">
              <button className="border-solid border-violet-300 border-2 bg-white hover:bg-violet-300 px-10 rounded-full text-green-900 h-8 text-xl">
                Sign Up
              </button>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}