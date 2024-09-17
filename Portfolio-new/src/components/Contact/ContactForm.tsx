import emailjs from '@emailjs/browser';
import { useState } from 'react';

const ContactForm = () => {
  const [isMailSent, setIsMailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const form = e.currentTarget;

    if (form) {
      try {
        await emailjs.sendForm(serviceId, templateId, e.currentTarget, publicKey);
          setIsMailSent(true);
        } catch (error) {
          console.error("Error sending email", error);
        }
        form.reset();
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto my-16 font-lora">
      {isMailSent ? (
        <div className="bg-transparent mx-auto p-4 mb-4 width flex justify-center w-[50%]">
          <h3 className="text-2xl font-lora text-dark-grey dark:text-light-grey">
            Your mail has been sent successfully!
          </h3>
        </div>
      ) : (
        <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-medium">Full name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full mt-2 px-3 py-2 text-dark-grey dark:text-light-grey bg-transparent outline-none border border-dark-grey dark:border-light-grey focus:border-cyan-dark shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-2 px-3 py-2 text-dark-grey dark:text-light-grey bg-transparent outline-none border border-dark-grey dark:border-light-grey focus:border-cyan-dark shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Message</label>
              <textarea
                name="message"
                required
                className="w-full mt-2 h-36 px-3 py-2 text-dark-grey dark:text-light-grey resize-none appearance-none bg-transparent outline-none border border-dark-grey dark:border-light-grey focus:border-cyan-dark shadow-sm rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactForm;