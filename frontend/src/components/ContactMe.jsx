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
        <hr className="w-4/5 md:border-zinc-600 border-transparent" />
        {status && (
          <div
            id="toast-simple"
            className="flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800"
            role="alert"
          >
            <svg
              class="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45"
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
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
              </svg>
              <span class="sr-only">Error icon</span>
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
            type="phone"
            id="email"
            name="fromEmail"
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
