import * as React from "react";
import Image from "next/image";

// type Props = {
//   children?: React.ReactNode;
// };

export const Hero = () => (
  <div className="mt-12 md:mt-20 mb-16 md:mb-32 grid md:grid-cols-2 items-center">
    <div className="mb-10">
      <h1 className="text-5xl lg:text-7xl leading-[0.9] text-[#2E2E2E] tracking-[-2px] md:tracking-[-4px] font-bold whitespace-nowrap mb-5">
        A praia agora <br />é <span className="text-accent300">digital!</span>
      </h1>

      <h1 className="text-gray text-lg mb-6">
        Agora ficou fácil curtir um dia de sol no lugar{" "}
        <br className="hidden md:inline-block" />
        favorito do brasileiro. Vem curtir NaPraia!
      </h1>

      <div className="mb-6 flex flex-row">
        <a
          href=""
          // rel="noreferrer"
          // href="https://apps.apple.com/br/app/napraia-app/id1597507726"
          // target="_blank"
          className="inline-block max-w-[175px] mr-5"
        >
          <Image
            src="/images/app-store.png"
            width="175"
            height="48"
            layout="intrinsic"
            alt="app store"
            className=""
          />
        </a>
        <a
          rel="noreferrer"
          href="https://play.google.com/store/apps/details?id=com.na.praia&hl=pt&gl=BR"
          target="_blank"
          className="inline-block max-w-[175px]"
        >
          <Image
            src="/images/google-play.png"
            layout="intrinsic"
            width="175"
            height="48"
            alt="app store"
          />
        </a>
      </div>

      <div className="flex justify-center md:inline-flex relative bg-brand300 py-4 px-8 items-center  rounded-full text-white">
        <Image
          src="/images/sun.svg"
          layout="fixed"
          width="24"
          height="24"
          alt="app store"
        />
        <span className="ml-3">Vamos NaPraia!</span>
      </div>
    </div>
    <div className="relative overflow-hidden">
      <div className="relative max-w-[602px] max-h-[512px] overflow-hidden z-10 m-auto">
        <Image
          src="/hero.png"
          layout="responsive"
          alt="hero"
          objectFit="contain"
          width="301"
          height="256"
        />
      </div>
    </div>
  </div>
);
