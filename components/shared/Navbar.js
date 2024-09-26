"use client";
import { RiMenu3Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import ThemeSwitch from "../theme/ThemeSwitch";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { stagger, motion, useAnimate } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
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
      name: "Contact",
      href: "/contact",
    },
  ];

  const pathname = usePathname();

  const [scope, animate] = useAnimate();
  const staggerList = stagger(0.1, { startDelay: 0 });

  const [openModal, setOpenModal] = useState(false);

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
      className={`text-text-secondary h-[70px] max-container mx-auto    px-4 `}
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

          <Sheet onOpenChange={setOpenModal} open={openModal}>
            <SheetTrigger className="md:hidden">
              <RiMenu3Line className="text-3xl border-zinc-700 rounded-md border p-[5px] bg-[#24223f47]" />
            </SheetTrigger>
            <SheetContent
              className="z-[1000] border-project-card-bg-secondary text-secondary dark:text-text-secondary md:hidden sm:max-w-[325px]  max-w-[50vw] min-w-[250px] bg-[#11082582]  backdrop-blur-[3px] "
              side={"left"}
            >
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>

              <nav className=" pt-6  w-full h-full  flex justify-center   ">
                <ul className="flex md:hidden px-6 flex-col gap-12 items-center justify-start  ">
                  {links.map((link, index) => (
                    <li
                      className="hover:text-[#64ffda]"
                      key={index}
                      onClick={() => {
                        setOpenModal(false);
                      }}
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <ThemeSwitch />
      </div>
    </header>
  );
}
