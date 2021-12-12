import * as React from "react";
import Image from "next/image";
import { Wrapper } from "./wrapper";
import Link from "next/link";

// type Props = {
//   children?: React.ReactNode;
// };

export const Header = () => {
  const [open, setOpen] = React.useState(false);

  const activeClass = "hover:underline hover:text-brand300";

  return (
    <header className="py-4">
      <Wrapper>
        <div className="flex items-center justify-between">
          <Link href="/" passHref>
            <a className="w-[140px] h-[42px] relative inline-block">
              <Image src="/logo.svg" layout="fill" alt="logo na praia" />
            </a>
          </Link>
          <div
            className="lg:hidden"
            onClick={() => {
              setOpen((prevCheck) => !prevCheck);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <div
            className={`${
              open ? "grid" : "hidden"
            } bg-[#fff] shadow-lg lg:shadow-none z-20 p-16 lg:p-0 absolute top-[74px] left-0 w-full lg:w-auto lg:top-0 lg:relative text-gray lg:grid grid-flow-row lg:grid-flow-col gap-12`}
          >
            <button className={`${activeClass}`}>Home</button>
            <button className={`${activeClass}`}>Na Praia</button>
            <button className={`${activeClass}`}>Vendedores</button>
            <button className={`${activeClass}`}>Download</button>
            <button className={`${activeClass}`}>Contato</button>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};
