//////////////////////
// NavBar Component
//////////////////////
import { useState } from 'react';

// Component
import Link from 'next/link';
import Button from '@/components/Button';
import MessageList from '@/components/MessageList';


export default function NavBar(props) {

  // Handle the display for messages
  const [displayMessages, setDisplayMessages] = useState(false);
  const handleMessages = function() {
    setDisplayMessages(displayMessages ? false : true);
  };

  // Template
  return (
    <div className="flex items-center p-5 text-teal-600 uppercase tracking-wide text-sm font-bold mb-2 fixed sticky top-0 z-50 bg-teal-50">
      <ul className="flex w-1/2">
        <li className='px-6 hover:text-teal-500 active:text-teal-700'>
          <Link href="/home">Happy Helpers</Link>
        </li>
        <li className='px-6 hover:text-teal-500 active:text-teal-700'>
          <Link href="/home">Home</Link>
        </li>
        <li className='px-6 hover:text-teal-500 active:text-teal-700'>
          <Link href="/new-task">New</Link>
        </li>
      </ul>
      <ul className="flex items-center  w-1/2 justify-end">
        <li className='px-6 hover:text-teal-500 active:text-teal-700'>
          <Link href="/user-tasks">MyHelp</Link>
        </li>
        <li className='px-6 bg-neutral-100 hover:text-teal-500 active:text-teal-700'>
          <h2 onClick={handleMessages}>Messages</h2>
        </li>
        <li className='px-6 hover:text-teal-500 active:text-teal-700'>
        </li>
        <li className='px-6 hover:text-teal-500 active:text-teal-700'>
          <Link href={`/profile-page/${props.id}`}>{props.name}</Link>
        </li>
        <li className='px-6 hover:text-teal-500 active:text-teal-700'>
          <Button buttonName={"LOGOUT"}/>
        </li>
      </ul>
      {displayMessages && (<MessageList userId={props.id}/>)}
    </div>
  );
}