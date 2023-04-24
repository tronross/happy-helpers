import { useState, useEffect } from 'react';

import {useRouter} from 'next/router';
import dynamic from 'next/dynamic';

const ChatEngine = dynamic(() =>
  import('react-chat-engine').then(module => module.ChatEngine)
);

const MessageFormSocial = dynamic(() =>
  import('react-chat-engine').then(module => module.MessageFormSocial)
);

export default function Chat3() {

  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  });

  if (!showChat) {
    return <div></div>;
  }


  return (
    <div>
      <h1>chats</h1>
      <ChatEngine
        height='calc(100vh - 200px)'
        projectID='e7f12e41-d0d6-4017-90ab-96405f9f8f67'
        userName='Kayleen'
        userSecret='aardvark'
        renderNewMessageForm={() => <MessageFormSocial />}
      />
    </div>
  );
}