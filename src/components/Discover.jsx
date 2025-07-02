import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedTitle from "./AnimatedTitle";
import HiddenImage from "./HiddenImage";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);
const Discover = () => {
  const sectionsRef = useRef([]);

  useLayoutEffect(() => {
    const section1 = sectionsRef.current[0];
    const color = section1.getAttribute("data-color");
    const para = section1.querySelectorAll(".ani");
    const para2 = section1.querySelectorAll(".aniBack");

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
          color: "black",
          duration: 0,
        });
        gsap.to(para2, {
          backgroundColor: "black",
          color:"#dfdff0",
          duration: 0,
        });
      },
      onLeave: () => {
        gsap.to(section1, {
          backgroundColor: "#000000",
          duration: 0,
        });
        gsap.to(para, {
          color: "#dfdff0",
          duration: 0,
        });
        gsap.to(para2, {
          backgroundColor: "#dfdff0",
          color:"black",
          duration: 0,
        });
      },
      onEnterBack: () => {
        gsap.to(section1, {
          backgroundColor: color,
          duration: 0,
        });
        gsap.to(para, {
          color: "black",
          duration: 0,
        });
        gsap.to(para2, {
          backgroundColor: "black",
          color:"#dfdff0",
          duration: 0,
        });
      },
      onLeaveBack: () => {
        gsap.to(section1, {
          backgroundColor: "#EDFF66",
          duration: 0,
        });
        gsap.to(para, {
          color: "#000000",
          duration: 0,
        });
        gsap.to(para2, {
          backgroundColor: "#000000",
          color:"black",
          duration: 0,
        });
      },
    });
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
          color: "black",
          duration: 0,
        });
        gsap.to(para2, {
          backgroundColor: "black",

          duration: 0,
        });
      },
      onLeave: () => {
        gsap.to(section1, {
          backgroundColor: "#000000",
          duration: 0,
        });
        gsap.to(para, {
          color: "#dfdff0",
          duration: 0,
        });
        gsap.to(para2, {
          backgroundColor: "#dfdff0",
          color:"black",
          duration: 0,
        });
      },
      onEnterBack: () => {
        gsap.to(section1, {
          backgroundColor: color,
          duration: 0,
        });
        gsap.to(para, {
          color: "black",
          duration: 0,
        });
        gsap.to(para2, {
          backgroundColor: "black",

          duration: 0,
        });
      },
      onLeaveBack: () => {
        gsap.to(section1, {
          backgroundColor: "#dfdff0",
          duration: 0,
        });
        gsap.to(para, {
          color: "#dfdff0",
          duration: 0,
        });
        gsap.to(para2, {
          backgroundColor: "#dfdff0",
          color:"black",
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
      className="min-h-dvh overflow-y-hidden overflow-x-hidden w-screen sm:pt-45"
      style={{ backgroundColor: "#EDFF66", color: "#ffffff" }}
    >
      <div className="flex flex-col justify-center items-center min-h-dvh">
        <div className="flex-center w-full">
          <div className="flex-col relative ">
            <p className="font-general absolute  ani font-medium text-xs uppercase md:text-sm text-center top-32 left-31 sm:left-37 md:top-14 md:left-71 ">
              who we are
            </p>
            <AnimatedTitle
              title={`We're b<b>u</b>ilding <br />a new    realit<b>y</b> <br />that rew<b>a</b>rds <br />play<b>e</b>rs    and <br />e<b>m</b>powers <br />hu<b>m</b>ans & AI <br />to    thri<b>v</b>e`}
              containerClass="animated-title  w-fit mt-40 md:mt-20 z-10"
              color={
                "flex justify-center h-[50px] md:h-[80px] md:px-2 sm:text-6xl ani text-5xl md:text-8xl font-[2000]"
              }
            />
            <HiddenImage
              containerClass={
                "absolute top-58 left-36 hover:top-40 hover:left-20 sm:top-59 sm:left-42 md:top-48 md:left-65 md:hover:top-40 md:hover:left-48 border  hover:border-2 hover:border-black "
              }
              src={"/img/hiddenImg1.webp"}
            />
            <HiddenImage
              containerClass={
                "absolute top-85 left-49.5 hover:top-70 hover:left-40 sm:top-86 sm:left-59  md:top-90 md:left-90 md:hover:top-82 md:hover:left-72 border  hover:border-2 hover:border-black"
              }
              src={"/img/hiddenImg2.webp"}
            />
            <HiddenImage
              containerClass={
                "absolute bottom-5 left-33 hover:left-15 hover:-bottom-7 sm:bottom-3 sm:left-38 md:left-59 md:hover:-bottom-4 md:hover:left-41 border   hover:border-2 hover:border-black "
              }
              src={"/img/hiddenImg3.webp"}
            />
          </div>
        </div>
        <p className="text-center m-auto text-xs font-medium ani font-circular-web mt-10 mb-3 max-w-sm">
          Zentry envisions a future where players, emerging tech, and a new
          economy unite at the convergence of gaming and AI.
        </p>
        <Button
          style={{
            transform: "scale(0.7)",
            transformOrigin: "center",
          }}
          id={"realm-button"}
          title={"discover prologue"}
          containerClass={"px-9 py-3 aniBack mb-5"}
        />
      </div>
    </section>
  );
};

export default Discover;
