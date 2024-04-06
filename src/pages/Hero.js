"use client"; // This is a client component 👈🏽

import Image from "next/image";

export default function Hero() {
  return (
    <div className="">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src="/logo.svg"
                alt="Coding Nomad Logo"
                className="text-indigo-600"
                width={80}
                height={14}
                priority
              />
            </a>
          </div>
        </nav>
      </header>
      {/* Hero section */}
      <div className="relative pt-14">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight leading-snug sm:leading-snug text-gray-900 sm:text-6xl">
                {`The Developer's Guide to Landing Your Next Job`}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Learn how to make your resume stand out, ace interviews, and
                beat the competition in this new{" "}
                <span className="font-medium text-indigo-700">
                  masterclass:
                </span>
              </p>
            </div>
            <div className="mt-10 sm:mt-16 m-auto flex justify-center">
              <iframe
                className="w-full md:w-2/3 aspect-video rounded-md shadow-2xl ring-1 ring-gray-900/10"
                src="https://www.youtube.com/embed/PPMEKxfh9ZE?si=46jnV7AqeTsyV3PJ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://sso.teachable.com/secure/1657556/checkout/5430071/get-hired-as-a-swe-in-2024"
                className="rounded-md h-10 w-72 text-center bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Enroll for $89
              </a>
            </div>
            <p className="text-center mt-3 text-rose-600 italic">
              Save 50% with early bird access
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
