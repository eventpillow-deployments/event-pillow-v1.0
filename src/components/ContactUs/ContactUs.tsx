const people = [
    {
      name: 'Gops',
      role: 'Photographer / Founder',
      imageUrl:
        'https://i.ibb.co/xjbR8M1/Whats-App-Image-2023-02-26-at-3-43-59-PM.jpg',
      phoneNumber: '+91 85870 01422'

    },
    {
        name: 'Sahil',
        role: 'Generalist / Founding Engineer',
        imageUrl:
          'https://i.ibb.co/YTc3Pns/IMG-4347.jpg',
        phoneNumber: '+91 97635 00202'
    },
  ]
  
  export default function ContactUS() {
    return (
      <div className="py-8 pb-16 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-y-12 gap-x-8 px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 sm:text-4xl">Meet our team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-400">
              We're photography and tech enhusiasts, and a team in progress, passionate about what we do.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-lg font-semibold leading-7 tracking-tight dark:text-slate-50 text-slate-900 ">{person.name}</h3>
                    <p className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">{person.role}</p>
                    <p className="text-base font-medium text-sky-500"><a href={`tel:${person.phoneNumber}`}>{person.phoneNumber}</a></p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }