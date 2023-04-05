//////////////////////
// NavBar Component
//////////////////////

// Stylesheet

// Component
import Link from 'next/link';
import Button from '@/components/Button'

export default function NavBar(props) {

  // Template
  return (
    <div className="flex p-5 bg-teal-500 text-white">
      <ul className="flex w-1/2">
        <li className='px-6 text-lg'>
          Happy Helpers
        </li>
        <li className='px-6 text-lg'>
          <Link href="/home">Home</Link>
        </li>
        <li className='px-6 text-lg'>
          <Link href="/new-task">New</Link>
        </li>
      </ul>
      <ul className="flex w-1/2 justify-end">
      <li className='px-6 text-lg'>
          <Link href="/my-help">MyHelp</Link>
        </li>
        <li className='px-6 text-lg'>
          <h2>Messages</h2>
        </li>
        <li className='px-6 text-lg'>
          <Link href="/my-profile/:id">Fred</Link>
        </li>
        <li className='px-6 text-lg'>
          <Button buttonName={"Logout"}/>
        </li>
      </ul>
    </div>
  );
};