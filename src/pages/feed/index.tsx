import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Index = () => {
  return (
    <>
      <Head>
        <title>EventPillow | Feed</title>
      </Head>
      <div>Welcome to Feed</div>
      <div className="h-screen w-screen flex items-center justify-center">
        <Link href="/org-builder">
          <div className="ml-8 flex justify-center rounded-md bg-sky-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-600 via-purple-500 hover:from-blue-600 hover:to-cyan-400 animate-gradient-x w-fit">
            Create your org
          </div>
        </Link>
      </div>
    </>
  );
};

export default Index;
