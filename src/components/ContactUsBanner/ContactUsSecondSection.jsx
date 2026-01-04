"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUsSecondSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // 🔴 replace
        "YOUR_TEMPLATE_ID", // 🔴 replace
        formRef.current,
        "YOUR_PUBLIC_KEY" // 🔴 replace
      )
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          formRef.current.reset();
        },
        () => {
          setLoading(false);
          setStatus("error");
        }
      );
  };

  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT – Contact Info */}
        <div className="space-y-10">
          <div>
            <h2 className="mt-3 text-2xl md:text-2xl font-semibold">
              We Love To Hear From You
            </h2>
            <p className="mt-4 text-gray-400 max-w-md">
              Have a project in mind or need help? Reach out and let’s build
              something meaningful together.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Office
              </p>
              <p className="mt-2 text-lg">LA, Dubin Street</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Office
              </p>
              <p className="mt-2 text-lg">NY, Santo Street</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Email
              </p>
              <a
                href="mailto:hello@designhive.com"
                className="mt-2 inline-block text-lg text-blue-400 hover:text-blue-300 transition"
              >
                hello@akash.com
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT – Form */}
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10" />

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="relative p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              required
              className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-blue-500"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email address"
              required
              className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-blue-500"
            />

            <select
              name="service"
              className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-blue-500"
            >
              <option value="">Select service</option>
              <option value="Web Design">Web Design</option>
              <option value="Development">Development</option>
              <option value="Branding">Branding</option>
            </select>

            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-blue-500"
            />

            <textarea
              name="message"
              placeholder="Tell us about your project"
              rows="4"
              required
              className="md:col-span-2 rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-sm outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 mt-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 py-3 font-medium hover:opacity-90 transition"
            >
              {loading ? "Sending..." : "Send message"}
            </button>

            {status === "success" && (
              <p className="md:col-span-2 text-green-400 text-sm mt-2">
                Message sent successfully. We’ll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="md:col-span-2 text-red-400 text-sm mt-2">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSecondSection;
