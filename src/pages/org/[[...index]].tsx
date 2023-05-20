import React from 'react'
import { OrganizationProfile } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';

const Index = () => {
  const {theme} = useTheme()
  return (
    <OrganizationProfile
      path="/org"
      routing="path"
      afterLeaveOrganizationUrl="/"
      appearance={{
        baseTheme: theme === 'dark' ? dark : undefined,
        elements: {
          rootBox: 'w-full h-screen',
          card: 'min-w-full min-h-full rounded-none m-0 dark:bg-slate-900',
          selectOptionsContainer: 'dark:bg-slate-900',
          formFieldInput: 'dark:bg-slate-800',
        },
      }}
    />
  );
}

export default Index