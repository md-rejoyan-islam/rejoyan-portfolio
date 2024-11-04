import { LetterPullup } from "@/components/ui/LetterPullUp";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FcReading } from "react-icons/fc";
import { IoMdBicycle } from "react-icons/io";
import { IoAirplane, IoLeaf } from "react-icons/io5";

export default function Experience() {
  const qualifications = [
    {
      id: 1,
      title: "Higher Secondary School Certificate",
      year: "2017-2019",
      institution: "Govt. Azizul Haque College",
      board: "Rajshahi",
      location: "Bogra, Bangladesh",
    },
    {
      id: 2,
      title: "BSC in Electrical and Electronic Engineering",
      year: "2019-2025",
      institution: "Shahjalal University of Science and Technology",
      board: "Sylhet",
      location: "Sylhet, Bangladesh",
    },
  ];

  const hobbies = [
    {
      id: 1,
      title: "Reading Books",
      icon: <FcReading className="text-3xl" />,
    },
    {
      id: 2,
      title: "Cycling",
      icon: <IoMdBicycle className="text-3xl" />,
    },
    {
      id: 3,
      title: "Travelling",
      icon: <IoAirplane className="text-3xl" />,
    },
    {
      id: 4,
      title: "Gardening",
      icon: <IoLeaf className="text-3xl" />,
    },
    {
      id: 4,
      title: "Watching Movies",
      icon: <BiSolidMoviePlay className="text-3xl" />,
    },
  ];

  return (
    <div className="pt-10 pb-12 px-3 sm:px-4">
      {/* educational qualification */}
      <div>
        <h1 className="text-center  text-text-root font-incognito font-semibold tracking-tight sm:text-4xl text-2xl mb-5 sm:mb-6 lg:leading-[3.7rem]">
          <LetterPullup words={"Educational Qualification"} delay={0.1} />
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {qualifications.map((qualification) => (
            <div
              key={qualification.id}
              className="p-6 border rounded-md  flex justify-between gap-6  items-center"
            >
              <span>
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
              </span>
              <div className="flex-1 space-y-1">
                <h2 className="text-text-primary text-3xl font-semibold ">
                  {qualification.title}
                </h2>

                <p className="text-text-secondary text-2xl font-medium">
                  {qualification.institution}
                </p>
                <p className="text-text-secondary text-xl font-medium">
                  {qualification.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Hobbies */}
      <div className="mt-10">
        <h1 className="text-center  text-text-root font-incognito font-semibold tracking-tight sm:text-4xl text-2xl mb-5 sm:mb-6 lg:leading-[3.7rem]">
          <LetterPullup words={"Hobbies"} delay={0.1} />
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {hobbies.map((hobby) => (
            <div
              key={hobby.id}
              className="p-6 border rounded-md  flex justify-between gap-6  items-center"
            >
              <span>{hobby.icon}</span>
              <div className="flex-1 space-y-1">
                <h2 className="text-text-primary text-3xl font-semibold ">
                  {hobby.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
