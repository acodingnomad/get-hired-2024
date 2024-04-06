const features = [
  {
    name: "Perfect your resume, GitHub, and LinkedIn",
    description:
      "Learn how to write an effective resume (even as a beginner without experience), optimize your GitHub and LinkedIn to land more interviews.",
    number: "1",
  },
  {
    name: "Build real-life projects for your portfolio",
    description:
      "Learn what projects to build to stand out, enhance your experience and propell your career.",
    number: "2",
  },
  {
    name: "Land more interviews",
    description:
      "Master latest networking & job application tactics to get invited to more interviews and build your connections.",
    number: "3",
  },
  {
    name: "Get an offer",
    description:
      "Prepare for interviews following the best practices to save time & land your next offer faster.",
    number: "4",
  },
];

export default function Feature() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">
            On a mission to empower aspiring developers{" "}
          </p>
          <p className="mt-3 sm:mt-6 sm:text-lg leading-8 text-gray-600">
            Avoid common beginner mistakes to land your ideal job faster{" "}
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-14">
                <dt className="font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-green-600">
                    <p className="italic text-green-600 font-mono sm:text-xl tracking-tight">
                      {feature.number}
                    </p>
                  </div>
                  <p>{feature.name}</p>
                </dt>
                <dd className="mt-1 sm:mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
