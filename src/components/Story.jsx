import React, { useLayoutEffect, useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";
import Specs from "./Specs";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const frameRef = useRef(null);
  const sectionsRef = useRef([]);

  useLayoutEffect(() => {
    const section2 = sectionsRef.current[1];
    const color = section2.getAttribute("data-color");
    const section1 = sectionsRef.current[0];

    const color2 = section2.getAttribute("data-color");
    const background = document.getElementById("story-bg");
    const headingWords = section2.querySelectorAll(".animated-word");

    ScrollTrigger.create({
      trigger: section1,
      start: "bottom center",
      end: "top center",
      onEnter: () => {
        gsap.to(background, {
          backgroundColor: color2,
          duration: 0.5,
        });
      },
      onLeaveBack: () => {
        gsap.to(background, {
          backgroundColor: "#000000",
          duration: 0.5,
        });
      },
    });

    ScrollTrigger.create({
      trigger: section2,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: () => {
        gsap.to(section2, {
          backgroundColor: color,
          duration: 0,
        });
        gsap.to(headingWords, { color: "#000000", duration: 0 });
      },
      onLeave: () => {
        gsap.to(section2, {
          backgroundColor: "#000000",
          duration: 0,
        });
        gsap.to(headingWords, { color: "#ffffff", duration: 0 });
      },
      onEnterBack: () => {
        gsap.to(section2, {
          backgroundColor: color,
          duration: 0,
        });
        gsap.to(headingWords, { color: "#000000", duration: 0 });
      },
      onLeaveBack: () => {
        gsap.to(section2, {
          backgroundColor: "#000000",
          duration: 0,
        });
        gsap.to(headingWords, { color: "#ffffff", duration: 0 });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleMouseLeave = () => {
    const element = frameRef.current;
    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  return (
    <>
      <div
        id="story-bg"
        className="fixed top-0 left-0 h-screen w-screen -z-10 transition-colors duration-500"
        style={{ backgroundColor: "#000000" }}
      />
      {/* Section 1: Static Black */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        data-color="#000000"
        className="min-h-dvh w-screen text-blue-50"
        style={{ backgroundColor: "#000000", color: "#ffffff" }}
      >
        <div className="flex size-full flex-col items-center py-10 pb-24">
          <p className="font-general text-sm uppercase md:text-[10px]">
            The multiveral IP game
          </p>
          <div className="relative size-full">
            <AnimatedTitle
              title={"the st<b>o</b>ry of <br />a hidden real<b>m</b>"}
              sectionId="#story"
              containerClass="animated-title mt-5 pointer-events-none mix-blend-difference relative z-10"
              color="flex-center"
            />
            <div className="story-img-container">
              <div className="story-img-mask">
                <div className="story-img-content">
                  <img
                    ref={frameRef}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseLeave}
                    onMouseEnter={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                    src="/img/entrance.webp"
                    alt="entrance"
                    className="object-contain"
                  />
                </div>
              </div>
              <RoundedCorners />
            </div>
          </div>

          <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
            <div className="flex h-full w-fit flex-col items-center md:items-start">
              <p className="max-w-sm mt-3 text-center font-circular-web text-violet-50 md:text-start">
                Where realms converge, lies Zentry and the boundless pillar.
                Discover its secrets and shape your fate amidst infinite
                opportunities.
              </p>
              <Button
                id={"realm-button"}
                title={"discover prologue"}
                containerClass={"mt-5 "}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Color Changing */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        data-color="#EDFF66"
        className="relative min-h-dvh w-screen"
        style={{ backgroundColor: "#000000", color: "#ffffff" }}
      >
        <div className="absolute top-5 left-5">
          <AnimatedTitle
            title={"the univ<b>e</b>rse <br />powered by ZE<b>n</b>T"}
            sectionId="#story-section-2"
            containerClass="animated-title mt-5 pointer-events-none relative z-10"
            color="text-left flex text-white"
          />
        </div>

        <div className="h-[250px] lg:h-[400px] flex justify-center max-sm:w-full md:absolute bottom-5 right-5 mix-blend-darken">
          <video
            className="h-full w-fit max-xs:mt-50 max-sm:mt-55 md:mt-0"
            src="/videos/symbol.mp4"
            autoPlay
            loop
            muted
          />
        </div>

        <div className="flex-col h-[150px] absolute bottom-10 left-10 max-w-md">
          <Specs
            title={"Shaping zentry Collectively"}
            no={"01"}
            context={
              "Participate in governance, influence key decisions in the ever-growing Zentry Universe that is limited only by people's imaginations"
            }
            containerClass={"mb-3"}
          />
          <Specs
            title={"Unlocking Economic Opportunity"}
            no={"02"}
            context={
              "ZENT, a commodity-based currency that unlocks exclusive benefits, airdrops, quotas, and co-creation within and beyond Zentry ecosystem."
            }
            containerClass={"mb-3"}
          />
          <Specs
            title={"Sharing Value Accrued"}
            no={"03"}
            context={
              "ZENT holders thrive as Zentry grows, benefiting from the expansive partnerships, treasury investment and economic activities."
            }
            containerClass={"mb-3"}
          />
        </div>
      </section>
    </>
  );
};

export default Story;
