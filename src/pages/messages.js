import { useState, useEffect } from 'react';

import dynamic from 'next/dynamic';
import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import prisma from '../../prisma/.db';

const ChatEngine = dynamic(() =>
  import('react-chat-engine').then(module => module.ChatEngine)
);

const MessageFormSocial = dynamic(() =>
  import('react-chat-engine').then(module => module.MessageFormSocial)
);

export default function Chat3({user}) {

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

    <>
    <Head>
      <title>Happy Helpers</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className='flex flex-col '>
      <NavBar name={user.firstName}
        id={user.id} />
    <div className='chat-height px-5 flex flex-col'>
      {/* <h1 className='font-fredoka text-3xl font-semibold text-teal-600 mb-3'>Inbox</h1> */}
      <ChatEngine
        height='calc(100vh - 200px)'
        projectID='e7f12e41-d0d6-4017-90ab-96405f9f8f67'
        userName='Anderson'
        userSecret='alligator'
        renderNewMessageForm={() => <MessageFormSocial />}
        offset={-4}
      />
    </div>
    </main>
    <Footer />
  </>


    
  );
}

export async function getServerSideProps() {
  const user = await prisma.user.findUnique({
    where: {
      id: 1
    }
  })

  return {
    props: {
      user: JSON.parse(JSON.stringify(user))
    }
  };
}