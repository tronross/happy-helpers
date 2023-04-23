import Message from '../components/Message';
import { useState, useEffect } from 'react';
import axios from "axios";


export default function MessageList({ userId, fetchUnreadMessageCount }) {

  const [messages, setMessages] = useState([]);
  const fetchMessages = async function() {
    try {
      // Set all user's messages to markedRead = true
      await axios.patch(`http://localhost:3000/api/messages/${userId}`);
      // Fetch all active messages for user
      const res = await axios.get(`http://localhost:3000/api/messages/${userId}`, {params: {type: 'all'}});
      setMessages(res.data.messages);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMessages();
    fetchUnreadMessageCount();
  }, []);

  const handleDelete = async function(id) {
    try {
      await axios.delete(`http://localhost:3000/api/messages/${id}`);
      fetchMessages();
    } catch (err) {
      console.log(err);
    }
  };
  
  const htmlMessages = messages.map((message, index) => {
    return (
      <li key={index} className="rounded-2xl p-4 bg-neutral-100 p-1 mb-2 bg-violet-100 border-2 border-violet-300 text-violet-900">
        <Message
          message={message}
          handleDelete={handleDelete}
        />
      </li>
    );
  });

  return (
    htmlMessages.length > 0 ? (
      <div className='rounded-3xl py-1 px-1 normal-case fixed top-[55px] w-[24em] h-auto max-h-[600px] right-[190px] border-2 border-violet-400 shadow-lg bg-violet-200'>
      <ul className="p-2 h-auto max-h-[580px] overflow-scroll overflow-x-hidden scrollbar notification-scroll">
        {htmlMessages}
      </ul>
      </div>
    ) : (
      <div>
      <ul className="rounded-3xl normal-case fixed top-[55px] w-[24em] h-auto right-[190px] p-2 border-2 border-violet-400 shadow-lg bg-violet-200 overflow-scroll">
        <li className="rounded-2xl p-4 bg-neutral-100 p-1 mb-2 bg-violet-100 border-2 border-violet-300 text-violet-900">
          <p className="font-semibold">You have no messages to display.</p>
          <p className="text-xs font-normal">Messages will appear here automatically if any of your tasks or requests change status.</p>
        </li>
      </ul>
      </div>
    )
  );
}