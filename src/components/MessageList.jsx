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
      <ul className="rounded-3xl p-2 normal-case fixed top-[55px] w-[24em] h-auto max-h-[600px] right-[190px] border-4 border-violet-400 shadow-lg bg-violet-200 overflow-scroll">
        {htmlMessages}
      </ul>
    ) : (
      <ul className="rounded-3xl normal-case fixed top-[55px] w-[24em] h-auto max-h-[600px] right-[100px] p-2 border-4 border-violet-400 shadow-lg bg-white overflow-scroll">
        <li className="rounded bg-neutral-100 p-1 mb-2 border-2 border-violet-200 font-normal">
          <p className="font-semibold">You have no messages to display.</p>
          <p>Messages will appear here automatically when there is a change in status of any of your tasks.</p>
        </li>
      </ul>
    )
  );
}