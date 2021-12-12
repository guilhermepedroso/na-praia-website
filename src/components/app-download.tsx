import * as React from "react";
import Image from "next/image";
import { Wrapper } from "./wrapper";

// type Props = {
//   children?: React.ReactNode;
// };

export const AppDownload = () => (
  <div className="bg-brand300/10">
    <Wrapper>
      <div className="mt-12 md:mt-24 grid md:grid-cols-2 items-center pt-10">
        <div className="mb-10">
          <div className="text-brand300 mb-6">Baixe agora!</div>
          <h1 className="text-3xl lg:text-5xl text-[#2E2E2E] tracking-[-1px] md:tracking-[-4px] font-bold md:whitespace-nowrap mb-5">
            Baixe o APP e curta essa <br className="hidden md:inline-block" />
            nova experiência <span className="text-brand300">NaPraia!</span>
          </h1>

          <h2 className="text-gray text-lg mb-6">
            Você com o pé na areia e o celular na mão, comprando uma cervejinha,
            mate, picolé, biscoito Globo e muito mais! Baixe o APP{" "}
            <b>NaPraia! </b>
          </h2>

          <div className="mb-6 flex flex-row">
            <a href="" className="inline-block max-w-[175px] mr-5">
              <Image
                src="/images/app-store.png"
                width="175"
                height="48"
                layout="intrinsic"
                alt="app store"
                className=""
              />
            </a>
            <a href="" className="inline-block max-w-[175px]">
              <Image
                src="/images/google-play.png"
                layout="intrinsic"
                width="175"
                height="48"
                alt="app store"
              />
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="relative max-w-[602px] max-h-[512px] overflow-hidden z-10">
            <Image
              src="/images/app-download.png"
              layout="responsive"
              alt="hero"
              objectFit="contain"
              width="301"
              height="256"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  </div>
);
