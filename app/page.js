// "use client";
// import Image from "next/image";

// import { useEffect, useState } from "react";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const data = JSON.parse(file);

  console.log(file);

  return (
    <main className="">
      <section className="relative h-[90vh] flex items-end">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover z-0"
          // style={{ backgroundImage: 'url("/NITYANAND CHARAN DAS.jpg")' }}
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url("/NITYANAND CHARAN DAS.jpg")',
          }}
        ></div>

        {/* Overlay for Image */}
        {/* <div className="absolute inset-0 bg-black opacity-50 z-10 "></div> */}

        {/* Content */}
        <div className="container mx-auto z-20 text-left mb-8 px-20">
          <h1 className="text-xl lg:text-3xl text-white mb-4">
            {data.instructor.name}
          </h1>
          <p className="text-4xl lg:text-6xl font-semibold text-white leading-tight w-[60vw]">
            {data.course.title}
          </p>
        </div>
      </section>
      <section className="lg:px-20 w-[60vw]">
        <ul className="flex lg:gap-4 text-2xl">
          <li className="border-b-4 p-4 border-purple-800">ABOUT</li>
          <li className="p-4">INSTRUCTOR</li>
          <li className="p-4">REVIEWS</li>
        </ul>
      </section>
      <section className="lg:px-20 mt-10 w-[60vw]">
        <h1 className="text-4xl lg:text-5xl font-bold">
          About the course
        </h1>
        <p className="mt-10 text-2xl leading-normal ">
          This course distills wisdom from the Bhagavad Gita into four
          major themes. It covers mastering thoughts and emotions for inner
          peace (Mind Control), setting realistic goals and maintaining
          life balance (Managing Expectations), resolving conflicts with
          empathy and ethical principles (Conflict Resolution), and
          managing negative feelings while cultivating positivity
          (Controlling Negative Emotions). The course includes interactive
          sessions, reflective exercises, and discussions, making the
          Gita's teachings applicable to contemporary life.
        </p>
        <h1 className="text-4xl mt-10 lg:text-5xl font-bold">
          What to expect from the course
        </h1>
        <ol className="mt-10 text-2xl leading-normal ml-10">
          <li style={{ listStyleType: "square" }}>
            Learn to manage your relationships{" "}
          </li>
          <li style={{ listStyleType: "square" }}>Better communication</li>
          <li style={{ listStyleType: "square" }}>Time management</li>
          <li style={{ listStyleType: "square" }}>Forgiveness</li>
        </ol>

        <h1 className="text-4xl mt-10 lg:text-5xl font-bold">
          Key topics covered
        </h1>
        <p className="mt-10 text-2xl leading-normal ">
          Learn Key Life lessons from the Gita: Mind Control, Managing
          Expectations, Conflict Resolution and Controlling Negative
          Emotions
          <ul className="ml-10">
            <li style={{ listStyleType: "square" }}>
              <span className="font-bold">
                10 written and audio sessions
              </span>{" "}
              guide you in decoding the language of numbers so that you can
              easily receive their signs and messages.
            </li>
            <li style={{ listStyleType: "square" }}>
              <span className="font-bold">
                Intuitive exersises and homework
              </span>{" "}
              walk you through the energies and and values of numbers and
              number sequences so you can become your own authority.
            </li>
            <li style={{ listStyleType: "square" }}>
              <span className="font-bold">A handy reference</span> to
              numeric meanings so you can uncover your soul's gifts,
              challenges, lessons, and purpose - and receive spiritual
              guidance along your path.
            </li>
            <li style={{ listStyleType: "square" }}>
              <span className="font-bold">Expert techniques</span> for
              manifestation offer simple ways to use numbers to co-create
              with the universe.
            </li>
          </ul>
        </p>
      </section>
      <section className="lg:px-20 mt-10 flex flex-col gap-10">
        <h1 className="text-4xl lg:text-5xl font-bold">
          About the Instructor
        </h1>
        <div className="lg:flex gap-4">
          <img
            className="rounded-full h-60"
            src="/NITYANAND CHARAN DAS_profile_pic.jpg"
          />
          <div>
            <p className="text-2xl">
              Lorem ipsum text about the instructor's background and
              philosophy. Lorem ipsum text about the instructor's
              background and philosophy. Lorem ipsum text about the
              instructor's background and philosophy.
            </p>
          </div>
          <div>
            <p className="text-2xl">
              Lorem ipsum text about the instructor's background and
              philosophy. Lorem ipsum text about the instructor's
              background and philosophy. Lorem ipsum text about the
              instructor's background and philosophy.
            </p>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex gap-2">
            <img src="/facebook.svg" />
            <span>Facebook</span>
          </div>
          <div className="flex gap-2">
            <img src="/twitter.svg" />
            <span>Facebook</span>
          </div>
          <div className="flex gap-2">
            <img src="/facebook.svg" />
            <span>Facebook</span>
          </div>
          <div className="flex gap-2">
            <img src="/instagram.svg" />
            <span>Facebook</span>
          </div>
        </div>
      </section>
      <section className="relative mt-10 bg-slate-300 flex flex-col gap-8 p-10 items-center justify-center">
        {" "}
        <div className="flex items-center justify-center px-48 text-center ">
          <p className="text-4xl font-bold">{data.testimonial.text}</p>
        </div>
        <div className="flex gap-4 items-center">
          <img
            className="h-12 rounded-full"
            src="/NITYANAND CHARAN DAS_profile_pic.jpg"
          />
          <div className="flex flex-col">
            <span className="font-semibold">
              {data.testimonial.reviewer_name}
            </span>
            <span>{data.testimonial.reviewer_designation}</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <span className="bg-slate-500 rounded-full h-2 w-2"></span>
          <span className="bg-slate-500 rounded-full h-2 w-2"></span>
          <span className="bg-slate-500 rounded-full h-2 w-6"></span>
        </div>
        <div className="absolute flex justify-between w-full px-20">
          <span className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-400">
            {"<"}
          </span>
          <span className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-400">
            {">"}
          </span>
        </div>
      </section>
      {/* <div>{data.testimonial.text}</div> */}
    </main>
  );
}
