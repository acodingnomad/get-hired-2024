"use client"; // This is a client component 👈🏽

import { useState } from "react";
import { useForm } from "react-hook-form";

const Newsletter = () => {
  const [status, setStatus] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const SUBSCRIBE_URL = `${process.env.CONVERTKIT_API_URL}/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`;

  const onSubmit = async (data, e) => {
    e.preventDefault();

    const payload = JSON.stringify({
      email: data.email,
      api_key: process.env.CONVERTKIT_API_KEY,
    });

    try {
      const response = await fetch(SUBSCRIBE_URL, {
        method: "POST",
        body: payload,
        headers: {
          Accept: "application/json; charset=utf-8",
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();

      if (json?.subscription?.id) {
        setStatus("SUCCESS");
        return;
      }
      setStatus("ERROR");
    } catch (error) {
      setStatus("ERROR");
      console.error(error);
    }
  };

  return (
    <div className="sm:pb-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="bg-[#a8ebff] border-[1px] border-black relative isolate overflow-hidde px-6 py-24 sm:rounded-3xl sm:px-24">
          <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold tracking-tight text-black sm:text-4xl">
            Get notified with the course updates 👩‍💻
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-black">
            Sign up for my newsletter and join a community of aspiring Software
            Developers.
          </p>
          {status === "SUCCESS" ? (
            <p className="mx-auto mt-10 max-w-xl text-center leading-8 text-green-800">
              Please check your inbox to confirm the subscription!
            </p>
          ) : (
            <>
              {status === "ERROR" && (
                <p className="mx-auto mt-5 max-w-xl text-center text-lg leading-8 text-red-800">
                  Something went wrong! Please try again.
                </p>
              )}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mx-auto mt-10 flex max-w-md gap-x-4"
              >
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <div className="w-full grid">
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email Address is required",
                      pattern:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                  />
                  {errors.email && errors.email.type === "required" && (
                    <p role="alert" className="text-red-800 mt-2 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <p role="alert" className="text-red-600 mt-2 text-sm">
                      Please enter a valid email
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="flex-none h-10 rounded-md bg-black text-white px-3.5 py-2.5 text-sm font-semiboldshadow-sm border-[1px] border-black hover:bg-[#f88bec] hover:text-black hover:border-[1px] hover:border-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Notify me
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
