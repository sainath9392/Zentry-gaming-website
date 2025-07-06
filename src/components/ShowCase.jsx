import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AnimatedTitle from "./AnimatedTitle";
import RoundedCorners from "./RoundedCorners";

gsap.registerPlugin(ScrollTrigger);
const ShowCase = () => {
  const sectionsRef = useRef([]);

  useLayoutEffect(() => {
    const section1 = sectionsRef.current[0];
    const color = section1.getAttribute("data-color");
    const para = section1.querySelectorAll(".ani");

    ScrollTrigger.create({
      trigger: section1,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: () => {
        gsap.to(section1, {
          backgroundColor: color,
          duration: 0,
        });
        gsap.to(para, {
          color: "#dfdff0",
          duration: 0,
        });
      },
      onLeave: () => {
        gsap.to(section1, {
          backgroundColor: "#dfdff2",
          duration: 0,
        });
        gsap.to(para, {
          color: "#000000",
          duration: 0,
        });
      },
      onEnterBack: () => {
        gsap.to(section1, {
          backgroundColor: color,
          duration: 0,
        });
        gsap.to(para, {
          color: "#dfdff0",
          duration: 0,
        });
      },
      onLeaveBack: () => {
        gsap.to(section1, {
          backgroundColor: "#dfdff2",
          duration: 0,
        });
        gsap.to(para, {
          color: "#000000",
          duration: 0,
        });
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={(el) => (sectionsRef.current[0] = el)}
      data-color="#000000"
      className="min-h-[350vh] overflow-x-hidden w-screen relative"
    >
      <div className="flex flex-col items-center sm:items-start justify-center sm:justify-start w-full h-fit overflow-hidden sm:ml-20 mt-52 overflow-x-hidden">
        <p className="font-general h-[10px] mb-2 font-medium ani text-xs uppercase md:text-[8px] sm:ml-4">
          who we are
        </p>
        <AnimatedTitle
          title={"Ze<n>try at a <br />glan<b>c</b>e"}
          containerClass="animated-title w-full  sm:-ml-6 md:ml-0 mt-5 sm:mt-2 z-10"
          color="flex justify-center sm:-mt-2 smleading-none sm:justify-start md:px-2 text-5xl sm:text-6xl md:text-7xl ani "
        />
      </div>
      <div className="flex justify-center items-center w-screen overflow-hidden h-fit">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-12 gap-7 w-fit sm:w-fit  mt-50">
          {/* Row 1 - Left */}
          <div className="flex justify-end sm:mt-10 lg:-mt-3 col-span-2 sm:col-span-1 row-end-1 sm:row-span-2 mr-5 ">
            <div className="flex justify-between border h-[200px] w-[350px] sm:w-[350px] border-gray-700 rounded">
              <div className="flex flex-col w-[4px] items-start justify-start mt-2 ml-2">
                <p className="font-general font-medium text-blue-50 text-xs uppercase md:text-[8px]">
                  products
                </p>
                <AnimatedTitle
                  title={"4<b>+</b>"}
                  containerClass="animated-title z-10 w-full -ml-10"
                  color="flex justify-start text-6xl sm:text-5xl lg:text-6xl xl:text-8xl ani"
                />
              </div>
              <video
                className="w-fit object-cover"
                autoPlay
                loop
                muted
                src="/videos/case1.webm"
              />
            </div>
          </div>

          {/* Row 1 - Right */}
          <div className="sm:col-span-1 sm:row-span-2 row-end-4 -mt-5 ml-4">
            <div className="relative h-[379px] w-[280px] sm:h-[300px] sm:w-[220px] md:h-[350px] md:w-[250px] lg:h-[450px] lg:w-[340px] bg-[#5542FF] rounded-sm z-10">
              <div className="flex flex-col w-[4px] items-start justify-start mt-2 ml-2">
                <p className="font-circular-web font-medium text-black text-[10px] uppercase ml-3">
                  Residents
                </p>
                <p className="font-sans special-font text-8xl sm:text-6xl ml-2">
                  <b>500k+</b>
                </p>
              </div>
              <img
                className="absolute top-0 z-10 sm:h-[300px] md:h-[350px] lg:h-[450px]"
                src="/img/case4.webp"
                alt=""
              />
            </div>
          </div>

          {/* Row 2 - Left */}
          <div className="flex justify-end sm:col-span-1 row-end-2 sm:row-span-2 -mr-2">
            <div className="relative rounded-sm h-[180px] w-[180px] sm:h-[145px] sm:w-[145px] md:h-[156px] md:w-[156px] lg:h-[200px] lg:w-[200px] bg-[#EDFF66] z-10 overflow-hidden -mt-3 sm:mt-2 md:mt-5 lg:mt-6">
              <p className="font-sans special-font text-9xl sm:text-7xl lg:text-8xl ml-2">
                <b>30+</b>
              </p>
              <p className="font-circular-web text-xs sm:text-[8px] font-semibold z-10 absolute bottom-4 right-5">
                Partners
              </p>
            </div>
          </div>

          {/* Row 2 - Right */}
          <div className="col-span-2 sm:col-span-1 sm:row-span-3 row-end-5 -ml-8 ">
            <div className="relative h-60 w-60 sm:h-[170px] sm:w-[170px] lg:h-[220px] lg:w-[220px] ms-40 -mt-2 sm:mt-32 md:mt-44 lg:mt-46 border border-gray-700 rounded-lg text-blue-50 z-10">
              <p className="font-sans special-font norm-heading text-4xl sm:text-2xl lg:text-4xl px-2 py-2 leading-none uppercase ml-2">
                W<b>O</b>rld-class <br /> b<b>a</b>ckers
              </p>
              <p className="font-general uppercase text-blue-50 text-[10px] sm:text-[8px] absolute right-5 sm:right-1">
                Coinbase ventures <br />
                yzi labs <br />
                spartan <br />
                longhash <br />
                pantera capital <br />
                animoca brands <br />
                defiance capital <br />
                play ventures <br />
                skyvision capital <br />
                vessel capital <br />
              </p>
            </div>
          </div>

          {/* Left - Treasury */}
          <div className="flex justify-end sm:col-span-1 row-end-3 sm:row-span-2 -mt-3 sm:mt-1 -me-2">
            <div className="sm:h-[450px] sm:w-[340px] bg-[#5542FF] rounded-sm z-10">
              <div className="flex flex-col w-[4px] items-start justify-start mt-2 ml-2">
                <p className="font-circular-web font-medium text-black text-[10px] uppercase ml-3">
                  Treasury
                </p>
                <p className="font-sans special-font text-6xl ml-2">
                  <b>150M+</b>
                </p>
              </div>
              <video
                className="w-full -mt-24 h-[390px]"
                autoPlay
                loop
                muted
                src="/videos/case3.webm"
              />
              <div className="flex justify-around items-center mb-2 sm:mb-0 sm:mt-3">
                <div className="flex justify-between items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-black" />
                  <div className="text-[8px] text-blue-100">
                    <p>LIQUID TOKEN</p>
                    <p>78%</p>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#EDFF66]" />
                  <div className="text-[7px] text-blue-100">
                    <p>INVESTMENTS</p>
                    <p>20%</p>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-100" />
                  <div className="text-[7px] text-blue-100">
                    <p>NFT ASSETS</p>
                    <p>10%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Revenue */}
          <div className="flex justify-start sm:col-span-1 row-end-6 sm:row-span-2 ml-4 -mt-2 sm:mt-64">
            <div className="h-[220px] w-[340px] bg-slate-300 rounded-sm relative ">
              <div className="flex flex-col items-start justify-start mt-2 ml-2">
                <p className="font-general font-medium text-black text-xs uppercase md:text-[8px]">
                  Revenue generated <br /> 2024
                </p>
                <p className="norm-heading absolute left-5 bottom-0 special-font text-9xl z-10">
                  4<b>0M</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
