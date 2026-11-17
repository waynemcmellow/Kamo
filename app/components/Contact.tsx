
"use client";

import { useState } from "react";

export default function Contact() {
  const contactEmail = "sebatasamukele488@gmail.com";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("Brand strategy");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Project enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInterested in: ${interest}\n\nProject details:\n${message}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <footer
      id="contact"
      className="bg-[#202a35] px-6 pb-7 pt-14 text-white md:px-[4%] md:pt-14"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">

        
        <div className="flex flex-col">

          <p className="mb-5 text-[8px] font-bold tracking-[2px] text-[#a9cbb3]">
            START A CONVERSATION
          </p>

          <h2 className="font-serif text-[48px] font-bold leading-[0.88] tracking-[-2px] md:text-[53px]">

            Have a project

            <br />

            in mind?{" "}
            <span className="italic text-[#a9cbb3]">
              Let's
            </span>

            <br />

            <span className="italic text-[#a9cbb3]">
              talk.
            </span>

          </h2>

          <a
            href={`mailto:${contactEmail}`}
            className="mt-7 flex w-fit items-center gap-2 border-b border-white/20 pb-1 text-[9px] font-semibold transition hover:text-[#a9cbb3]"
          >
            {contactEmail}
            <span>↗</span>
          </a>

        </div>

        
        <div className="rounded-[17px] bg-white p-6 text-[#202a35] md:p-7">

          <form onSubmit={handleSubmit} className="space-y-5">

           
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              <div>
                <label className="mb-3 block text-[7px] font-bold tracking-wide">
                  YOUR NAME
                </label>

                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="w-full border-b border-gray-200 pb-2 text-[9px] outline-none transition focus:border-green-700 placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="mb-3 block text-[7px] font-bold tracking-wide">
                  EMAIL ADDRESS
                </label>

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full border-b border-gray-200 pb-2 text-[9px] outline-none transition focus:border-green-700 placeholder:text-gray-400"
                />
              </div>

            </div>

           
            <div>
              <label className="mb-3 block text-[7px] font-bold tracking-wide">
                I'M INTERESTED IN
              </label>

              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full appearance-none border-b border-gray-200 bg-transparent pb-2 text-[9px] font-medium outline-none focus:border-green-700"
              >
                <option>Brand strategy</option>
                <option>Content & Social</option>
                <option>Growth Marketing</option>
                <option>Campaign Management</option>
                <option>Other</option>
              </select>
            </div>

           
            <div>
              <label className="mb-3 block text-[7px] font-bold tracking-wide">
                TELL ME A LITTLE ABOUT YOUR PROJECT
              </label>

              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What are we making?"
                className="w-full resize-none border-b border-gray-200 pb-2 text-[9px] outline-none transition focus:border-green-700 placeholder:text-gray-400"
              />
            </div>

            
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#087442] py-3 text-[8px] font-bold text-white transition duration-300 hover:bg-[#065d35]"
            >
              Send enquiry
              <span>↗</span>
              
            </button>

          </form>

        </div>

      </div>

     
      <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-5 text-[7px] text-gray-400 md:flex-row md:items-center">

       
        <p>
          © 2025 Kamohelo Sebata. Built with intention.
        </p>

       
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/kamohelo-sebata-533b09401/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/kamoesebata/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            Instagram
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61583675497786"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            Facebook
          </a>
        </div>

        
        <a
          href="#top"
          className="flex items-center gap-2 hover:text-white transition"
        >
          Back to top
          <span>↗</span>
        </a>

      </div>
    </footer>
  );
}
