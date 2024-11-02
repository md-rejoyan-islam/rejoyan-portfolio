"use client";
import lootieAnimation from "../../app/public/bannerAnimation.json";
import ShowLottieFile from "../ShowLottieFile";
import { BackgroundLines } from "../ui/background-lines";

export default function Contact() {
  return (
    <section className="py-10" id="contact">
      <h2 className="font-incognito text-text-root text-4xl font-semibold tracking-tight">
        Get In Touch
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="pt-4 lg:col-span-1 order-2 lg:order-1">
          <p className="text-text-primary text-xl">
            I’m always looking forward for new opportunities, and my inbox is
            always open. Whether you have a question or just want to say hi,
            I’ll try my best to get back to you!
          </p>
          <div className=" ">
            <div className="py-4 col-span-5">
              <h3 className="py-2 text-xl font-semibold text-text-primary">
                Whats up?
              </h3>
              <div className="">
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
          </div>
        </div>
        <div className=" w-full   lg:col-span-1 order-1 lg:order-2 relative">
          <div className="lg:absolute  w-full h-full items-center top-0 bottom-0 my-auto flex flex-col justify-center  overflow-hidden">
            <BackgroundLines>
              <ShowLottieFile
                src={lootieAnimation}
                loop={true}
                className={"max-w-[600px] h-full mx-auto lg:w-[120%]"}
              />
            </BackgroundLines>
          </div>
        </div>
      </div>
    </section>
  );
}
