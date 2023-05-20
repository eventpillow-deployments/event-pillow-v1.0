import React from 'react'
import { CreateOrganization } from '@clerk/nextjs';
import { useTheme } from 'next-themes';
import { dark } from '@clerk/themes';

const Index = () => {
    const {theme} = useTheme()
  return (
    <div className="flex justify-center items-center h-full min-h-screen">
      <CreateOrganization
        afterCreateOrganizationUrl="/org"
        path="/org-builder"
        routing="path"
        appearance={{
          baseTheme: theme === 'dark' ? dark : undefined,
          elements: {
            card: 'dark:bg-slate-900 dark:shadow-none dark:border dark:border-white dark:border-opacity-20 dark:border-solid',
            selectOptionsContainer: 'dark:bg-slate-900',
            formFieldInput: 'dark:bg-slate-800',
            tagInputContainer: 'dark:bg-slate-800',
            selectButton: 'dark:bg-slate-800',
          },
        }}
      />
    </div>
  );
}

export default Index