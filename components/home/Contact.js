import { FaPhone } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Contact() {
  return (
    <section className="py-10" id="contact">
      <h2 className="font-incognito text-text-root text-4xl font-semibold tracking-tight">
        Get In Touch
      </h2>
      <div className="pt-4">
        <p className="text-text-primary text-xl">
          I’m always looking forward for new opportunities, and my inbox is
          always open. Whether you have a question or just want to say hi, I’ll
          try my best to get back to you!
        </p>
        <div className="grid grid-cols-7 gap-x-12 items-center">
          <div className="py-4 col-span-5">
            <h3 className="py-2 text-xl font-semibold text-text-primary">
              Whats up?
            </h3>
            <div className="grid grid-cols-2 gap-x-6 ">
              <div className="">
                <div className="py-2">
                  <label
                    htmlFor=""
                    className="block text-text-secondary pb-1.5 font-semibold"
                  >
                    Name (Required)
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border rounded-md border-project-card-border  bg-project-card-bg-secondary p-2 w-full"
                  />
                </div>
                <div className="py-2">
                  <label
                    htmlFor=""
                    className="block text-text-secondary pb-1.5 font-semibold"
                  >
                    Email (Required)
                  </label>
                  <input
                    type="text"
                    placeholder="Email address"
                    className="border rounded-md border-project-card-border  bg-project-card-bg-secondary p-2 w-full"
                  />
                </div>
                <div className="py-2">
                  <label
                    htmlFor=""
                    className="block text-text-secondary pb-1.5 font-semibold"
                  >
                    Subject (Required)
                  </label>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="border rounded-md border-project-card-border  bg-project-card-bg-secondary p-2 w-full"
                  />
                </div>
              </div>
              <div className="">
                <div className="py-2  flex flex-col h-full">
                  <label
                    htmlFor=""
                    className="block text-text-secondary pb-1.5 font-semibold"
                  >
                    Comment (Required)
                  </label>

                  <textarea
                    placeholder="Type comment"
                    className="border rounded-md border-project-card-border  bg-project-card-bg-secondary  p-2 w-full h-full "
                  />
                </div>
              </div>
            </div>
            <div className="py-4">
              <button className="p-2 rounded-md w-full border border-project-card-border">
                Send Message{" "}
              </button>
            </div>
          </div>
          <div className="py-4 col-span-2 h-fit ">
            <h3 className="py-2 text-xl text-text-primary font-semibold">
              What is your plan ? Call me
            </h3>
            <div className="py-2">
              <p className="text-text-secondary">
                If you have any question or need help, please feel free to
                contact me.
              </p>
            </div>
            <div className="py-2">
              <p className="text-text-secondary flex items-center gap-3">
                {" "}
                <span>
                  <FaPhone className="text-button text-lg" />
                </span>{" "}
                +880 123 456 7890
              </p>
            </div>
            <div className="py-2 ">
              <p className="text-text-secondary flex items-center gap-3 ">
                <MdOutlineMailOutline className="text-button text-2xl" />
                <a
                  href="mailto:
                    "
                  className=""
                >
                  {" "}
                  contact@yourdomain.com{" "}
                </a>
              </p>
            </div>
            <div className="py-2">
              <p className="text-text-secondary flex items-center gap-3">
                <FaMapLocationDot className="text-button text-2xl" />
                Address: 1234 Street Name, City Name, United States
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
