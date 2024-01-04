"use client";
// import Image from "next/image";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOndemandVideo, MdOutlineWhatsapp } from "react-icons/md";
import { BiChat } from "react-icons/bi";
import { siteData } from "./data";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const nextSlide = () => {
    console.log(currentSlide);

    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
    console.log("prev slide");
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    console.log("goto slide", index);
  };

  return (
    <main className="">
      {siteData.map((item, index) => (
        <div key={index}>
          <section
            className="relative lg:h-[90vh] h-[35vh] flex items-end"
            id="heroSection"
          >
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
            <div className="container mx-auto z-20 text-left mb-8 lg:px-20 px-4">
              <h2 className="lg:text-3xl text-white mb-4">
                {item.instructor.name}
              </h2>
              <h1 className="text-xl lg:text-6xl font-roboto-serif font-semibold tracking-wide text-white leading-tight lg:w-[60vw] w-[70vw]">
                {item.course.title}
              </h1>
            </div>
          </section>
          <section className="px-4 lg:px-20 flex relative" id="tabSection">
            <ul className="flex lg:gap-4 lg:text-2xl lg:w-[60vw] w-full justify-between lg:justify-start">
              <li
                onClick={() => handleClick("aboutCourseSection")}
                className="border-b-4 p-4 border-purple-800 cursor-pointer"
              >
                ABOUT
              </li>
              <li
                onClick={() => handleClick("aboutInstructor")}
                className="p-4 hover:border-purple-800 hover:border-b-4 cursor-pointer"
              >
                INSTRUCTOR
              </li>
              <li
                onClick={() => handleClick("testimonial")}
                className="p-4 hover:border-purple-800 hover:border-b-4 cursor-pointer"
              >
                REVIEWS
              </li>
            </ul>
            <div className="hidden absolute lg:flex flex-col gap-2  right-20 -top-10 bg-purple-100 rounded-md p-6">
              <h2 className="font-bold text-2xl">Course fees</h2>
              <h1 className="font-extrabold font-roboto-serif text-5xl">
                ₹5,000
              </h1>
              <h2 className="font-semibold text-2xl">What's included:</h2>
              <div className="flex items-center gap-2">
                <MdOndemandVideo />
                <h3>
                  {item.course.inclusions.on_demand_videos} on-demand
                  videos
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <MdOndemandVideo />
                <h3>
                  {item.course.inclusions.live_stream_sessions} live stream
                  sessions
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <BiChat />
                <h3>Live Q&A sessions with Nityanand Charan Das</h3>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineWhatsapp />
                <h3>An active whatsapp community</h3>
              </div>
              <button className=" bg-purple-800 text-white font-semibold rounded-full text-center w-full p-2 mt-4">
                Register today
              </button>
            </div>
            {/* <button className="lg:hidden fixed flex justify-between bottom-0 left-0 bg-purple-800 text-white font-semibold rounded-full text-center w-full p-2 mt-4">
              <span>Register today</span>
              <span>₹5,000</span>
            </button> */}
          </section>
          <section
            className="px-4 lg:px-20 mt-10 lg:w-[60vw]"
            id="aboutCourseSection"
          >
            <h1 className="text-4xl font-roboto-serif lg:text-5xl font-bold">
              About the course
            </h1>
            <p className="mt-10 text-2xl leading-normal ">
              {item.course.about.html_content}
            </p>
            <p className="mt-10 text-2xl leading-normal ">
              {item.course.about.html_content}
            </p>
            <h1 className="text-4xl font-roboto-serif mt-10 lg:text-5xl font-bold">
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

            <h1 className="text-4xl font-roboto-serif mt-10 lg:text-5xl font-bold">
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
          <div className="lg:hidden  flex flex-col gap-2 bg-purple-100 rounded-md p-6 m-4 mt-10">
            <h2 className="font-bold text-2xl">Course fees</h2>
            <h1 className="font-extrabold font-roboto-serif text-5xl">
              ₹5,000
            </h1>
            <h2 className="font-semibold text-2xl">What's included:</h2>
            <div className="flex items-center gap-2 text-lg">
              <MdOndemandVideo />
              <h3>
                {item.course.inclusions.on_demand_videos} on-demand videos
              </h3>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <MdOndemandVideo />
              <h3>
                {item.course.inclusions.live_stream_sessions} live stream
                sessions
              </h3>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <BiChat />
              <h3>Live Q&A sessions with Nityanand Charan Das</h3>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <MdOutlineWhatsapp />
              <h3>An active whatsapp community</h3>
            </div>
            <button className=" bg-purple-800 text-white font-semibold rounded-full text-center text-xl w-full p-4 mt-4">
              Register today
            </button>
          </div>
          <section
            className="px-4 lg:px-20 mt-10 flex flex-col gap-10"
            id="aboutInstructor"
          >
            <h1 className="text-4xl font-roboto-serif text-center lg:text-left lg:text-5xl font-bold">
              About the Instructor
            </h1>
            <div className="flex lg:flex-row flex-col items-center gap-4">
              <img
                className="rounded-full lg:w-60 w-40"
                src="/NITYANAND CHARAN DAS_profile_pic.jpg"
              />
              {item.about_instructor.html_content.map((item, index) => (
                <div key={index}>
                  <p className="text-2xl text-center lg:text-left">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex lg:justify-around justify-between">
              {item.instructor.social_media.map((item, index) => (
                <a
                  href={item.link}
                  key={index}
                  className="flex lg:flex-row flex-col items-center gap-2 cursor-pointer"
                >
                  <img className="h-[24px] w-[24px]" src={item.icon} />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </section>
          <section
            className="relative lg:h-[60vh] h-[50vh] mt-10 bg-slate-200 flex flex-col gap-8 p-10 items-center justify-center overflow-hidden "
            id="testimonial"
          >
            {" "}
            {item.testimonial.map((item, index) => (
              <div
                key={index}
                className={`w-full transition-transform flex flex-col items-center gap-10 transform min-w-fit ${
                  index === currentSlide
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0 -z-20 absolute "
                }`}
              >
                <div className="flex items-center justify-center w-[70vw] text-center ">
                  <h1 className="text-2xl font-roboto-serif lg:text-4xl font-bold">
                    "{item.text}"
                  </h1>
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
            <div className="absolute flex justify-between w-full px-4 lg:px-20 z-20">
              <span
                onClick={prevSlide}
                className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-300 hover:bg-slate-400 cursor-pointer"
              >
                <IoIosArrowBack />
              </span>
              <span
                onClick={nextSlide}
                className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-300 hover:bg-slate-400 cursor-pointer"
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
