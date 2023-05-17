import React from 'react'
import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className='flex justify-center items-center h-full min-h-screen'>

    <SignIn />
    </div>
  )
}

export default SignInPage