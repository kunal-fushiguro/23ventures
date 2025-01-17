"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { motion } from "motion/react";
import { useState } from "react";

const links = [
  {
    text: "Process",
    link: "/process",
  },
  {
    text: "Culture",
    link: "/culture",
  },
  { text: "Niches", link: "/niches" },
];

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="fixed top-0 w-screen h-[15vh] md:h-[10vh] flex justify-center items-center z-50">
        <div className=" boxesbg h-full w-[90%] rounded-b-3xl flex justify-evenly md:justify-between md:px-20 items-center gap-4">
          <Link href={"/"} className="h-16 w-16 rounded-full overflow-hidden">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={10000}
              height={1000}
              className="object-fill "
            />
          </Link>

          <span className="md:flex justify-center items-center gap-8 hidden">
            {links.map(({ link, text }, index) => {
              return (
                <Link href={link} key={index} className="text-xl">
                  {text}
                </Link>
              );
            })}
            <Button
              onClickUrl="https://docs.google.com/forms/d/1_uPNNuA10z2IBRlKzUHAmQwjoyDEjpCYHDt_t-IWKzQ/edit"
              text="Apply"
            />
          </span>

          <span
            className={`md:hidden rounded-3xl w-36 h-14 flex justify-center items-center font-bold text-xl ${
              open ? "bg-white text-black" : "bg-[#828282]"
            }`}
            onClick={() => {
              setOpen((perv) => !perv);
            }}
          >
            {open ? "Close" : "Menu"}
          </span>
        </div>
        <motion.div
          className={`${
            open ? "absolute" : "hidden"
          } md:hidden bg-[#272727] h-auto rounded-xl py-14 flex justify-center items-center flex-col gap-4 z-50 mt-[17vh] top-0 w-[50vh] `}
          initial={{ opacity: 0, y: -20 }}
          animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {links.map(({ link, text }, index) => {
            return (
              <Link href={link} key={index} className="text-xl">
                {text}
              </Link>
            );
          })}
          <Button
            onClickUrl="https://docs.google.com/forms/d/1_uPNNuA10z2IBRlKzUHAmQwjoyDEjpCYHDt_t-IWKzQ/edit"
            text="Apply"
          />
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
