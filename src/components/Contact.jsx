import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  // Function to send email using EmailJS (client-side, no backend required)
  // You need to sign up at https://www.emailjs.com/ and get your service ID, template ID, and user/public key.
  // This is a sample function; you must install emailjs-com: npm install emailjs-com
  // and import emailjs from 'emailjs-com' at the top of your file if you use this.

  // Example usage:
  // sendEmail({ name: "Your Name", email: "your@email.com", message: "Hello!" });

  // async function sendEmail({ name, email, message }) {
  //   // Replace these with your actual EmailJS credentials
  //   const serviceID = "your_service_id";
  //   const templateID = "your_template_id";
  //   const userID = "your_public_key";

  //   // emailjs.send returns a promise
  //   try {
  //     const emailjs = await import("emailjs-com");
  //     const result = await emailjs.send(
  //       serviceID,
  //       templateID,
  //       {
  //         from_name: name,
  //         from_email: email,
  //         message: message,
  //       },
  //       userID
  //     );
  //     return result;
  //   } catch (error) {
  //     console.error("Failed to send email:", error);
  //     throw error;
  //   }
  // }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vx9ih2z",
        "template_3e880f8",
        form.current,
        "user_RQJAc5DA62MYxrZJC6z7X"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="pt-20">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <a
                    href="mailto:mmahedi49@gmail.com"
                    className="font-medium text-gray-800 hover:underline"
                  >
                    mmahedi49@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.3 1.2a2 2 0 01-.45 1.95l-1.1 1.1a16.001 16.001 0 006.36 6.36l1.1-1.1a2 2 0 011.95-.45l1.2.3A2 2 0 0121 16.72V19a2 2 0 01-2 2h-.01C7.61 21 3 16.39 3 10.99V9a2 2 0 012-2z"
                    />
                  </svg>
                </span>
                <div>
                  <div className="text-sm text-gray-500">Mobile</div>
                  <span className="font-medium text-gray-800">
                    +8801751715865
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-500">
                  {/* GitHub Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.566 4.936.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.135 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                    />
                  </svg>
                </span>
                <div>
                  <div className="text-sm text-gray-500">GitHub</div>
                  <a
                    href="https://github.com/md-mh"
                    className="font-medium text-gray-800 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    md-mh
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-500">
                  {/* LinkedIn Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.87 0-2.156 1.46-2.156 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
                  </svg>
                </span>
                <div>
                  <div className="text-sm text-gray-500">LinkedIn</div>
                  <a
                    href="https://www.linkedin.com/in/mdmh94/"
                    className="font-medium text-gray-800 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    mdmh94
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="card p-6">
            <label className="block text-sm">Name</label>
            <input
              name="from_name"
              className="w-full mt-1 p-2 border rounded"
              required
            />
            <label className="block text-sm mt-3">Email</label>
            <input
              name="from_email"
              type="email"
              className="w-full mt-1 p-2 border rounded"
              required
            />
            <label className="block text-sm mt-3">Message</label>
            <textarea
              name="message"
              className="w-full mt-1 p-2 border rounded"
              rows="4"
              required
            ></textarea>
            <div className="mt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-slate-400 text-white rounded"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
