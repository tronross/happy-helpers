//////////////////////
// NavBar Component
//////////////////////
import { useState, useEffect } from 'react';
import axios from "axios";

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
  }, []);

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
        <li className='px-6 hover:text-teal-500 active:text-teal-700 hover:cursor-pointer relative'>
          {unreadMessageCount > 0 && (
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-violet-500 border-2 border-white rounded-full -top-3 right-1">
              {unreadMessageCount}
            </div>
          )}
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
      {displayMessages && (<MessageList userId={props.id} fetchUnreadMessageCount={fetchUnreadMessageCount} />)}
    </div>
  );
}