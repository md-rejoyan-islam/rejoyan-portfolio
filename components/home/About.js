import Image from "next/image";
import photo from "./../../app/public/images/rejoyan.jpeg";

export default function About() {
  return (
    <section className="py-10">
      <h2 className="font-incognito text-text-root text-4xl font-semibold tracking-tight">
        About Me
      </h2>
      <div className="pt-4">
        <div className=" grid grid-cols-1 lg:grid-cols-5 lg:gap-40 gap-20  text-[#8892b0] justify-items-center ">
          <div className="flex-1 space-y-6 grow lg:col-span-3">
            <p>
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </p>
            <p>
              I also recently launched a course that covers everything you need
              to build a web app with the{" "}
              <span className="text-[#64ffda] ">Spotify API</span> using Node &
              React.
            </p>
          </div>
          <div className="flex-1  lg:col-span-2 px-6 max-w-[400px]">
            <figure className="relative" id="imgFigure">
              <Image
                src={photo}
                alt="Md. Rejoyan Islam"
                height={"400"}
                width={"400"}
                className=" rounded-md  mix-blend-multiple -translate-x-3 -translate-y-3  "
              />
              <div className="w-full h-full absolute top-0 rounded-md  border-red-400 border-2 -z-10 "></div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
