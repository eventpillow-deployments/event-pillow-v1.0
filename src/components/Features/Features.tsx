const Features = () => {
    return (
        <div className="mx-6 mb-10">
            <div className="mx-auto max-w-2xl lg:text-center mb-10">
                <h2 className="text-base font-semibold leading-7 text-sky-500">Take home memories, not stress </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight dark:text-slate-50 text-slate-900 sm:text-4xl">For photgraphers and production houses</p>
                <p className="mt-4 text-lg leading-8 text-gray-500 dark:text-gray-400">The only tool you'll ever need, to get work or get work done. No Fuss.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 dark:text-slate-50 text-slate-900">
                <div className="rounded-lg px-6 py-7 dark:bg-opacity-10 dark:bg-gray-700 bg-sky-300 bg-opacity-10 border border-gray-500 border-opacity-70 sm:col-span-2">
                    <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 w-50">Power your Freelance Photography Business.</h4>
                    <p className="mt-1">Create your Profile, get Hired by Professional Studios, manage your events and stay on track with your tasks.</p>   
                </div>
                <div className="flex flex-col rounded-lg px-6 py-8 sm:row-span-2 dark:bg-opacity-10 dark:bg-gray-700 bg-sky-300 bg-opacity-10 border border-gray-500 border-opacity-70">
                    <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 sm:w-2/3 ">Production House To Power House.</h4>    
                    <p className="mt-1">Search, connect and hire professional freelancers, manage schedule and keep a track on the progress of events. </p>
                    <div className="mt-6 sm:mt-auto flex items-center justify-between gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-sky-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-600 via-purple-500 hover:from-blue-600 hover:to-cyan-400 animate-gradient-x"
                        >
                            Join Waitlist →
                        </a>
                    </div>
                </div>
                <div className="rounded-lg px-6 py-8 border border-gray-500 dark:bg-opacity-10 dark:bg-gray-700 bg-sky-300 bg-opacity-10 border-opacity-70">
                    <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Build A Brand.</h4>
                    <p className="mt-1">Share your profile with clients, get reviewed by the people you work for, stay on top of your photography game.</p>   
                </div>
                <div className="rounded-lg px-6 py-8 border border-gray-500 dark:bg-opacity-10 dark:bg-gray-700 bg-sky-300 bg-opacity-10 border-opacity-70">
                    <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Get Discovered.</h4>
                    <p className="mt-1">Showcase your best work, get discovered and contacted by potential clients.</p>   
                </div>
                <div className="rounded-lg px-6 py-8 border border-gray-500 dark:bg-opacity-10 dark:bg-gray-700 bg-sky-300 bg-opacity-10 border-opacity-70">
                    <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                        Tick Your Todos.
                    </h4>
                    <p className="mt-1">Create tasks, set reminders and get keep your day on track.</p>   
                </div>
                <div className="rounded-lg px-6 py-8 border border-gray-500 dark:bg-opacity-10 dark:bg-gray-700 bg-sky-300 bg-opacity-10 border-opacity-70 sm:col-span-2">
                    <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">One Calendar. All Events.</h4>
                    <p className="mt-1">
                        Use the inbuilt calendar, know your commitments and become reliable all from one place.
                    </p>   
                </div>
            </div>
        </div>
    )
}

export default Features;