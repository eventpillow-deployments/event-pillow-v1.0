import Link from "next/link";

const Footer = () => {
    return (
        <footer className="p-4 shadow md:px-6 md:py-8 dark:bg-gray-900 border-t dark:border-gray-700 border-gray-300">
            <div className="sm:flex sm:items-center sm:justify-between">
                <Link className="block font-secondary font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 sm:text-3xl" href="/">EventPillow</Link>
                <ul className="flex flex-wrap items-center mb-6 text-sm mt-2 text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <Link href="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
                    </li>
                    <li>
                        <a href="mailto:info@eventpillow.com" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <span className="block my-6 sm:mx-auto lg:my-8" />
            <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">EventPillow</a>. All Rights Reserved.
            </span>
        </footer>
    )
}

export default Footer;