import React, { useState } from "react";
import axios from "axios";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [fromEmail, setfromEmail] = useState("");

  const [error, seterror] = useState("");
  const [status, setStatus] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !fromEmail || !message) {
      seterror("Please fill out all fields.");
      return;
    }

    try {
      const res = await axios.post(
        process.env.REACT_APP_DEPLOYED_URL + "/send-email",
        {
          name,
          fromEmail,
          phone,
          message,
        },
        { withCredentials: true }
      );
      seterror();
      setStatus(res.data.message);
      setTimeout(() => {
        setStatus();
      }, 5000);
    } catch (error) {
      seterror("Message was not sent");
      setTimeout(() => {
        seterror();
      }, 5000);
    }
  };

  return (
    <div className="flex flex-col gap-10 text-center md:text-left md:flex-row justify-between items-center text-zinc-300">
      {/* Social Links Section */}
      <div className="reveal-up flex flex-col gap-6">
        <h1 className="text-4xl text-zinc-100">Contact Me for Collaboration</h1>
        <p className="text-zinc-400">
          Let's work together! Feel free to reach out for collaborations.
        </p>
        <hr className="w-4/5 md:border-zinc-600 border" />
        <div className="flex justify-between md:mx-0 mx-auto md:w-1/2 gap-4">
          <a href="https://www.github.com/RupakBoral">
            <svg
              className="border border-zinc-400 w-12 h-12 rounded-xl bg-slate-800"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48603 2 2 6.48604 2 12C2 17.514 6.48603 22 12 22C17.514 22 22 17.514 22 12C22 6.48604 17.514 2 12 2ZM12 3.5C16.7033 3.5 20.5 7.2967 20.5 12C20.5 15.8327 17.9785 19.0613 14.5 20.126V17.5684C14.5 16.6133 13.9497 15.7943 13.1543 15.3867C13.9276 15.2388 14.6457 14.9454 15.249 14.5309C15.8522 14.1165 16.3232 13.5929 16.6228 13.0037C16.9224 12.4145 17.0421 11.7765 16.9718 11.1429C16.9015 10.5093 16.6434 9.89818 16.2188 9.36035C16.4405 8.67771 16.6883 7.48034 16.0996 6.53809C14.9647 6.53809 14.2323 7.31604 13.8828 7.7998C13.2853 7.60352 12.6459 7.5017 12 7.5C11.3537 7.50057 10.7136 7.60139 10.1152 7.79688C9.76487 7.31289 9.03311 6.53809 7.90039 6.53809C7.22486 7.61941 7.64246 8.78228 7.86621 9.25684C7.41288 9.79235 7.12862 10.4078 7.03781 11.0505C6.94699 11.6931 7.05233 12.3438 7.34478 12.9468C7.63723 13.5498 8.10809 14.087 8.71698 14.5124C9.32587 14.9379 10.0546 15.2389 10.8408 15.3896C10.1877 15.7262 9.69864 16.337 9.54883 17.0781H8.8916C8.2431 17.0781 7.99112 16.8146 7.64062 16.3701C7.29463 15.9256 6.92259 15.6269 6.47559 15.5029C6.23459 15.4774 6.07223 15.6607 6.28223 15.8232C6.99173 16.3062 7.0407 17.0968 7.3252 17.6143C7.5842 18.0803 8.11484 18.5 8.71484 18.5H9.5V20.126C6.02153 19.0613 3.5 15.8327 3.5 12C3.5 7.2967 7.29669 3.5 12 3.5Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/rupak-boral-169435249/">
            <svg
              className="border border-zinc-400 w-12 h-12 rounded-xl bg-slate-800"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <a href="https://leetcode.com/u/RupakBoral/">
            <img
              className="border border-zinc-400 w-12 h-12 rounded-xl bg-slate-800"
              src="https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png"
              alt=""
            />
          </a>
        </div>
        {status && (
          <div
            id="toast-simple"
            className="flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800"
            role="alert"
          >
            <svg
              className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
              />
            </svg>
            <div className="ps-4 text-sm font-normal">{status}</div>
          </div>
        )}

        {error && (
          <div
            id="toast-danger"
            className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800"
            role="alert"
          >
            <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
              </svg>
              <span className="sr-only">Error icon</span>
            </div>
            <div className="ms-3 text-sm font-normal">{error}</div>
          </div>
        )}
      </div>

      {/* Contact Form */}
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="reveal-down flex flex-col gap-6 w-full md:w-1/2"
      >
        <div className="flex flex-col gap-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="h-12 p-2 bg-neutral-700 text-zinc-200 rounded-lg"
            required
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="name">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone (optional)"
            className="h-12 p-2 bg-neutral-700 text-zinc-200 rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setfromEmail(e.target.value)}
            placeholder="Enter your email"
            className="h-12 p-2 bg-neutral-700 text-zinc-200 rounded-lg"
            required
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message..."
            className="h-36 p-3 bg-neutral-700 text-zinc-200 rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-sky-600 text-sky-950 font-semibold text-lg rounded-xl p-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
