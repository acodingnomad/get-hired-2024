"use client"; // This is a client component 👈🏽

import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Who is this course for?",
    answer: `This course is designed for aspiring software developers, whether you're fresh out of a coding bootcamp, a recent computer science graduate, or self-taught, looking to land your first job in the tech industry. If you want to improve your resume, portfolio, and interview skills to secure more job interviews and offers, this course is for you.`,
  },
  {
    question: "Does this course teach coding skills?",
    answer: `No, this course doesn't teach coding skills.`,
  },
  {
    question: "What will I learn in this course?",
    answer: `You'll learn how to create a compelling resume and portfolio that stands out to tech recruiters and hiring managers. We will also cover essential interview preparation techniques, ensuring you're fully equipped to impress in any interview scenario.`,
  },
  {
    question: "How long does the course take to complete?",
    answer: `The course is self-paced, but most students complete it within 4 to 6 weeks, dedicating a few hours each week to watch the videos and complete the homework.`,
  },
  {
    question: "Do I need any prior experience before taking this course?",
    answer: `While no specific prior experience is necessary, it's beneficial to have a basic understanding of software development principles and some coding experience to make the most of the course content, especially for portfolio development and technical interviews.`,
  },
  {
    question: `What’s the refund policy?`,
    answer: `No refunds are provided for pre-sale purchases. For the full price, you can request a refund within 14 days from the date of purchase.`,
  },
];

export default function Questions() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Frequently asked questions
        </h2>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusIcon className="h-5 w-5" aria-hidden="true" />
                        ) : (
                          <PlusIcon className="h-5 w-5" aria-hidden="true" />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-800">
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
}
