// import Image from "next/image";

const earlyAccessModules = [
  { number: "1", description: "Dealing with imposter syndrome" },
  { number: "2", description: "Writing a great resume 📄" },
  { number: "3", description: "Building real projects for your portfolio" },
];
const comingSoonModules = [
  { number: "4", description: "Landing Interviews" },
  { number: "5", description: "Interview Preparation" },
  { number: "6", description: "Getting hired" },
  { number: "7", description: "Going remote & digital nomad lifestyle 🌴" },
];

export default function Content() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <img
              className="inset-0 h-[32rem] w-full object-cover shadow-2xl rounded-3xl"
              src="/course-preview.png"
              alt="Coding Nomad course preview"
            />
            {/* Switch to Next.js image */}
            {/* <Image
              src="/course-preview.png"
              alt="Coding Nomad course preview"
              width={300}
              height={100}
              className="inset-0  object-cover shadow-2xl rounded-3xl"
            /> */}
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1 className="text-3xl font-bold tracking-tight  sm:text-4xl">
                On a mission to empower software developers
              </h1>
              <div className="max-w-xl">
                <div className="text-gray-900 mt-6">
                  <p className="mb-4 text-base font-semibold leading-7 text-indigo-600">
                    Course content
                  </p>
                  <dl>
                    {earlyAccessModules.map((module) => (
                      <p className="mt-8" key={module.number}>
                        Module {module.number}: {module.description}
                      </p>
                    ))}
                  </dl>
                </div>
                <div className="text-gray-400 mt-6">
                  <dl>
                    {comingSoonModules.map((module, moduleIdx) => (
                      <p className="mt-8" key={module.number}>
                        Module {module.number}: {module.description}{" "}
                        <span className="italic text-indigo-300">
                          coming soon
                        </span>
                      </p>
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
