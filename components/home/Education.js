import { FaUniversity } from "react-icons/fa";
import { IoTime } from "react-icons/io5";

export default function Education() {
  return (
    <section className="py-10">
      <h2 className="font-incognito text-text-root text-4xl font-semibold tracking-tight">
        Timeline
      </h2>
      <div className="py-12">
        <div className="w-11/12 mx-auto">
          <div className=" grid grid-cols-12 gap-4 items-start">
            <div className="col-span-2 mt-3.5 hidden md:flex flex-col items-center justify-center h-full">
              <p className="text-nowrap">Jan 2022 — Present</p>
            </div>
            <div className=" flex flex-col items-center col-span-1 h-full">
              <h4 className="p-2 bg-project-card-background rounded-full flex items-center justify-center h-12 w-12">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  className="text-button text-sm w-10 h-10"
                  strokeWidth={0}
                  viewBox="0 0 640 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z" />
                </svg>
              </h4>
              <span className=" h-full block w-1 bg-project-card-bg-secondary"></span>
            </div>
            <div className=" gap-10 mt-1 col-span-11 md:col-span-9 pb-6">
              <div>
                <h3 className="text-text-primary text-2xl font-semibold">
                  Learn with Web Development
                </h3>

                <p className="text-text-secondary">
                  I am a full stack web developer with a passion for building
                  beautiful, responsive websites. I have a Bachelor of Science
                  in Computer Science from the University of California,
                  Riverside.
                </p>
                <p className="flex gap-2 items-center text-text-secondary text-sm pt-2">
                  <FaUniversity className="text-button" />
                  Online
                </p>
                <p className="text-nowrap flex md:hidden gap-2 mt-1 items-center text-text-secondary">
                  <IoTime className="text-button" />
                  <span>Jan 2022 — Present</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 mx-auto">
          <div className=" grid grid-cols-12 gap-4 items-start">
            <div className="col-span-2 mt-3.5 hidden md:flex flex-col items-center justify-center h-full">
              <p className="text-nowrap">Jan 2020 — Present</p>
            </div>
            <div className=" flex flex-col items-center col-span-1 h-full">
              <h4 className="p-2 bg-project-card-background rounded-full flex items-center justify-center h-12 w-12">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  className="text-button text-sm w-10 h-10"
                  strokeWidth={0}
                  viewBox="0 0 640 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z" />
                </svg>
              </h4>
              <span className=" h-full block w-1 bg-project-card-bg-secondary"></span>
            </div>
            <div className=" gap-10 mt-1 col-span-9 pb-6">
              <div>
                <h3 className="text-text-primary text-2xl font-semibold">
                  Bachelor of Science in Electrical and Electronic Engineering
                </h3>

                <p className="text-text-secondary">
                  I am a full stack web developer with a passion for building
                  beautiful, responsive websites. I have a Bachelor of Science
                  in Computer Science from the University of California,
                  Riverside.
                </p>
                <p className="flex gap-2 items-center text-text-secondary text-sm pt-2">
                  <FaUniversity className="text-button" />
                  Shahjalal University of Scient and Technology, Sylhet
                </p>
                <p className="text-nowrap flex md:hidden gap-2 mt-1 items-center text-text-secondary">
                  <IoTime className="text-button" />
                  <span>Jan 2022 — Present</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 mx-auto">
          <div className=" grid grid-cols-12 gap-4 items-start">
            <div className="col-span-2 mt-3.5 hidden md:flex flex-col items-center justify-center h-full">
              <p className="text-nowrap">Jun 2017 — Jun 2019</p>
            </div>
            <div className=" flex flex-col items-center col-span-1 h-full">
              <h4 className="p-2 bg-project-card-background rounded-full flex items-center justify-center h-12 w-12">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  className="text-button text-sm w-10 h-10"
                  strokeWidth={0}
                  viewBox="0 0 640 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z" />
                </svg>
              </h4>
              <span className=" h-full block w-1 bg-project-card-bg-secondary"></span>
            </div>
            <div className=" gap-10 mt-1 col-span-9 pb-6">
              <div>
                <h3 className="text-text-primary text-2xl font-semibold">
                  Higher Secondary School Certificate (HSC)
                </h3>

                <p className="text-text-secondary">
                  I am a full stack web developer with a passion for building
                  beautiful, responsive websites. I have a Bachelor of Science
                  in Computer Science from the University of California,
                  Riverside.
                </p>
                <p className="flex gap-2 items-center text-text-secondary text-sm pt-2">
                  <FaUniversity className="text-button" />
                  Govt.Azizul Haque College, Bogura
                </p>
                <p className="text-nowrap flex md:hidden gap-2 mt-1 items-center text-text-secondary">
                  <IoTime className="text-button" />
                  <span>Jan 2022 — Present</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 mx-auto">
          <div className=" grid grid-cols-12 gap-4 items-start">
            <div className="col-span-2 mt-3.5 hidden md:flex flex-col items-center justify-center h-full">
              <p className="text-nowrap">26 December 2020</p>
            </div>
            <div className=" flex flex-col items-center col-span-1 h-full">
              <h4 className="p-2 bg-project-card-background rounded-full flex items-center justify-center h-12 w-12">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  className="text-button text-sm w-10 h-10"
                  strokeWidth={0}
                  viewBox="0 0 640 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z" />
                </svg>
              </h4>
              <span className=" h-full block w-1 bg-project-card-bg-secondary"></span>
            </div>
            <div className=" gap-10 mt-1 col-span-9 pb-6">
              <div>
                <h3 className="text-text-primary text-2xl font-semibold">
                  Born at Bogura, Bangladesh
                </h3>

                <p className="text-text-secondary">
                  I am a full stack web developer with a passion for building
                  beautiful, responsive websites. I have a Bachelor of Science
                  in Computer Science from the University of California,
                  Riverside.
                </p>
                <p className="flex gap-2 items-center text-text-secondary text-sm pt-2">
                  <FaUniversity className="text-button" />
                  Bogura, Bangladesh
                </p>
                <p className="text-nowrap flex md:hidden gap-2 mt-1 items-center text-text-secondary">
                  <IoTime className="text-button" />
                  <span>Jan 2022 — Present</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
