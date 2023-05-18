import Link from 'next/link';

import DarkMode from '../DarkMode/DarkMode';
import { UserButton, SignedIn, SignedOut, useUser } from '@clerk/nextjs';

const NavBar = () => {

    const {isLoaded} = useUser()

  return (
    <nav className="flex items-center justify-between px-8 py-8 border-b dark:border-gray-700 border-gray-300">
      <div className="w-full flex items-center justify-between">
        <Link
          className="block font-secondary font-bold text-slate-50 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 sm:text-3xl "
          href="/"
        >
          EventPillow
        </Link>
        <DarkMode />
      </div>
      <SignedIn>
        {isLoaded ? (
          <UserButton
            appearance={{
              elements: {
                userButtonBox:
                  'ml-8 rounded-full w-14 h-14 px-1 mx-auto bg-gradient-to-r hover:from-purple-400 hover:to-pink-600',
                userButtonAvatarBox: 'w-12 h-12 rounded-full hover:bg-red-500',
              },
            }}
          />
        ) : (
          <div className="ml-8">
            <span className="w-14 h-14 block bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse"></span>
          </div>
        )}
      </SignedIn>
      <SignedOut>
        <Link href='/signin'>
        <div className="ml-8 flex justify-center rounded-md bg-sky-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-600 via-purple-500 hover:from-blue-600 hover:to-cyan-400 animate-gradient-x w-32">
          Sign In
        </div>
        </Link>
      </SignedOut>
    </nav>
  );
};

export default NavBar;
