import {
  DocumentTextIcon,
  CodeBracketIcon,
  BoltIcon,
  CheckCircleIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";

const features = [
  {
    name: "Resume, GitHub, and LinkedIn makeover",
    description:
      "Learn how to write an effective resume (even as a beginner without experience), optimize your GitHub and LinkedIn to land more interviews.",
    icon: DocumentTextIcon,
  },
  {
    name: "Build real-life projects for your portfolio",
    description:
      "Learn what projects to build to stand out, enhance your experience and propell your career.",
    icon: CodeBracketIcon,
  },
  {
    name: "Land more interviews",
    description:
      "Master latest networking & job application tactics to get invited to more interviews and build your connections.",
    icon: BoltIcon,
  },
  {
    name: "Prepare for interviews easier",
    description:
      "Assess your level and create a studying plan following the best practices to save time & pass interviews easier.",
    icon: CheckCircleIcon,
  },
];

export default function Feature() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Get hired faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to land your next software engineering job
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Avoid common beginner mistakes to land your ideal job faster{" "}
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl sm:mt-20 lg:max-w-4xl">
          <dl className="grid max-w-2xl grid-cols-1  gap-y-6">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-14">
                <dt className="md:text-md font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                    <feature.icon
                      className="h-7 w-7 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <p>{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
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
