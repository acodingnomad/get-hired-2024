"use client"; // This is a client component 👈🏽

import { Disclosure } from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";

const faqs = [
  {
    question: "Module 1: Dealing with imposter syndrome",
    available: true,
    answer:
      "Learn how to deal with imposter syndrome to succeed as a software developer",
    plus: "to feel confident in your search",
  },
  {
    question: "Module 2: Perfecting your portfolio",
    available: true,
    answer:
      "Build real projects that will help you stand out, enhance your experience, and propel your career",
    plus: "to stand out from the crowd",
  },
  {
    question: "Module 3: Writing a great resume",
    available: true,
    answer:
      "Learn what to put on your resume as a beginner to get invited to more interviews",
    plus: "to land more interviews 📄",
  },
  {
    question: "Module 4: Landing Interviews (coming soon)",
    available: false,
  },
  {
    question: "Module 5: Interview Strategy (coming soon)",
    available: false,
  },
  {
    question: "Module 6: Getting hired (coming soon)",
    available: false,
  },
  {
    question: "Module 7: Going remote 🌴 (coming soon)",
    available: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Content() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            {/* Switch to Next.js image */}
            <img
              className="inset-0 h-[32rem] w-full object-cover shadow-2xl rounded-3xl"
              src="/course-preview.png"
              alt="Coding Nomad course preview"
            />
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1 className="text-3xl font-bold tracking-tight  sm:text-4xl">
                On a mission to empower software developers
              </h1>
              <div className="max-w-xl">
                <div className="text-gray-900 mt-6">
                  <p className="text-base font-semibold leading-7 text-indigo-600">
                    Course syllabus
                  </p>

                  <dl className="space-y-4 divide-y divide-gray-900/10">
                    {faqs.map((faq) => (
                      <Disclosure as="div" key={faq.question} className="pt-6">
                        {({ open }) => (
                          <>
                            <dt>
                              <Disclosure.Button
                                className={classNames(
                                  !faq.answer && "cursor-default",
                                  "flex w-full items-start justify-between text-left"
                                )}
                              >
                                <p
                                  className={classNames(
                                    faq.available
                                      ? "text-gray-700"
                                      : "text-gray-400",
                                    "leading-7"
                                  )}
                                >
                                  {faq.question}{" "}
                                  <span className="italic text-indigo-500 font-mono text-sm tracking-tight">
                                    {faq.plus}
                                  </span>
                                </p>

                                {faq.available && (
                                  <span className="ml-6 flex h-7 items-center">
                                    {open ? (
                                      <MinusIcon
                                        className="h-5 w-5 text-indigo-600"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <PlusIcon
                                        className="h-5 w-5 text-indigo-600"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                )}
                              </Disclosure.Button>
                            </dt>
                            {faq.answer && (
                              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                <p className="leading-7 text-gray-500">
                                  {faq.answer}
                                </p>
                              </Disclosure.Panel>
                            )}
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
