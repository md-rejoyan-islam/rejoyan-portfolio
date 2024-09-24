"use client";
import { RiMenu3Line } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import ThemeSwitch from "../theme/ThemeSwitch";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { animate, stagger, motion, useAnimate } from "framer-motion";

export default function Navbar() {
  // mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileRef = useRef(null);

  // handle mobile menu
  const handleMobileMenu = () => {
    const data = document.querySelector(".index-module_type__E-SaG");
    if (!isMobileMenuOpen) {
      document.body.style.minHeight = "100vh";
      document.body.style.overflow = "hidden";
      // data.style.display = "none";
    } else {
      document.body.style.minHeight = "auto";
      document.body.style.overflow = "auto";
      // data.style.display = "block";
    }
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Blogs",
      href: "/blogs",
    },
    {
      name: "Experience",
      href: "/experience",
    },
    {
      name: "Work",
      href: "/work",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Resume",
      href: "/resume",
    },
  ];

  // pathname
  // const router = useRouter();
  const pathname = usePathname();

  const [scope, animate] = useAnimate();
  const staggerList = stagger(0.1, { startDelay: 0 });

  // when page load li item show one by one with style
  useEffect(() => {
    animate(
      "li",
      { opacity: 1, scale: 1, x: 0 },
      {
        duration: 0.2,
        delay: staggerList,
      }
    );
  }, [staggerList, animate]);

  return (
    <header
      className={`text-text-secondary h-[70px] max-container mx-auto   px-4 `}
    >
      <div
        className="flex items-center justify-between  mx-auto h-full"
        id="up-btn"
      >
        <div className="">
          {/* for medium and large screens  */}
          <nav>
            <ul
              className="hidden md:flex  gap-10 justify-center items-center"
              ref={scope}
            >
              {links.map((link, index) => (
                <motion.li
                  className={`${
                    pathname === link.href ? "text-text-root" : ""
                  } hover:text-text-root group`}
                  key={index}
                  style={{ opacity: 0, scale: 0.3, x: -50 }}
                >
                  <div className="relative overflow-hidden inline-block py-1 px-0">
                    <Link href={link.href} className="relative z-10">
                      {link.name}
                    </Link>
                    <div className="absolute inset-0 border-b-2 border-button transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </nav>

          <button className="md:hidden" onClick={handleMobileMenu}>
            <RiMenu3Line className="text-3xl border-zinc-700 rounded-md border p-[5px] bg-[#24223f47]" />
          </button>
          {/* for small screens   */}
          {isMobileMenuOpen && (
            <nav
              className="absolute top-0 left-0 min-h-screen w-full bg-[#22c55e1e] z-[1000] flex justify-end  backdrop-blur-[3px] "
              onClick={() => {
                !mobileRef.current?.contains(event.target) &&
                  handleMobileMenu();
              }}
            >
              <ul
                className="flex md:hidden px-6 flex-col gap-5 items-center justify-start w-[250px] bg-[#24223f]"
                ref={mobileRef}
              >
                <li className="my-6 text-right w-full text-xl">
                  <button onClick={handleMobileMenu}>X</button>
                </li>
                {links.map((link, index) => (
                  <li className="hover:text-[#64ffda]" key={index}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
        <ThemeSwitch />
      </div>
    </header>
  );
}
