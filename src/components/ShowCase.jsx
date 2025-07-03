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
      className="min-h-[350vh] overflow-hidden w-screen relative"
    >
      <div className="flex flex-col items-center sm:items-start justify-center sm:justify-start w-full sm:ml-20 mt-52">
        <p className="font-general h-[10px] font-medium ani text-xs uppercase md:text-[8px] sm:ml-4">
          who we are
        </p>
        <AnimatedTitle
          title={"Ze<n>try at a <br />glan<b>c</b>e"}
          containerClass="animated-title w-full mt-5 sm:mt-2 z-10"
          color="flex justify-center sm:justify-start md:px-2 text-5xl sm:text-6xl md:text-[90px] ani"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  mx-auto w-[50vw] h-[135vh] xl:h-[145vh] xl:mx-40 gap-7 mt-50">
        
        <div className="flex justify-between row-end-1 h-[200px] w-[340px] border -ms-8 col-span-2 md:col-span-1 border-gray-900 rounded">
          <div className="flex flex-col w-[4px] items-start justify-start mt-2 ml-2">
            <p className="font-general font-medium text-blue-50 text-xs uppercase md:text-[8px]">
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

        <div className="relative col-span-2 md:col-span-1 -ms-25 row-end-4 h-[379px] w-[280px] bg-[#5542FF] rounded-lg  z-10">
          <div className="flex flex-col w-[4px] items-start justify-start mt-2 ml-2">
            <p className="font-circular-web font-medium text-black text-[10px] uppercase ml-3">
              Residents
            </p>
            <p className="font-sans  special-font text-8xl ml-2">
              <b>500k+</b>
            </p>
          </div>
          <img className="absolute top-0 z-10" src="/img/case4.webp" alt="" />
        </div>

        <div className="relative col-span-2 ms-27 md:col-span-1 row-end-2  h-[200px] w-full  overflow-hidden">
          <div className=" h-[200px]  w-[200px] bg-[#EDFF66] rounded z-10">
            <p className="font-sans  special-font text-9xl ml-2">
              <b>30+</b>
            </p>
          </div>
          <p className="font-circular-web text-xs font-semibold z-10 absolute bottom-4 right-10">
            Partners
          </p>
        </div>

         <div className="relative h-60 w-60 ms-18 -mt-3 text-blue-50 row-end-5 border overflow-hidden border-gray-800 rounded-lg col-span-2 md:col-span-1">
          <p className="font-sans special-font norm-heading text-4xl px-2 py-2 uppercase ml-2">
            W<b>O</b>rld-class <br />b<b>a</b>ckers
          </p>
          <p className="font-general uppercase text-blue-50 -mt-0.4 text-[10px] absolute right-5">
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

        <div className="col-span-2 md:col-span-1 -ms-8 row-end-3 h-[380px] w-[290px] bg-[#5542FF] rounded-lg z-10">
          <div className="flex flex-col w-[4px] items-start justify-start mt-2 ml-2">
            <p className="font-circular-web font-medium text-black text-[10px] uppercase ml-3">
              Tresury
            </p>
            <p className="font-sans  special-font text-6xl ml-2">
              <b>150M+</b>
            </p>
          </div>
          <video
            className="w-fit -mt-24 h-[382px]"
            autoPlay
            loop
            muted
            src="/videos/case3.webm"
          />
          <div className="flex justify-around items-center -mt-8">
            <div className="flex justify-between items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-black" />
              <div className="text-[7px] text-blue-100">
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

       

        <div className="relative -mt-3 -ms-25 bg-slate-300 row-end-6 h-[200px] w-[320px] rounded-lg col-span-2 md:col-span-1">
          <div className="flex flex-col items-start justify-start mt-2 ml-2">
            <p className="font-general font-medium text-black text-xs uppercase md:text-[8px]">
              Revenue genrated <br />
              2024
            </p>
            <p className="norm-heading absolute left-5 bottom-0 special-font text-9xl">
              4<b>0M</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
