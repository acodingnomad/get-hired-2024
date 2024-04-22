import "../../app/globals.css";

import { CheckCircleIcon, ArrowLeftIcon } from "@heroicons/react/20/solid";

export default function Policy() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-800">
        <a
          href="/"
          className="flex text-base underline font-semibold leading-7 text-indigo-600"
        >
          <ArrowLeftIcon className="mt-1 h-5 w-5 flex-none text-indigo-600 mr-1" />{" "}
          Go back to the site
        </a>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Privacy Policy{" "}
        </h1>
        <div className="mt-10 max-w-2xl">
          <p>
            Last updated April 15, 2024 This privacy notice for Ksar LLC (doing
            business as Coding Nomad), describes how and why we might collect,
            store, use, and/or share (process) your information when you use our
            services (Services), such as when you:
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-800">
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                Visit our website at coding-nomad.dev, or any website of ours
                that links to this privacy notice. Engage with us in other
                related ways, including any sales, marketing, or events.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon
                className="mt-1 h-5 w-5 flex-none text-indigo-600"
                aria-hidden="true"
              />
              <span>
                Engage with us in other related ways, including any sales,
                marketing, or events.
              </span>
            </li>
          </ul>
          <p className="mt-6">
            If you still have any questions or concerns, please contact us: at
            acodingnomad@gmail.com
          </p>
          <h2 className="mt-12 text-2xl font-bold tracking-tight text-gray-900 capitalize">
            Summary of key points
          </h2>
          <p className="mt-6">
            This summary provides key points from our privacy notice, but you
            can find out more details about any of these topics by using our
            table of contents below to find the section you are looking for.
          </p>
          <p className="mt-10">
            <span className="font-bold">
              What personal information do we process?{" "}
            </span>
            When you visit, use, or navigate our Services, we may process
            personal information depending on how you interact with us and the
            Services, the choices you make, and the products and features you
            use.
          </p>
          <p className="mt-5">
            <span className="font-bold">
              Do we process any sensitive personal information?{" "}
            </span>
            We do not process sensitive personal information.
          </p>
          <p className="mt-5">
            <span className="font-bold">
              Do we receive any information from third parties?{" "}
            </span>
            We do not receive any information from third parties.
          </p>
          <p className="mt-5">
            <span className="font-bold">
              How do we process your information?{" "}
            </span>
            We process your information to provide, improve, and administer our
            Services, communicate with you, for security and fraud prevention,
            and to comply with law. We may also process your information for
            other purposes with your consent. We process your information only
            when we have a valid legal reason to do so.
          </p>
          <p className="mt-5">
            <span className="font-bold">
              In what situations and with which parties do we share personal
              information?{" "}
            </span>
            We may share information in specific situations and with specific
            third parties.
          </p>
          <p className="mt-5">
            <span className="font-bold">
              How do we keep your information safe?{" "}
            </span>
            We have organizational and technical processes and procedures in
            place to protect your personal information. However, no electronic
            transmission over the internet or information storage technology can
            be guaranteed to be 100% secure.
          </p>
          <p className="mt-5">
            <span className="font-bold">What are your rights? </span>
            Depending on where you are located geographically, the applicable
            privacy law may mean you have certain rights regarding your personal
            information.
          </p>
          <p className="mt-5">
            <span className="font-bold">How do you exercise your rights? </span>
            How do you exercise your rights? The easiest way to exercise your
            rights is by submitting a request.
          </p>
        </div>
        <div className="mt-12 max-w-2xl">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            Information Automatically Collected
          </h3>
          <p className="mt-6">
            In short: Some information — such as your Internet Protocol (IP)
            address and/or browser and device characteristics — is collected
            automatically when you visit our Services.
          </p>
          <p className="mt-6">
            We automatically collect certain information when you visit, use, or
            navigate the Services. This information does not reveal your
            specific identity but may include device and usage information, such
            as your IP address, browser and device characteristics, operating
            system, language preferences, referring URLs, device name, country,
            location, and other technical information. This information is
            primarily needed to maintain the security and operation of our
            Services, and for our internal analytics and reporting purposes.
          </p>
          <p className="mt-6">The information we collect includes:</p>
          <p className="mt-6">
            <span className="font-bold">Device Data: </span>We collect device
            data such as information about your computer, phone, tablet, or
            other device you use to access the Services. Depending on the device
            used, this device data may include information such as your IP
            address (or proxy server), device and application identification
            numbers, location, browser type, hardware model, Internet service
            provider and/or mobile carrier, operating system, and system
            configuration information.
          </p>
          <p className="mt-6">
            <span className="font-bold">Location Data: </span>
            {`We collect location data such as information about your device's
            location, which can be either precise or imprecise. The amount of
            information we collect depends on the type and settings of the
            device you use to access our Services. For example, we may use GPS
            and other technologies to collect geolocation data that tells us
            your current location (based on your IP address). You can opt out of
            allowing us to collect this information either by refusing access to
            the information or by disabling your location setting on your
            device. However, if you choose to opt out, you may not be able to
            use certain aspects of our Services.`}
          </p>
        </div>
        <div className="mt-12 max-w-2xl">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            How do we process your information
          </h3>
          <p className="mt-6">
            In Short: We process your information to provide, improve, and
            administer our Services, communicate with you, for security and
            fraud prevention, and to comply with law. We may also process your
            information for other purposes with your consent.
          </p>
          <p className="mt-6">
            We process your personal information for a variety of reasons,
            depending on how you interact with our Services, including:
          </p>
          <p className="mt-6">
            <span className="font-bold">To request feedback. </span>
            We may process your information when necessary to request feedback
            and to contact you about your use of our Services.
          </p>
          <p className="mt-6">
            <span className="font-bold">
              To send you marketing and promotional communications.{" "}
            </span>
            We may process the personal information you send to us for our
            marketing purposes, if this is in accordance with your marketing
            preferences. You can opt out of our marketing emails at any time.
          </p>
          <p className="mt-6">
            <span className="font-bold">To protect our Services. </span>
            We may process your information as part of our efforts to keep our
            Services safe and secure, including fraud monitoring and prevention.
          </p>
          <p className="mt-6">
            <span className="font-bold">
              {`To save or protect an individual's vital interest.`}{" "}
            </span>
            {`We may process your information when necessary to save or protect an
            individual’s vital interest, such as to prevent harm.`}
          </p>
        </div>
        <div className="mt-12 max-w-2xl">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 uppecase">
            Detailed Information on the Processing of Personal Data
          </h3>
          <p className="mt-6">
            <span className="font-bold">
              Vendors, Consultants, and Other Third-Party Service Providers.{" "}
            </span>
            {`We may share your data with third-party vendors, service providers,
            contractors, or agents ("third parties") who perform services for us
            or on our behalf and require access to such information to do that
            work. We have contracts in place with our third parties, which are
            designed to help safeguard your personal information. This means
            that they cannot do anything with your personal information unless
            we have instructed them to do it. They will also not share your
            personal information with any organization apart from us. They also
            commit to protecting the data they hold on our behalf and to retain
            it for the period we instruct. The third parties we may share
            personal information with are as follows:`}
          </p>
          <p className="font-bold mt-6"> ConvertKit (ConvertKit LLC) </p>
          <p className="mt-6">
            ConvertKit is an email address management and message sending
            service provided by ConvertKit LLC. Personal Data processed: email
            address; first name; Tracker; Usage Data. Place of processing:
            United States – Privacy Policy. Category of personal information
            collected according to CCPA: identifiers; internet information. This
            processing constitutes a sale based on the definition under the
            CCPA. In addition to the information in this clause, the User can
            find information regarding how to opt out of the sale in the section
            detailing the rights of Californian consumers.
          </p>
        </div>
      </div>
    </div>
  );
}
