import { ChangeEvent, FormEvent, useState } from "react";
import SelectOne from "./SelectOne";

const userTypes = [{
    id: 'freelancer',
    value: 'Freelancer'
}, {
    id: 'studio-production-house',
    value: 'Studio/Production House' 
},  {
    id: 'visitor',
    value: 'Visitor' 
}];

const formData = {
    type: {
        text: 'Freelancer',
        err: false
    },
    specialisation: {
        text: '',
        err: true
    },
    city: {
        text: '',
        err: true
    },
    name: {
        text: '',
        err: true
    },
    phone: {
        text: '',
        err: true
    },
    email: {
        text: '',
        err: true
    },
};

const WaitlistForm = () => {
    const [waitListFormData, updateWaitListFormData] = useState(formData);

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        updateWaitListFormData(prevFormData => ({
            ...prevFormData,
            [e.target.id]: {
                text: e.target.value,
                err: !e.target.value,
            } 
        }))
    }

    const changeUserType = (val: string) => {
        updateWaitListFormData(prevFormData => ({
            ...prevFormData,
            type: {
                text: val,
                err: !val,
            } 
        }))
    }

    return (
        <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32" id="join-waitlist">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
                    <div className="max-w-xl lg:max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight dark:text-slate-50 text-slate-900 sm:text-4xl">Join the Waitlist Now!</h2>
                        <p className="mt-4 text-lg leading-8 dark:text-gray-300 text-slate-700">
                            The only tool you&apos;ll ever need, to get work or get work done. No Fuss.
                        </p>
                        <form className="launchlist-form" action="https://getlaunchlist.com/s/KzGjhP" method="POST">
                            <div className="mt-6 flex max-w-md gap-y-2 flex-col max-sm:items-stretch">
                                <SelectOne title="You are a?" options={userTypes} name="type" value={waitListFormData.type.text} onChange={changeUserType}/>
                            </div>
                            <div className="mt-4 flex flex-row max-w-md gap-4 max-sm:flex-col">
                                <label htmlFor="specialisation" className="sr-only">
                                    Specialisation
                                </label> 
                                <input
                                    id="specialisation"
                                    name="specialisation"
                                    value={waitListFormData.specialisation.text}
                                    onChange={changeValue}
                                    className="outline-sky-500 min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-400 dark:ring-white/10 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                                    placeholder="Enter your specialisation"
                                />
                                <label htmlFor="city" className="sr-only">
                                    City
                                </label>
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    value={waitListFormData.city.text}
                                    onChange={changeValue}
                                    required
                                    className="outline-sky-500 min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-400 dark:ring-white/10 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                                    placeholder="Enter your city"
                                />
                            </div>
                            <div className="mt-4 flex flex-row max-w-md gap-4 max-sm:flex-col">
                                <label htmlFor="name" className="sr-only">
                                    Name
                                </label> 
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    value={waitListFormData.name.text}
                                    onChange={changeValue}
                                    required
                                    className="outline-sky-500 min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-400 dark:ring-white/10 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                                    placeholder="Enter your name"
                                />
                                <label htmlFor="phone" className="sr-only">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    value={waitListFormData.phone.text}
                                    onChange={changeValue}
                                    name="phone"
                                    type="tel"
                                    autoComplete="tel"
                                    required
                                    className="outline-sky-500 min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-400 dark:ring-white/10 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div className="mt-4 flex max-w-md gap-x-4">
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={waitListFormData.email.text}
                                    onChange={changeValue}
                                    required
                                    className="outline-sky-500 min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-400 dark:ring-white/10 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
                                    placeholder="Enter your email"
                                />
                                <input
                                    type="submit"
                                    disabled={Object.values(waitListFormData).find(item => item.err === true) !== undefined}
                                    className={`disabled:bg-gray-500 disabled:cursor-not-allowed flex-none rounded-md bg-sky-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500`}
                                    value="Join Waitlist"
                                />
                            </div>
                        </form>
                    </div>
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                        <div className="flex flex-col items-start">
                            <div className="rounded-md dark:bg-white/5 bg-black/5 p-2 ring-1 dark:ring-white/10 ring-black/10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                            </svg>
                            </div>
                            <dt className="mt-4 font-semibold dark:text-slate-50 text-slate-900">3 Months Free</dt>
                            <dd className="mt-2 leading-7 dark:text-gray-400 text-slate-900">
                                First 100 waiters receive a 3 month premium membership and support. We&apos;ll work closely with you to make sure your experience is seamless.
                            </dd>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="rounded-md dark:bg-white/5 bg-black/5 p-2 ring-1 dark:ring-white/10 ring-black/10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                                </svg>
                            </div>
                            <dt className="mt-4 font-semibold dark:text-slate-50 text-slate-900">No spam</dt>
                            <dd className="mt-2 leading-7 dark:text-gray-400 text-slate-900">
                                We will never spam you with unnecessary emails or calls. We value your time, the way you value yours. That&apos;s our promise.
                            </dd>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="rounded-md dark:bg-white/5 bg-black/5 p-2 ring-1 dark:ring-white/10 ring-black/10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                </svg>
                            </div>
                            <dt className="mt-4 font-semibold dark:text-slate-50 text-slate-900">Referral Program!</dt>
                            <dd className="mt-2 leading-7 dark:text-gray-400 text-slate-900">
                                Spread the word, top 3 referrers get six months of premium, free! 🎁
                            </dd>
                        </div>
                    </dl>
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
    )
}

export default WaitlistForm;