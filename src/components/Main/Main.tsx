import Link from "next/link";

const includedFeatures = [
    'Manage Events',
    'Get Hired',
    'Get Discovered',
    'Build a brand',
  ]

const Main = () => {    
    return (
    <main>
        <div className="relative px-6 lg:px-8 min-h-full">
          <div className="mx-auto max-w-2xl py-20 sm:py-48 lg:py-56">
            <div className="flex justify-center mb-8">
              <div className="flex rounded-full flex-col sm:flex-row py-1 px-3 text-sm leading-6 dark:text-slate-300 text-slate-900 sm:ring-1 sm:ring-gray-400/50 sm:hover:ring-gray-400/80">
                <span>By a Photographer for Photographers.</span>{' '}
                <Link href="/about" className="font-semibold text-sky-500 pl-1 flex justify-center mt-0.25">
                  Read more &rarr;
                </Link>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight dark:text-slate-50 text-slate-900 sm:text-5xl">
                No more <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">phone calls</span>. No more <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">emails</span>. Just a simple platform to  
              </h1>
              <ul
                role="list"
                className="mt-8 grid gap-4 text-sm leading-6 dark:text-slate-50 text-slate-900 justify-center grid-cols-2 sm:gap-6"
              >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3 justify-center">
                  <svg className="h-6 w-5 flex-none dark:text-sky-500 text-indigo-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-sky-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer bg-gradient-to-r from-cyan-400 to-blue-600 via-purple-500 hover:from-blue-600 hover:to-cyan-400 animate-gradient-x"
                >
                  Join Waitlist
                </a>
                <Link href="/about" className="text-base font-semibold leading-7 dark:text-slate-50 text-slate-900">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl top-0">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".5"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#db2777" />
                  <stop offset={1} stopColor="#4338ca" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
    </main>
    )
};

export default Main;