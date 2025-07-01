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

    ScrollTrigger.create({
      trigger: section1,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: () => {
        gsap.to(section1, {
          backgroundColor: color,
          duration: 0,
        });
      },
      onLeave: () => {
        gsap.to(section1, {
          backgroundColor: "#dfdff0",
          duration: 0,
        });
      },
      onEnterBack: () => {
        gsap.to(section1, {
          backgroundColor: color,
          duration: 0,
        });
      },
      onLeaveBack: () => {
        gsap.to(section1, {
          backgroundColor: "#dfdff0",
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
      className="min-h-dvh overflow-y-hidden w-screen sm:pt-45 relative"
    >
      <div className="flex md:absolute md:left-2 flex-col items-center justify-center w-full">
        <AnimatedTitle
          title={"Ze<b>n</b>try at a <br />glan<b>c</b>e"}
          containerClass="animated-title  w-full mt-40 md:mt-20 z-10"
          color={
            "flex justify-center h-[50px] md:h-[80px] md:px-2 sm:text-6xl ani text-5xl md:text-8xl "
          }
        />
      </div>
    </section>
  );
};

export default ShowCase;
