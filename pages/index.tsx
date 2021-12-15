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
        <meta
          name="description"
          content="Agora ficou fácil curtir um dia de sol no luga favorito do brasileiro. Vem curtir NaPraia!"
        />
        <meta
          name="keywords"
          content="app, praia, comida, digital, pix, ambulante, vendedor, entrega, bebida, refrigerante, cerveja"
        />
        <meta
          property="og:title"
          content="Na Praia | A praia agora é digital!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.napraia.app" />
        <meta
          property="og:description"
          content="Agora ficou fácil curtir um dia de sol no luga favorito do brasileiro. Vem curtir NaPraia!"
        />
        <meta property="og:site_name" content="Na Praia " />
        {/* <meta property="og:image" content="/hero.png"></meta> */}
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
