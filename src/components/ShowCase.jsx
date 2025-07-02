import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AnimatedTitle from "./AnimatedTitle";

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
          color: "#dfdff2",
          duration: 0,
        });
      },
      onLeaveBack: () => {
        gsap.to(section1, {
          backgroundColor: "#dfdff0",
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
      className="min-h-dvh overflow-y-hidden overflow-x-hidden w-screen relative"
    >
      <div className="flex flex-col items-center sm:items-start justify-center sm:justify-start w-full sm:ml-20 mt-50">
        <p className="font-general  h-[10px] font-medium ani text-xs uppercase md:text-[8px] sm:ml-4 ">
          who we are
        </p>
        <AnimatedTitle
          title={"Ze<b>n</b>try at a <br />glan<b>c</b>e"}
          containerClass="animated-title  w-full mt-5 sm:mt-2 z-10 "
          color={
            "flex justify-center sm:justify-start  md:px-2 sm:text-6xl ani text-5xl md:text-[90px] "
          }
        />
      </div>
    </section>
  );
};

export default ShowCase;
