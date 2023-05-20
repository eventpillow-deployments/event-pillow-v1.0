import { UserProfile } from '@clerk/nextjs';
import Head from 'next/head';
import React from 'react';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';


const Index = () => {
        const { theme } = useTheme();

  return (
    <>
      <Head>
        <title>EventPillow | Feed</title>
      </Head>
      <div className="w-screen">
        <UserProfile
          appearance={{
            baseTheme: theme === 'dark' ? dark : undefined,
            elements: {
              rootBox: 'w-full h-full',
              card: 'min-w-full min-h-full rounded-none m-0 dark:bg-slate-900',
              formFieldInput: 'dark:bg-slate-800',
            },
          }}
        />
      </div>
    </>
  );
};

export default Index;
