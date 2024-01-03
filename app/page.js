"use client";
// import Image from "next/image";

import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { siteData } from "./data";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    console.log("next slide");

    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
    console.log("prev slide");
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    console.log("goto slide");
  };

  return (
    <main className="">
      {siteData.map((item, index) => (
        <div key={index}>
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
                {item.instructor.name}
              </h1>
              <p className="text-4xl lg:text-6xl font-semibold text-white leading-tight w-[60vw]">
                {item.course.title}
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
              major themes. It covers mastering thoughts and emotions for
              inner peace (Mind Control), setting realistic goals and
              maintaining life balance (Managing Expectations), resolving
              conflicts with empathy and ethical principles (Conflict
              Resolution), and managing negative feelings while cultivating
              positivity (Controlling Negative Emotions). The course
              includes interactive sessions, reflective exercises, and
              discussions, making the Gita's teachings applicable to
              contemporary life.
            </p>
            <h1 className="text-4xl mt-10 lg:text-5xl font-bold">
              What to expect from the course
            </h1>
            <ul className="mt-10 text-2xl leading-normal ml-10">
              {item.course.what_to_expect.html_content.map(
                (item, index) => (
                  <li key={index} style={{ listStyleType: "square" }}>
                    {item}
                  </li>
                )
              )}
            </ul>

            <h1 className="text-4xl mt-10 lg:text-5xl font-bold">
              Key topics covered
            </h1>
            <div className="mt-10 text-2xl leading-normal ">
              Learn Key Life lessons from the Gita: Mind Control, Managing
              Exdivectations, Conflict Resolution and Controlling Negative
              Emotions
              <ul className="ml-10">
                {item.course.key_topics.html_content.map(
                  (courseTopics, index) => (
                    <li key={index} style={{ listStyleType: "square" }}>
                      <span className="font-bold">
                        {courseTopics.heading}{" "}
                      </span>
                      {courseTopics.content}
                    </li>
                  )
                )}
              </ul>
            </div>
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
              {item.about_instructor.html_content.map((item, index) => (
                <div key={index}>
                  <p className="text-2xl">{item}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-around">
              {item.instructor.social_media.map((item, index) => (
                <a
                  href={item.link}
                  key={index}
                  className="flex gap-2 cursor-pointer"
                >
                  <img src={item.icon} />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </section>
          <section className="relative mt-10 bg-slate-300 flex flex-col gap-8 p-10 items-center justify-center overflow-hidden">
            {" "}
            {item.testimonial.map((item, index) => (
              <div
                key={index}
                className={`w-full transition-transform transform ${
                  index === currentSlide
                    ? "translate-x-0"
                    : "translate-x-full"
                }`}
              >
                <div className="flex items-center justify-center px-48 text-center ">
                  <p className="text-4xl font-bold">"{item.text}"</p>
                </div>
                <div className="flex gap-4 items-center">
                  <img
                    className="h-12 rounded-full"
                    src={item.reviewer_pic}
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold">
                      {item.reviewer_name}
                    </span>
                    <span>{item.reviewer_designation}</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-center items-center gap-1">
              {item.testimonial.map((_, index) => (
                <div
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`bg-slate-500 rounded-full h-2 w-2 cursor-pointer ${
                    index === currentSlide ? "w-6" : ""
                  }`}
                ></div>
              ))}
            </div>
            <div className="absolute flex justify-between w-full px-20 z-20">
              <span
                onClick={() => console.log("prev slide clicked")}
                className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-400 cursor-pointer"
              >
                <IoIosArrowBack />
              </span>
              <span
                onClick={nextSlide}
                className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-400 cursor-pointer"
              >
                <IoIosArrowForward />
              </span>
            </div>
          </section>
        </div>
      ))}
    </main>
  );
}
