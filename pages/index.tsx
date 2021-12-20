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
          content="Seu APP favorito para delivery na praia!"
        />
      </Head>
      <Wrapper>
        <Hero />
        <AboutApp />
        <Contact />
      </Wrapper>
    </>
  );
}
