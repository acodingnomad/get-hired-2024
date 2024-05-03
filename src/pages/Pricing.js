import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Full Price",
    id: "tier-full",
    href: "https://sso.teachable.com/secure/2068689/checkout/5516828/get-hired-as-a-swe-in-2024",
    priceMonthly: "$169",
    description: "Final price of the course once all modules are released.",
    features: [
      "3 Resume Templates",
      "Interview Prep Kit",
      "Lifetime access to the course",
      "Access to the Coding Nomad community",
    ],
    featured: false,
  },
  {
    name: "Early access",
    id: "tier-early-bird",
    href: "https://sso.teachable.com/secure/2068689/checkout/5516828/get-hired-as-a-swe-in-2024",
    priceMonthly: "$84",
    description:
      "Early bird access with a discounted price & special benefits.",
    features: [
      "1:1 call with Coding Nomad (limited availability)",
      "3 Resume Templates",
      "Interview Prep Kit",
      "Lifetime access to the course",
      "Access to the Coding Nomad community",
    ],
    featured: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  return (
    <div className="relative isolate py-16 sm:py-24 bg-[#66cca0] px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <h2 className="text-base font-semibold leading-7 text-black">
          Pricing
        </h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          The right price for you
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-800">
        Early access price is going to be available for a limited time only.
        Once all modules are out, the final price is going to be $169.
      </p>
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-16 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? "relative bg-gray-900 shadow-2xl order-1 md:order-2"
                : "bg-[#f5f3ea] sm:mx-8 lg:mx-0 order-2 md:order-1 border-[1px] border-black",
              tier.featured
                ? ""
                : tierIdx === 0
                ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
              "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? "text-[#f88bec]" : "text-black",
                "text-base font-semibold leading-7"
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? "text-white" : "text-gray-900",
                  "text-5xl font-bold tracking-tight"
                )}
              >
                {tier.priceMonthly}
              </span>
            </p>
            <p
              className={classNames(
                tier.featured ? "text-gray-300" : "text-gray-800",
                "mt-6 text-base leading-7"
              )}
            >
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? "text-gray-300" : "text-gray-800",
                "mt-8 space-y-3 text-sm leading-6 sm:mt-10"
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className={classNames(
                      tier.featured ? "text-[#f88bec]" : "text-black",
                      "h-6 w-5 flex-none"
                    )}
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            {tier.featured && (
              <p className="text-xs text-gray-300 mt-5">
                The first three modules are coming by May 31st*
              </p>
            )}
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? "bg-[#f88bec] text-black shadow-sm hover:bg-[#f055de] focus-visible:outline-[#f88bec]"
                  : "text-gray-500 ring-1 ring-inset ring-gray-500 hover:ring-gray-600 focus-visible:outline-gray-600",
                "mt-8 block tracking-wide rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
              )}
            >
              {tier.featured ? `SIGN ME UP` : `Get started`}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
