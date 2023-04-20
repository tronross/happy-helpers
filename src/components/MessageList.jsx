import Message from '../components/Message';
import { useState, useEffect } from 'react';
import axios from "axios";


export default function MessageList({ userId, fetchUnreadMessageCount }) {

  const [messages, setMessages] = useState([]);

  const fetchMessages = async function() {
    try {
      // Set all user's messages to markedRead = true
      const countUpdated = await axios.patch(`http://localhost:3000/api/messages/${userId}`);
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
      const res = await axios.delete(`http://localhost:3000/api/messages/${id}`);
      fetchMessages();
    } catch (err) {
      console.log(err);
    }
  };
  
  const htmlMessages = messages.map((message, index) => {
    return (
      <li key={index} className="rounded bg-neutral-100 p-1 mb-2 border-2 border-violet-200">
        <Message
          message={message}
          handleDelete={handleDelete}
        />
      </li>
    );
  });

  return (
    htmlMessages.length > 0 ? (
      <ul className="normal-case fixed top-[55px] w-[24em] h-auto max-h-[600px] right-[100px] rounded p-2 border-4 border-violet-400 shadow-lg bg-white overflow-scroll">
        {htmlMessages}
      </ul>
    ) : (
      <ul className="normal-case fixed top-[55px] w-[24em] h-auto max-h-[600px] right-[100px] rounded p-2 border-4 border-violet-400 shadow-lg bg-white overflow-scroll">
        <li className="rounded bg-neutral-100 p-1 mb-2 border-2 border-violet-200 font-normal">
          <p className="font-semibold">You have no messages to display.</p>
          <p>Messages will appear here automatically when there is a change in status of any of your tasks.</p>
        </li>
      </ul>
    )
  );
}