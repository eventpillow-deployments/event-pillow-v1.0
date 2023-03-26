const About = () => {
    return (
        <section className="relative px-6 lg:px-8 py-8 sm:py-16 min-h-full flex flex-col">
            <h1 className="mb-4 sm:mb-8 text-2xl sm:text-3xl font-semibold tracking-tight text-center sm:text-start dark:text-slate-300 text-slate-900">Founders Note</h1>
            <div className="grid sm:grid-cols-3 sm:grid-rows-1 sm:gap-x-6 gap-y-6">
                <img className="sm:row-span-2" src="https://i.ibb.co/xjbR8M1/Whats-App-Image-2023-02-26-at-3-43-59-PM.jpg" alt="" />
                <div className="">
                    <div className="text-xl tracking-tight mb-6 text-gray-500 dark:text-gray-400">The Short</div>
                    <p className="text-base mb-6 sm:mb-8 sm:w-10/12 dark:text-slate-300 text-slate-900">Hailing from a family of professional photographers and nomads, and being a solo traveller cum photograher for over half a decade. I felt the need for a tool that centralizes and solves all the issues that I&apos;ve ever encountered. As a result <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">EventPillow</span> was born.</p>
                    <img className="sm:row-span-2" src="https://i.ibb.co/xjbR8M1/Whats-App-Image-2023-02-26-at-3-43-59-PM.jpg" alt="" />
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
                        <a
                            href="#"
                            className="rounded-md bg-sky-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-600 via-purple-500 hover:from-blue-600 hover:to-cyan-400 animate-gradient-x"
                        >
                            Join the Waitlist today →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;