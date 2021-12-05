import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Wrapper } from "../src/components/wrapper";

export default function Home() {
  return (
    <>
      <Head>
        <title>Na Praia | A praia na sua mão!</title>
      </Head>
      <div className="flex flex-col justify-between h-full">
        <header className="py-4">
          <Wrapper>
            <div className="w-[140px] h-[42px] relative">
              <Image src="/logo.svg" layout="fill" alt="logo na praia" />
            </div>

            <div className="mt-24 grid md:grid-cols-2 items-center">
              <div className="mb-10">
                {/* <div className="relative inline-flex items-center mb-12 py-4 pl-6 pr-14 text-brand300 bg-brand300 rounded-full bg-opacity-20 font-extralight">
                App Na Praia{" "}
                <span className="absolute right-6 top-[30px] ml-4 text-[22px] leading-[0]">
                  📱
                </span>
              </div> */}
                <h1 className="text-7xl lg:text-8xl leading-[0.9] tracking-[-4px] font-bold whitespace-nowrap mb-8">
                  A praia na <br />
                  sua <span className="text-accent300">mão!</span>
                </h1>

                <div className="inline-block py-4 px-6 bg-brand300  text-white rounded-full  font-extralight">
                  Em breve!
                </div>
              </div>
              <div className="relative overflow-hidden">
                <div className="relative max-w-[602px] max-h-[512px] overflow-hidden z-10">
                  <Image
                    src="/hero.png"
                    layout="responsive"
                    alt="hero"
                    objectFit="contain"
                    width="301"
                    height="256"
                  />
                </div>
                <div className="absolute bottom-0 left-0 md:left-auto">
                  <Image
                    src="/icons/dots-hero.svg"
                    layout="fixed"
                    alt="logo na praia"
                    width="548"
                    height="351"
                  />
                </div>
              </div>
            </div>
          </Wrapper>
        </header>
        <footer className="text-center p-4">contato@napraiaapp.com</footer>
      </div>
    </>
  );
}
