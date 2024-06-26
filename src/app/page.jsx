"use client";
import Image from "next/image";
import React from "react";
import { heroBlob, trace } from "../assets/index.js";
import Skills from "@/components/Skills.jsx";
import { TypeAnimation } from "react-type-animation";
import Head from "next/head.js";
import About from "@/components/About.jsx";

const page = () => {
  return (
    <>
      <Head>
        <meta name="monetag" content="532f8fc8fe11763df80b74528b91551d" />
      </Head>
      <div className="scroller">
        <section className="h-screen w-full relative py-20">
          <div className="w-full max-h-screen -top-0 absolute -z-20 right-0 h-screen">
            <Image
              src={heroBlob}
              alt="Hero_Section"
              className="w-full object-contain"
            />
          </div>
          <div className="min-h-screen flex flex-col justify-center items-center bg-center bg-no-repeat bg-opacity-5 bg-fixed bg-cover">
            <Image src={trace} alt="trace" />
            <h1 className="text-balck text-2xl sm:text-6xl">
              <TypeAnimation
                sequence={[
                  "I am Surendra Singh Kamboj.",
                  1000,
                  "I'm a MERN stack web Developer.",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </h1>
          </div>
        </section>

        <Skills />

        <About />
      </div>
    </>
  );
};

export default page;
