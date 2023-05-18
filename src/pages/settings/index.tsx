import { UserProfile } from '@clerk/nextjs';
import Head from 'next/head';
import React from 'react';

const Index = () => {
  return (
    <>
      <Head>
        <title>EventPillow | Feed</title>
      </Head>
      <div className='w-screen'>

      <UserProfile appearance={{elements: {rootBox: 'w-full h-full', card: 'min-w-full min-h-full rounded-none m-0'}}} />
      </div>
    </>
  );
};

export default Index;
