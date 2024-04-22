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
        <div className="py-20 sm:pb-24 sm:pt-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight leading-snug sm:leading-snug text-gray-900 sm:text-6xl">
                {`The Developer's Guide to Landing Your Next Job`}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-800">
                Learn how to make your resume stand out, ace interviews, and
                beat the competition in this new{" "}
                <span className="font-medium text-black">masterclass:</span>
              </p>
            </div>
            <div className="mt-10 sm:mt-10 m-auto flex justify-center">
              <iframe
                className="w-full md:w-2/3 aspect-video rounded-md shadow-2xl ring-1 ring-gray-900/10"
                src="https://www.youtube.com/embed/8bLtcn7l8pU?si=M3X80XC0scZg8jLC"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://sso.teachable.com/secure/1657556/checkout/5430071/get-hired-as-a-swe-in-2024"
                className="rounded-md h-10 w-72 text-center bg-[#ff9a66] px-3.5 py-2.5 text-sm font-semibold text-black leading-tight hover:bg-black hover:text-white border-[1px] border-black shadow-[2px_2px_0px_0px_#000] hover:shadow-none"
              >
                Sign up for $89
              </a>
            </div>
            <p className="text-center text-sm sm:text-base mt-3 text-black italic">
              Save 50% with early bird access
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
