import * as React from "react";
import Image from "next/image";
import { Wrapper } from "./wrapper";
import Link from "next/link";

// type Props = {
//   children?: React.ReactNode;
// };

export const Header = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      document.querySelector("body")!.addEventListener("click", (e: any) => {
        const hasDataTarget = e.target.getAttribute("data-target");
        if (!!hasDataTarget) {
          const target = document.querySelector(hasDataTarget);
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 20,
              behavior: "smooth",
            });
          }
        }
      });
    }
  }, []);

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
            {nav.map((i) => (
              <button
                key={i.name}
                data-target={i.dataTarget}
                className={`${activeClass}`}
                onClick={() => {
                  setOpen((prevCheck) =>
                    !!prevCheck ? !prevCheck : prevCheck
                  );
                }}
              >
                {i.name}
              </button>
            ))}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

const nav = [
  // {
  //   name: "Home",
  //   dataTarget: "",
  // },
  {
    name: "Na Praia",
    dataTarget: "#about",
  },
  {
    name: "Vendedores",
    dataTarget: "#contato",
  },
  {
    name: "Contato",
    dataTarget: "#contato",
  },
];
