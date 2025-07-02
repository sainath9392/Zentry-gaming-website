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
      className="min-h-dvh overflow-x-hidden w-screen relative"
    >
      <div className="min-h-dvh">
        <div className="flex flex-col items-center sm:items-start justify-center sm:justify-start w-full sm:ml-20 mt-52">
          <p className="font-general h-[10px] font-medium ani text-xs uppercase md:text-[8px] sm:ml-4">
            who we are
          </p>
          <AnimatedTitle
            title={"Ze<n>try at a <br />glan<c>e"}
            containerClass="animated-title w-full mt-5 sm:mt-2 z-10"
            color="flex justify-center sm:justify-start md:px-2 text-5xl sm:text-6xl md:text-[90px] ani"
          />
        </div>

        <div className="flex flex-col w-full h-full mt-52 relative">
          <div className="flex justify-between h-[200px] w-[340px] border absolute right-5 border-gray-900 rounded">
            <div className="flex flex-col w-[4px] items-start justify-start mt-2 ml-2">
              <p className="font-general font-medium ani text-xs uppercase md:text-[8px]">
                products
              </p>
              <AnimatedTitle
                title={"4<b>+</b>"}
                containerClass="animated-title z-10 w-full -ml-10"
                color="flex justify-start text-7xl ani"
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
       
        <div className="mt-56 relative h-[200px] overflow-hidden">
          <div className="absolute h-[200px] right-5 w-[200px] bg-[#EDFF66] rounded z-10">
            <p className="font-sans  special-font text-9xl ml-2"><b>30+</b></p>
          </div>
          <p className="font-circular-web text-xs font-semibold z-10 absolute bottom-4 right-10">Partners</p>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
