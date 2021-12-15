import Head from "next/head";
import React from "react";
import { Header } from "../src/components/header";
import { Hero } from "../src/components/hero";
import { Wrapper } from "../src/components/wrapper";
import { AppDownload } from "../src/components/app-download";
import { AboutApp } from "../src/components/about-app";
import { Contact } from "../src/components/contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Na Praia | A praia agora é digital!</title>
        <meta name="title" content="Na Praia | A praia agora é digital!" />
        <meta
          name="description"
          content="Agora ficou fácil curtir um dia de sol no lugar favorito do brasileiro. Vem curtir NaPraia!"
        />

        {/* <meta property="og:type" content="article" />
        <meta property="og:url" content="https://napraia.app/" /> */}
        {/* <meta
          property="og:title"
          content="Na Praia | A praia agora é digital!"
        />
        <meta
          property="og:description"
          content="Agora ficou fácil curtir um dia de sol no luga favorito do brasileiro. Vem curtir NaPraia!"
        /> */}
        {/* <meta property="og:image" content="https://www.napraia.app/cover.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://napraia.app/" />
        <meta
          property="twitter:title"
          content="Na Praia | A praia agora é digital!"
        />
        <meta
          property="twitter:description"
          content="Agora ficou fácil curtir um dia de sol no luga favorito do brasileiro. Vem curtir NaPraia!"
        />
        <meta
          property="twitter:image"
          content="https://www.napraia.app/cover.jpg"
        /> */}
      </Head>
      <Wrapper>
        <Hero />
        <AboutApp />
        <Contact />
      </Wrapper>
      <AppDownload />
    </>
  );
}
