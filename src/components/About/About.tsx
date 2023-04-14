import Link from "next/link";

const About = () => {
    return (
        <section className="relative px-6 lg:px-8 py-8 sm:py-16 min-h-full flex flex-col">
            <h1 className="mb-4 sm:mb-8 text-2xl sm:text-3xl font-semibold tracking-tight text-center sm:text-start dark:text-slate-300 text-slate-900">Founders Note</h1>
            <div className="grid sm:grid-cols-3 sm:grid-rows-1 sm:gap-x-6 gap-y-6 mb-6">
                <div>
                    <img className="sm:row-span-2" src="https://ik.imagekit.io/cqught041/EP-Main-Website/AboutUS/Gops?updatedAt=1681485604279" alt="founders picture" />
                    <div className="flex flex-col gap-y-3 mt-4">
                        <Link className="flex gap-x-2 dark:text-slate-300 text-slate-900" href="https://www.youtube.com/@EkMusafirgops" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            <p>Gops Khurana (Founder)</p>
                        </Link>
                        <Link className="flex gap-x-2 dark:text-slate-300 text-slate-900" href="https://www.youtube.com/@EkMusafirgops" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" stroke-linecap="round" stroke-linejoin="round" className="feather feather-youtube"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                            <p>@EkMusafir</p>
                        </Link>
                        <Link className="flex gap-x-2 items-center dark:text-slate-300 text-slate-900" href="tel:+918587001422" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" stroke-linecap="round" stroke-linejoin="round" className="feather feather-phone-call"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            <p>+91 85870 01422</p>
                        </Link>
                    </div>
                </div>
                <div className="">
                    <div className="text-xl tracking-tight mb-6 text-gray-500 dark:text-gray-400">The Short</div>
                    <p className="text-base mb-6 sm:mb-8 sm:w-10/12 dark:text-slate-300 text-slate-900">Hailing from a family of professional photographers and nomads, and being a solo traveller cum photograher for over half a decade. I felt the need for a tool that centralizes and solves all the issues that I&apos;ve ever encountered. As a result <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">EventPillow</span> was born.</p>
                </div>
                <div className="text-base">
                    <div className="text-xl tracking-tight mb-6 text-gray-500 dark:text-gray-400">The Long</div>
                    <div className="text-base sm:w-10/12 dark:text-slate-300 text-slate-900">
                        <p className="mb-4">We believe that the process of getting a gig, hiring a reliable person and managing events is tedious, overly complicated and time consuming.</p>
                        <p className="mb-4">We&apos;re building a home for photographers, no matter what your day looks like we want to make it easier for
                            you to get hired or hire a photographer, manage your tasks or events, be clear about your availability,
                            build a personal brand, manage payments and everything a photograher or studio will ever need.
                        </p>
                        <p className="mb-4 text-xl font-semibold text-gray-500 dark:text-gray-400">So that you can Focus on doing your Best work, become Productive and Earn More.</p>
                        <div className="mb-5">
                            <p className="mb-2 text-lg font-semibold text-sky-500">Our target is to help you:</p>
                            <p className="mb-1">- Become productive and make more money.</p>
                            <p className="mb-1">- Get hired as a photographer no matter where you are.</p>
                            <p className="mb-1">- Hire photographers as a photography studio for events anywhere out there.</p>
                            <p className="mb-1">- Manage your tasks, events and even your team.</p>
                            <p className="mb-1">- Answer less calls, get more things done.</p>
                        </div>
                        <p className="mb-4 text-lgf font-semibold text-sky-500">I Invite you to become a part of this journey and my dream.</p>
                    </div>
                    <div className="mt-6 sm:mt-auto flex items-center justify-between gap-x-6">
                        <Link
                            href="/#join-waitlist"
                            className="rounded-md bg-sky-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-600 via-purple-500 hover:from-blue-600 hover:to-cyan-400 animate-gradient-x"
                        >
                            Join the Waitlist today →
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid sm:grid-cols-3 sm:grid-rows-1 sm:gap-x-6 gap-y-6">
                <div>
                    <img className="sm:row-span-2" src="https://ik.imagekit.io/cqught041/EP-Main-Website/AboutUS/sahil2.jpeg?updatedAt=1681487289994" alt="founders picture" />
                    <div className="flex flex-col gap-y-3 mt-4">
                        <Link className="flex gap-x-2 dark:text-slate-300 text-slate-900" href="https://www.linkedin.com/in/sahilkazi01/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            <p>Sahil (Co-founder)</p>
                        </Link>
                        <Link className="flex gap-x-2 dark:text-slate-300 text-slate-900" href="https://www.linkedin.com/in/sahilkazi01/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" stroke-linecap="round" stroke-linejoin="round" className="feather feather-youtube"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                            <p>@SahilKazi</p>
                        </Link>
                        <Link className="flex gap-x-2 items-center dark:text-slate-300 text-slate-900" href="tel:+919322002763" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" stroke-linecap="round" stroke-linejoin="round" className="feather feather-phone-call"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            <p>+91 93220 02763</p>
                        </Link>
                    </div>
                </div>
                <div className="">
                    <p className="text-base mb-6 sm:mb-8 sm:w-10/12 dark:text-slate-300 text-slate-900">Having found WolveElectronics previously and worked at multiple startups as a software developer. I bring the vision of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">EventPillow</span> to life. Taking care of everything from Tech to Growth.</p>
                </div>
            </div>
        </section>
    )
}

export default About;