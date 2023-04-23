import Head from 'next/head';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Xarrow, { useXarrow, Xwrapper } from "react-xarrows";

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

  const handleArrowClick = () => {
    const target = document.getElementById('scrollStop');
    target.scrollIntoView({behavior: 'smooth' });
  }
  
  // Template
  return (
    <>
      <Head>
        <title>Happy Helpers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />   
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
          <Link href="/home">
            <button className="bg-violet-50 border-2 border-violet-300 hover:bg-violet-300 hover:text-white hover:border-violet-50 active:bg-violet-400 font-medium px-10 py-1 rounded-full text-violet-400 h-8 text-xl flex items-center justify-center drop-shadow-md">
              Login
            </button>
          </Link>
          </div>
        </nav>
        {/* Content */}
        <div className="flex flex-col lg:w-[80%] md:w-[90%] mt-24">
          <article className="flex justify-center mb-36">
            <div className="w-1/2 flex flex-col justify-center">
              <h1 className="text-teal-700 font-bold text-[46px] drop-shadow-md">
                "Great acts are made up of small deeds."
              </h1>
              <p className='text-teal-700 drop-shadow ml-10 mb-3'>- Lao Tzu</p>
              <p className="text-2xl text-teal-700 drop-shadow-md">
              Happy Helpers makes it easy for you to volunteer your time and skills to help a neighbour or ask for a favour. Some things we can't do alone, together we build a Community. 
              </p>
            </div>
            <img src="/images/main.png" alt="main" className="w-1/2 drop-shadow-lg" />
          </article>

          <button className='self-center bounce mb-12' onClick={handleArrowClick}>
          <svg
            viewBox="0 0 16 16"
            height="3em"
            width="3em"
            className='fill-violet-400 drop-shadow-md hover:fill-violet-500 active:fill-violet-800'
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1014 0A7 7 0 001 8zm15 0A8 8 0 110 8a8 8 0 0116 0zM8.5 4.5a.5.5 0 00-1 0v5.793L5.354 8.146a.5.5 0 10-.708.708l3 3a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V4.5z"
            />
          </svg>
          </button>

            <div id="scrollStop" className='relative'>
          <h1 className="flex justify-center text-teal-700 drop-shadow-md font-semibold text-4xl mt-24 mb-12">How it Works?</h1>
          <div id="start-1" className=' h-4 w-4 absolute bottom-[10%] left-[49%]'></div>
            </div>


          <article className="flex relative justify-center items-center">
            <p  className="w-1/2 flex flex-col justify-center text-xl text-teal-700 drop-shadow-md">
              Users can post a task they need help with or browse upcoming tasks which can be filtered by location, category and date.
            </p> 
            <div id="end-1" className='h-4 w-4 absolute top-[35%] left-[20%]'></div>
            <div id="start-2" className='h-4 w-4 absolute bottom-[35%] left-[20%]'></div>
            <img src="/images/1.png" alt="1" className="w-1/2 drop-shadow-lg" />
          </article>
          <Xarrow 
            start="start-1"
            end="end-1"
            curveness={1.2}
            dashness={true}
            color='#c4b5fd'
            showHead={false}
            showTail={true}
            tailShape='circle'
            endAnchor={'top'}
            startAnchor={'bottom'}
             />



          <article className="flex relative justify-center">
            <img src='/images/2.png' alt="2" className="w-1/2 drop-shadow-lg" />
            <p className="flex flex-col justify-center text-xl text-teal-700 drop-shadow-md w-1/2">
              Offering help is simple, just find a task you want to volunteer for and hit OFFER. Once an offer comes in for one of your own tasks, you can view their profiles and select the best match.
            </p>
            <div id="end-2" className='h-4 w-4 absolute top-[33%] left-[70%]'></div>
            <div id="start-3" className='h-4 w-4 absolute bottom-[33%] left-[70%]'></div>
          </article>

          <Xarrow 
            start="start-2"
            end="end-2"
            curveness={1.2}
            dashness={true}
            color='#c4b5fd'
            showHead={false}
            endAnchor={'top'}
            startAnchor={'bottom'}
             />

          <article className="flex relative justify-center">
            <p className="w-1/2 flex flex-col justify-center text-xl text-teal-700 drop-shadow-md">
              After being accepted for a task, you can view it on your profile page with more information. Patiently wait for the day to come to receive help or help your neighbor with their task.
            </p>
            <div id="end-3" className='h-4 w-4 absolute top-[33%] left-[20%]'></div>
            <div id="start-4" className='h-4 w-4 absolute bottom-[33%] left-[20%]'></div>
            <img src="/images/3.png" alt="3" className="w-1/2 drop-shadow-lg" />
          </article>

          <Xarrow 
            start="start-3"
            end="end-3"
            curveness={1.2}
            dashness={true}
            color='#c4b5fd'
            showHead={false}
            endAnchor={'top'}
            startAnchor={'bottom'}
             />

          <article className="flex relative justify-center pb-20">
            <img src="/images/4.png" alt="4" className="w-1/2 drop-shadow-lg" />
            <p className="flex flex-col justify-center text-xl text-teal-700 drop-shadow-md w-1/2">
              Once your task is finished don't forget to check it complete and reward your volunteer with a star if deserved. Stars show up on your profile to show others they can rely on you to get the task done.
            </p>
            <div id="end-4" className='h-4 w-4 absolute top-[25%] left-[70%]'></div>
            <div id="start-5" className='h-4 w-4 absolute bottom-[45%] left-[70%]'></div>
          </article>

          <Xarrow 
            start="start-4"
            end="end-4"
            curveness={1.2}
            dashness={true}
            color='#c4b5fd'
            showHead={false}
            endAnchor={'top'}
            startAnchor={'bottom'}
             />


          <Xarrow 
            start="start-5"
            end="end-5"
            curveness={1.2}
            dashness={true}
            color='#c4b5fd'
            showHead={true}
            endAnchor={'top'}
            startAnchor={'bottom'}
             />

          <article className="border-violet-100 relative bg-opacity-[40%] shadow-xl border-[3px] p-10 rounded-3xl bg-violet-50">
          <div id="end-5" className='h-4 w-4 absolute top-[-10%] left-[49%]'></div>
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
      <footer className="flex justify-center bg-violet-200 bg-opacity- mt-20 p-10 text-violet-900 font-fredoka">
        <div className='flex'>
        <div>
          <h1 className="font-semibold text-2xl">Happy Helpers</h1>
          <p className="text-m">Neighbors helping Neighbors</p>
        </div>
        <div className='border-solid border-violet-900 border-r-2 pl-[6em]'></div>
        <div className="pl-40">
          <h1 className="font-semibold text-xl">About</h1>
          <p>Careers</p>
          <p>Our Projects</p>
        </div>
        <div className="pl-40">
          <h1 className="font-semibold text-xl">Partnership</h1>
          <p>Partners</p>
          <p>Websites</p>
        </div>
        <div className="pl-40">
          <h1 className="font-semibold text-xl">Support</h1>
          <p>Support Request</p>
          <p>Contact</p>
        </div>
        </div>
      </footer>
    </>
  );
}