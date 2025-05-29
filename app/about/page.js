"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { FiUsers, FiTrendingUp, FiCheckCircle, FiList } from 'react-icons/fi';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const valuesRef = useRef(null);

  useEffect(() => {
    gsap.from(valuesRef.current, {
      scrollTrigger: {
        trigger: valuesRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  const values = [
    {
      title: "Impactful Innovations",
      description:
        "Our constructive thinking leads to revolutionary digital solutions, promoting innovative ideas to develop better software products.",
      icon: <FiList className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Client First",
      description:
        "We prioritize clients by continuously adapting to the emerging digital ecosystem, and turning their ideas into scalable software applications.",
      icon: <FiUsers className="w-8 h-8 text-purple-600" />,
    },
    {
      title: "Continuously Improving",
      description:
        "Our teams undergo continuous training and cross-functional learning to stay ahead of the competition with a strategic development approach.",
      icon: <FiTrendingUp className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Accountability",
      description:
        "We transform visions into digital reality through next-gen technology, effective communication, timely execution, and constructive feedback.",
      icon: <FiCheckCircle className="w-8 h-8 text-indigo-600" />,
    },
  ];

  const stats = [
    { number: "13+", label: "Years in Experience" },
    { number: "150+", label: "Full-Time Experts" },
    { number: "98%", label: "On-Time Projects Delivered" },
    { number: "250+", label: "Projects Delivered" },
    { number: "93%", label: "Repeated Client" },
    { number: "15+", label: "Industries Covered" },
  ];

  const leaders = [
    {
      name: "Gaurav Chauhan",
      title: "Chief Executive Officer",
      image: "/gaurav.jpg", // Replace with actual image
    },
    {
      name: "Amit Kumar Pandey",
      title: "Chief Technology Officer",
      image: "/amit.jpg", // Replace with actual image
    },
    {
      name: "Neeraj Kumar",
      title: "Chief Operating Officer",
      image: "/neeraj.jpg", // Replace with actual image
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 py-12 md:py-20 bg-white">
        {/* Text Content */}
        <div className="lg:w-1/2 xl:w-5/12 flex flex-col justify-center space-y-6 md:space-y-8 max-w-xl mx-auto lg:mx-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            We Are{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Alpixn
            </span>
            , Your <br className="hidden sm:block" />
            <span className="text-blue-600">Partner</span> in Advanced IT Solutions
          </h1>

          <p className="text-base sm:text-lg text-gray-700">
            Founded in 2017, Alpixn Technology Pvt Ltd is a premier software development company delivering tailored digital products and software solutions to startups, SMEs, and enterprises worldwide.
          </p>

          <div>
            <button
              type="button"
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-base sm:text-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 xl:w-7/12 relative mt-8 sm:mt-12 lg:mt-0 flex justify-center items-center max-w-3xl w-full">
          <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-blue-200 to-purple-300 rounded-3xl opacity-40 blur-3xl"></div>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border-4 sm:border-8 border-white transform transition-transform duration-700 hover:scale-105 w-full">
            <Image
              src="/aboutpage.png"
              alt="Alpixn Technology Office"
              width={900}
              height={600}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="mt-12 sm:mt-16 flex justify-center px-4 sm:px-6">
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl w-full"
          ref={valuesRef}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white text-center p-4 sm:p-6 md:p-8 rounded-xl shadow-md sm:shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-600">{stat.number}</h3>
              <p className="text-gray-700 text-sm sm:text-base mt-2 sm:mt-3">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-10 sm:mb-14">
            Our Core Values
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 sm:p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4 sm:mb-6 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-gray-100 rounded-full">
                  {value.icon}
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 text-center">
                  {value.title}
                </h2>
                <p className="text-gray-600 text-center text-sm sm:text-base md:text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meet Our Leaders Section */}
      <section className="py-16 sm:py-20 bg-[#ADD8E6] px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              Meet Our Innovative Leaders
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Get acquainted with our leaders whose innovation and intellect are the driving force
              behind the astute status of Alpixn Technologies.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md p-4 flex flex-col items-center transition-shadow duration-300"
              >
                <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden rounded-lg">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={300}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-lg sm:text-xl">{leader.name}</h3>
                  <p className="text-sm sm:text-base text-blue-700 mt-1">{leader.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;