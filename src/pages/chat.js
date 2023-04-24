// Test page for TalkJS messaging https://talkjs.com/
import { useEffect, useRef } from 'react';
import Talk from 'talkjs';

export default function Chat() {

  // const user = {firstName: 'Anderson', id: 1};
  const chatboxEl = useRef();

  // const user1 = {
  //   id: 1,
  //   name: 'Anderson Khorsandi',
  //   email: 'Anderson.Khorsandi@gmail.com',
  //   photoUrl: 'https://xsgames.co/randomusers/assets/avatars/male/34.jpg',
  //   welcomeMessage: 'Hey there!',
  //   role: 'default',
  // };

  // const user2 = {
  //   id: 2,
  //   name: 'Kayleen Lunski',
  //   email: 'K.Lunski@ferrari.it',
  //   photoUrl: 'https://xsgames.co/randomusers/assets/avatars/female/7.jpg',
  //   welcomeMessage: 'Hi, how can I help?',
  //   role: 'default',
  // };

  useEffect(() => {
    Talk.ready.then(() => {

      const currentUser = new Talk.User({
        id: '1632',
        name: 'Kate Smith',
        email: 'katesmith@example.com',
        photoUrl: 'kate.jpeg',
        welcomeMessage: 'Hey there!',
        role: 'default',
      });

      const otherUser = new Talk.User({
        id: '1629',
        name: 'Jack White',
        email: 'jackwhite@example.com',
        photoUrl: 'jack.jpeg',
        welcomeMessage: 'Hi, how can I help?',
        role: 'default',
      });

      const session = new Talk.Session({
        // appId: process.env.NEXT_PUBLIC_TALKJS_APP_ID,
        appId: 'tXKkAQbA',
        me: currentUser,
      });

      const conversation = session.getOrCreateConversation(
        Talk.oneOnOneId(currentUser, otherUser)
      );
      
      conversation.setParticipant(currentUser);
      conversation.setParticipant(otherUser);

      const chatbox = session.createChatbox();
      chatbox.select(conversation);
      chatbox.mount(chatboxEl.current);

    })
      .catch((e) => console.error(e));
  }, []);


  return (
    <main>
      <div ref={chatboxEl} />
    </main>
  );
}