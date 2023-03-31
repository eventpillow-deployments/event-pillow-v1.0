import Link from "next/link";

import DarkMode from "../DarkMode/DarkMode";

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-8 border-b dark:border-gray-700 border-gray-300">
            <Link className="block font-secondary font-bold text-slate-50 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 sm:text-3xl" href="/">EventPillow</Link>
            <DarkMode />
        </nav>
    )
}

export default NavBar;