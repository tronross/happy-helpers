import Head from 'next/head';
import { Inter } from 'next/font/google';

// Component imports
import Button from '@/components/Button';
import Link from 'next/link';

// import im from '../../../public/images/432.svg';

const inter = Inter({ subsets: ['latin'] });

export default function Landing() {

  // Template
  return (
    <>
      <Head>
        <title>Happy Helpers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav className="flex justify-between items-center p-5 text-teal-600 uppercase tracking-wide text-sm font-bold mb-2 fixed sticky top-0 z-50 bg-neutral-100">
          <Link href="/home">
            Happy Helpers
          </Link>
          <Link href="/profile-page/1">
            <button className="bg-teal-600 hover:bg-teal-700 active:bg-teal-800 uppercase font-bold px-3 py-1 rounded text-white h-8 text-sm">
              LOGIN
            </button>
          </Link>
        </nav>
        <section className="flex justify-between">
          <div>
            <h1>Find your next volunteer Opportunity</h1>
            <p>Happy Helpers gives everyone a chance to have a nearby hand when needed most.</p>
          </div>
          <img src="../../../public/images/432.svg" alt="432" />
        </section>

        <h1>How it Works?</h1>

        <section style={{ display: "flex" }}>
          <div>
            <p>Users can post a task they need help with or browse upcoming tasks which can be filtered by location, category and date.</p>
          </div>
          <img src='../../../public/images/13.svg' alt="13" />
        </section>

        <section style={{ display: "flex" }}>
          <img src='../../../public/images/168.svg' alt="168" />
          <div>
            <p>Offering help is simple, just find a task you want to volunteer for and hit OFFER. Once an offer comes in for one of your own tasks, you can view their profiles and select the best match.</p>
          </div>
        </section>

        <section style={{ display: "flex" }}>
          <div>
            <p>After being accepted for a task, you can view it on your profile page with more information. Patiently wait for the day to come to receive help or help your neighbor with their task.</p>
          </div>
          <img src='../../../public/images/51.svg' alt="51" />
        </section>

        <section style={{ display: "flex" }}>
          <img src='../../../public/images/93.svg' alt="93" />
          <div>
            <p>Once your task is finished don't forget to check it complete and reward your volunteer with a star if deserved. Stars show up on your profile to show others they can rely on you to get the task done.</p>
          </div>
        </section>

        <section>
          <h1>Sign Up and Join Our Community</h1>
          <div style={{ display: "flex" }}>
            <div>
              <h1>Happy Helpers</h1>
              <p>A crowd-sourcing volunteering app with a focus on building community through in-person interactions and mutual aid.</p>
            </div>
            <form style={{ display: "flex", flexDirection: "column" }}>
              <input type="text" id="firstName" name="firstName" placeholder="First Name" />
              <input type="text" id="lastName" name="lastName" placeholder="Last Name" />
              <input type="text" id="email" name="email" placeholder="Email" />
              <input type="text" id="password" name="password" placeholder="Password" />
            </form>
          </div>
        </section>

      </main>
    </>
  );
}