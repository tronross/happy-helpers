import Head from 'next/head';
import { Inter } from 'next/font/google';
import Image from 'next/image';

// Component imports
import Button from '@/components/Button';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Landing() {

  const [clientWindowHeight, setClientWindowHeight] = useState();

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(clientWindowHeight)
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);
  
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
                width: 420px;
                height: 2620px;
                border-radius: 9999px;
                
            }

            .opacity-50 {
              opacity: .5;
            }

            .bg-blur {
              filter: blur(300px)
            }
            `
          }
        </style>
      </Head>
      <main className='font-fredoka flex flex-col items-center w-full'>
        <div className='absolute inset-0 flex justify-between'>
          <div className='bg-shape bg-teal-300 opacity-50 bg-blur'></div>
          <div className='bg-shape bg-violet-400 opacity-50 bg-blur'></div>
        </div>

        <nav className="p-5 tracking-wide font-bold px-12 mb-2 fixed sticky top-0 z-50 w-full" style={{
          background: `rgba(240, 253, 250, ${backgroundTransparacy})`,
          // padding: `${padding}px 0px`,
          boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`
          }}>
            <div className='flex justify-between'>
          <Link className="text-teal-700 text-2xl" href="/">
            <p className='drop-shadow-md'>Happy Helpers</p>
          </Link>
          <Link href="/profile-page/1">
            <button className="bg-violet-50 border-2 border-violet-300 hover:bg-violet-300 hover:text-white hover:border-violet-50 active:bg-violet-400 font-medium px-10 py-1 rounded-full text-violet-400 h-8 text-xl flex items-center justify-center drop-shadow-md">
              Login
            </button>
          </Link>
          </div>
        </nav>
        {/* Content */}
        <div className="flex flex-col lg:w-[80%] md:w-[90%] mt-24">
          <article className="flex justify-center">
            <div className="w-1/2 flex flex-col justify-center">
              <h1 className="text-teal-700 font-bold text-[42px] drop-shadow-md">
                Find your next volunteer Opportunity
              </h1>
              <br></br>
              <p className="text-2xl text-teal-700 drop-shadow-md">
                Happy Helpers gives everyone a chance to have a nearby hand when needed most.
              </p>
            </div>
            <img src="/images/main.png" alt="main" className="w-1/2 drop-shadow-lg" />
          </article>

          <h1 className="flex justify-center text-teal-700 drop-shadow-md font-semibold text-4xl py-20">How it Works?</h1>


          <article className="flex justify-center">
            <p className="w-1/2 flex flex-col justify-center text-xl text-teal-700 drop-shadow-md">
              Users can post a task they need help with or browse upcoming tasks which can be filtered by location, category and date.
            </p>
            <img src="/images/1.png" alt="1" className="w-1/2 drop-shadow-lg" />
          </article>

          <article className="flex justify-center">
            <img src='/images/2.png' alt="2" className="w-1/2 drop-shadow-lg" />
            <p className="flex flex-col justify-center text-xl text-teal-700 drop-shadow-md w-1/2">
              Offering help is simple, just find a task you want to volunteer for and hit OFFER. Once an offer comes in for one of your own tasks, you can view their profiles and select the best match.
            </p>
          </article>

          <article className="flex justify-center">
            <p className="w-1/2 flex flex-col justify-center text-xl text-teal-700 drop-shadow-md">
              After being accepted for a task, you can view it on your profile page with more information. Patiently wait for the day to come to receive help or help your neighbor with their task.
            </p>
            <img src="/images/3.png" alt="3" className="w-1/2 drop-shadow-lg" />
          </article>

          <article className="flex justify-center pb-20">
            <img src="/images/4.png" alt="4" className="w-1/2 drop-shadow-lg" />
            <p className="flex flex-col justify-center text-xl text-teal-700 drop-shadow-md w-1/2">
              Once your task is finished don't forget to check it complete and reward your volunteer with a star if deserved. Stars show up on your profile to show others they can rely on you to get the task done.
            </p>
          </article>

          <article className="border-violet-100 shadow-xl border-[3px] p-10 rounded-3xl bg-violet-50">
            <h1 className="flex justify-center text-teal-700 drop-shadow-md font-medium text-3xl mb-4">
              Sign Up and Join Our Community
            </h1>
            <br></br>
            <div className="flex justify-center">
              <div className="w-1/2 border-solid border-teal-700 drop-shadow-md border-r-2 px-10">
                <h1 className="text-teal-700 drop-shadow-md text-3xl font-semibold">
                  Happy Helpers
                </h1>
                <br></br>
                <p className="text-teal-700 drop-shadow-md text-xl">A crowd-sourcing volunteering app with a focus on building community through in-person interactions and mutual aid.</p>
              </div>
              <form className="flex flex-col content-center justify-center w-1/2 px-10">
                <input className="rounded-full border-violet-300 border-solid border-2 pl-5 text-lg placeholder-violet-800 bg-violet-50 focus:outline-violet-300 drop-shadow-md mb-5" type="text" id="firstName" name="firstName" placeholder="First Name" />
                <input className="rounded-full border-violet-300 border-solid border-2 pl-5 text-lg placeholder-violet-800 bg-violet-50 focus:outline-violet-300 drop-shadow-md mb-5" type="text" id="lastName" name="lastName" placeholder="Last Name" />
                <input className="rounded-full border-violet-300 border-solid border-2 pl-5 text-lg placeholder-violet-800 bg-violet-50 focus:outline-violet-300 drop-shadow-md mb-5" type="text" id="email" name="email" placeholder="Email" />
                <input className="rounded-full border-violet-300 border-solid border-2 pl-5 text-lg placeholder-violet-800 bg-violet-50 focus:outline-violet-300 drop-shadow-md" type="text" id="password" name="password" placeholder="Password" />
              </form>
            </div>
            <div className="flex justify-center pt-10">
              <button className="bg-violet-50 border-2 border-violet-300 hover:bg-violet-300 hover:text-white hover:border-violet-50 active:bg-violet-400 font-normal px-10 py-1 rounded-full text-violet-800 h-8 text-xl flex items-center justify-center drop-shadow-md">
                <p>Sign Up</p>
              </button>
            </div>
          </article>
        </div>
      </main>
      <footer className="flex justify-center bg-violet-400 mt-20 p-10 text-white">
        <div className='flex'>
        <div>
          <h1 className="font-bold text-2xl">Happy Helpers</h1>
          <p className="text-m">Neighbors helping Neighbors</p>
        </div>
        <div className='border-solid border-white border-r-2 pl-[6em]'></div>
        <div className="pl-40">
          <h1 className="font-bold text-2xl">About</h1>
          <p>Careers</p>
          <p>Our Projects</p>
        </div>
        <div className="pl-40">
          <h1 className="font-bold text-2xl">Partnership</h1>
          <p>Partners</p>
          <p>Websites</p>
        </div>
        <div className="pl-40">
          <h1 className="font-bold text-2xl">Support</h1>
          <p>Support Request</p>
          <p>Contact</p>
        </div>
        </div>
      </footer>
    </>
  );
}