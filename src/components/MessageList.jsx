import Message from '../components/Message';
import { useState, useEffect } from 'react';
import axios from "axios";


export default function MessageList({ userId }) {

  const [messages, setMessages] = useState([]);

  const fetchMessages = async function() {
    try {
      const res = await axios.get(`http://localhost:3000/api/messages/${userId}`);
      setMessages(res.data.messages);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);
  
  const htmlMessages = messages.map((message, index) => {
    return (
      <li key={index} className="rounded bg-neutral-100 p-1 mb-2 border-2 border-violet-200">
        <Message
          message={message}
        />
      </li>
    );
  });

  return (
    <ul className="fixed top-[55px] w-[24em] h-auto max-h-[600px] right-[100px] rounded p-2 border-4 border-violet-400 shadow-lg bg-white overflow-scroll">
      {htmlMessages}
    </ul>
  );
}