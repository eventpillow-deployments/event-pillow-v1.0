import Link from "next/link";
import { useEffect, useState } from "react";

const includedFeatures = [
  "Manage Events",
  "Get Hired",
  "Get Discovered",
  "Build a brand",
];

const typewriterTexts = ["calls", "emails", "hurdles ", "excuses"];

const Main = () => {
  const [typewriterIndex, setTypeWriterIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTypeWriterIndex(
        (prevIndex) => (prevIndex + 1) % typewriterTexts.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [typewriterIndex]);

  return (
    <main>
      <div className="relative px-6 lg:px-8 min-h-screen flex justify-center items-center scroll-smooth">
        <div className="mx-auto max-w-2xl ">
          <div className="flex justify-center mb-8">
            <div className="flex rounded-full items-center flex-row py-1 px-3 text-sm leading-6 dark:text-slate-300 text-slate-900 ring-1 ring-gray-400/50 hover:ring-gray-400/80 whitespace-nowrap">
              <span>By a Photographer for Photographers.</span>{" "}
              <Link
                href="/about"
                className="font-semibold text-sky-500 pl-2 flex justify-center"
              >
                <div className="group text-gray-200 hover:text-sky-600 transition ease-in-out duration-200 text-base">
                  Read more{" "}
                  <span
                    aria-hidden="true"
                    className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
                  >
                    →
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
              <h1 className="text-4xl font-bold tracking-tight dark:text-slate-50 text-slate-900 sm:text-5xl ">
                No more
              </h1>
              <div className="whitespace-nowrap h-[4rem] w-max ml-2 ">
                <p className="text-4xl sm:text-5xl h-full pl-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold animate-typing overflow-hidden whitespace-nowrap">
                  {typewriterTexts[typewriterIndex]}
                </p>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight dark:text-slate-50 text-slate-900 sm:text-5xl">
              Now easily
            </h1>
            <ul
              role="list"
              className="my-10 grid gap-4 sm:gap-10 leading-6 dark:text-slate-50 text-slate-900 justify-center grid-cols-2"
            >
              {includedFeatures.map((feature) => (
                <li
                  key={feature}
                  className="rounded-lg py-4 dark:bg-opacity-10 dark:bg-gray-700 bg-sky-300 bg-opacity-10 border border-gray-500 border-opacity-70 sm:col-span-1"
                >
                  <h4 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 w-50">
                    {feature}
                  </h4>
                </li>
              ))}
            </ul>
            <h1 className="text-4xl font-bold tracking-tight dark:text-slate-50 text-slate-900 sm:text-5xl">
              Only on EventPillow
            </h1>
            {/* <div className="relative my-8">
              <input
                type="text"
                className=" h-16 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 pl-4 pr-48 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-xl focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-transparent"
                placeholder="Your email"
              />
              <div className="group [transform:translateZ(0)] px-6 py-3 rounded-lg bg-gray-300 overflow-hidden absolute top-2 right-2 before:absolute before:bg-gradient-to-r from-purple-400 to-pink-600 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-[100%_100%] before:scale-x-0 hover:before:origin-[0_0] hover:before:scale-x-100 before:transition before:ease-in-out before:duration-500 cursor-pointer">
                <span className="relative z-0 text-black group-hover:text-gray-200 transition ease-in-out duration-500 font-semibold text-base ">
                  Join the waitlist
                </span>
              </div>
            </div> */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#join-waitlist"
                className="group [transform:translateZ(0)] px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 overflow-hidden before:absolute before:bg-gradient-to-r before:from-blue-600 before:to-cyan-400 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-[100%_100%] before:scale-x-0 hover:before:origin-[0_0] hover:before:scale-x-100 before:transition before:ease-in-out before:duration-500 cursor-pointer"
              >
                <span className="relative z-0 text-gray-200 transition ease-in-out duration-500 font-semibold text-lg ">
                  Join the waitlist
                </span>
              </a>
              <Link
                href="/about"
                className="text-base font-semibold leading-7 dark:text-slate-50 text-slate-900"
              >
                <div className="group text-gray-200 hover:text-sky-600 transition ease-in-out duration-200 text-lg">
                  Learn more{" "}
                  <span
                    aria-hidden="true"
                    className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
                  >
                    →
                  </span>
                </div>
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
  );
};

export default Main;
