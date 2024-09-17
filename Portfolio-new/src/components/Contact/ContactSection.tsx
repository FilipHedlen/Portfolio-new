import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"
import ContactForm from "./ContactForm"

export const ContactSection = () => {
  const contactMethods = [
		{
      icon:
        <a
          href="mailto:filip.hedlen@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoIosMail className="text-dark-grey dark:text-light-grey text-2xl hover:text-primary-light-hover hover:dark:text-primary-dark-hover" />
        </a>
      ,
      contact: 
        "filip.hedlen@gmail.com"
    },
    {
      icon:
        <FaPhoneAlt className="text-dark-grey dark:text-light-grey text-2xl hover:text-primary-light-hover hover:dark:text-primary-dark-hover" />
      ,
      contact: 
        "+46 762733899"
    },
	  {
		  icon:
				<a
					href="https://github.com/FilipHedlen"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub className="text-dark-grey dark:text-light-grey text-2xl hover:text-primary-light-hover hover:dark:text-primary-dark-hover" />
				</a>
			,
			contact:
			  "Github"
		},
		{
			icon:
				<a
					href="https://www.linkedin.com/in/filip-hedl%C3%A9n-04b489252/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin className="text-dark-grey dark:text-light-grey text-2xl hover:text-primary-light-hover hover:dark:text-primary-dark-hover" />
				</a>
			,
			contact:
				"LinkedIn"
		},
  ]

  return (
    <main className="py-14 animate-spin">
      <div className="max-w-screen-xl mx-auto px-4 text-dark-grey dark:text-light-grey md:px-8">
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
          <div className="max-w-lg space-y-3">
            <p className="text-dark-grey dark:text-light-grey text-3xl font-semibold sm:text-4xl">
              Contact Information
            </p>
            <p className="mb-20">
              Feel free to contact me if you have any questions about anything, or if you just want to connect!
            </p>
            <div>
              <ul className="mt-6 flex flex-col flex-wrap gap-y-6">
                {
                  contactMethods.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-x-3">
                      <div>
                        {item.icon}
                      </div>
                      <p>{item.contact}</p>
                    </li>
                  ))
                }
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>
        </div>
    </main>
  )
}
