//////////////////////
// NavBar Component
//////////////////////

import { useState, useEffect } from 'react';
import axios from "axios";
import { useRouter } from "next/router";

// Component
import Link from 'next/link';
import Button from '@/components/Button';
import MessageList from '@/components/MessageList';


export default function NavBar(props) {

  // Handle the display for messages
  const [displayMessages, setDisplayMessages] = useState(false);
  const badgeToggle = true;
  
  const handleMessages = function() {
    badgeToggle ? !badgeToggle : badgeToggle;
    setDisplayMessages(displayMessages ? false : true);
  };

  const [unreadMessageCount, setUnreadMessageCount] = useState();

  const fetchUnreadMessageCount = async function() {
    try {
      const res = await axios.get(`http://localhost:3000/api/messages/${props.id}`, {params: {type: 'countUnread'}});
      setUnreadMessageCount(res.data.messageCount);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUnreadMessageCount();
  }, [badgeToggle]);

  // Force page refresh when profile changes
  const router = useRouter();
  const navigate = function(url) {
    router.replace(url)
      .then(() => router.reload());
  };

  // Template
  return (
    <div className="flex items-center p-5 text-teal-600 tracking-wide text-sm font-bold mb-2 fixed sticky top-0 z-50 bg-teal-50 font-fredoka font-semibold">
      <ul className="flex w-1/2 items-center">
        <li className='px-6 pb-1 font-fredoka font-bold text-xl drop-shadow-sm'>
          <Link href="/home">Happy Helpers</Link>
        </li>
        <li className='px-6 uppercase hover:text-teal-500 active:text-teal-700'>
          <Link href="/home">Home</Link>
        </li>
        <li className='px-6 uppercase hover:text-teal-500 active:text-teal-700'>
          <Link href="/new-task">New Task</Link>
        </li>
      </ul>
      <ul className="flex items-center  w-1/2 justify-end">
        <li className='px-6 uppercase hover:text-teal-500 active:text-teal-700'>
          <Link href="/user-tasks">MyHelp</Link>
        </li>
        <li className='px-6 uppercase hover:text-teal-500 active:text-teal-700'>
          <Link href="/messages">Messages</Link>
        </li>
        <li className='px-4 uppercase hover:text-teal-500 active:text-teal-700 hover:cursor-pointer relative'>
          {unreadMessageCount > 0 && (
            <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-violet-500 border-2 border-white rounded-full -top-3 right-[5px]">
              {unreadMessageCount}
            </div>
          )}
          <h2 onClick={handleMessages}>  <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1.3em"
      width="1.3em"
    >
      <path d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118 0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 01-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 01-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14 0 75.36-13.29 91.42-35.31 118-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 00-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 00-4.61-37.66zM256 480a80.06 80.06 0 0070.44-42.13 4 4 0 00-3.54-5.87H189.12a4 4 0 00-3.55 5.87A80.06 80.06 0 00256 480z" />
    </svg></h2>
        </li>
        <li className='px-6 uppercase hover:text-teal-500 hover:cursor-pointer active:text-teal-700'>
          <a onClick={() => navigate(`/profile-page/${props.id}`)}>{props.name}</a>
        </li>
        <li className='px-6 hover:text-teal-500 active:text-teal-700'>
          <Button buttonName={"LOGOUT"} />
        </li>
      </ul>
      {displayMessages && (<MessageList userId={props.id} fetchUnreadMessageCount={fetchUnreadMessageCount} />)}
    </div>
  );
}