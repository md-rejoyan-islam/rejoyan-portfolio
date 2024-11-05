import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Contact() {
  return (
    <div className="pt-10 pb-12 px-3 sm:px-4 relative">
      <h1 className="text-2xl text-center ">
        Contact <span className="text-primary">Me</span>
      </h1>
      <div className="py-4 col-span-2 h-fit ">
        <h3 className="py-2 text-xl text-text-primary font-semibold">
          What is your plan ? Call me
        </h3>
        <div className="py-2">
          <p className="text-text-secondary">
            If you have any question or need help, please feel free to contact
            me.
          </p>
        </div>
        <div className="py-2">
          <Link
            href={"tel:+8801568-816822"}
            className="text-text-secondary flex items-center gap-3"
          >
            <span>
              <FaPhone className="text-button text-lg" />
            </span>{" "}
            +8801568-816822
          </Link>
        </div>
        <div className="py-2 ">
          <p className="text-text-secondary flex items-center gap-3 ">
            <MdOutlineMailOutline className="text-button text-2xl" />
            <Link href="mailto:rejoyanislam0014@gmail.com" className="">
              rejoyanislam0014@gmail.com
            </Link>
          </p>
        </div>
        <div className="py-2">
          <p className="text-text-secondary flex items-center gap-3">
            <FaMapLocationDot className="text-button text-2xl" />
            Sylhet, Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
}
