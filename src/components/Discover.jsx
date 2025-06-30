import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "./AnimatedTitle";
import HiddenImage from "./HiddenImage";

gsap.registerPlugin(ScrollTrigger);
const Discover = () => {
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
          backgroundColor: "#EDFF66",
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
          backgroundColor: "#EDFF66",
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
      data-color="#dfdff0"
      className="min-h-dvh overflow-y-hidden w-screen "
      style={{ backgroundColor: "#EDFF66", color: "#ffffff" }}
    >
      <div className="flex-center  w-full">
        <div className="flex-col relative mt-20  sm:mt-0">
          <AnimatedTitle
            title={`We're b<b>u</b>ilding <br />a new    realit<b>y</b> <br />that rew<b>a</b>rds <br />play<b>e</b>rs    and <br />e<b>m</b>powers <br />hu<b>m</b>ans & AI <br />to    thri<b>v</b>e`}
            containerClass="animated-title  w-fit mt-40 md:mt-20 z-10"
            color={"flex justify-center text-black h-[50px] md:h-[80px] md:px-2 sm:text-6xl text-5xl md:text-8xl font-[2000]"}
          />
          <HiddenImage containerClass={"absolute sm:top-59 sm:left-42 md:top-48 md:left-65 md:hover:top-40 md:hover:left-48 border hover:border-2 hover:border-black "} src={'/img/hiddenImg1.webp'} />
          <HiddenImage containerClass={"absolute top-86 left-59  md:top-90 md:left-90 md:hover:top-82 md:hover:left-72 border hover:border-2 hover:border-black"} src={'/img/hiddenImg2.webp'} />
          <HiddenImage containerClass={"absolute sm:bottom-3 sm:left-38 md:left-59 md:hover:-bottom-4 md:hover:left-41 border hover:border-2 hover:border-black "} src={'/img/hiddenImg3.webp'} />
        </div>
      </div>
    </section>
  );
};

export default Discover;
