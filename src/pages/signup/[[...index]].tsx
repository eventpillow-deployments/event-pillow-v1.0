import React from 'react'
import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center h-full min-h-screen">
      <SignUp />
    </div>
  );
}

export default SignUpPage