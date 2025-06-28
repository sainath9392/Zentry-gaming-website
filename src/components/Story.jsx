import React, { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";

const Story = () => {
  const frameRef = useRef(null);

  const handleMouseLeave = () => {
    const element = frameRef.current;

    gsap.to(element, {
      duration: 0.3,
      roatateX: 0,
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
      <section
        id="story"
        data-color="#000000"
        className="min-h-dvh w-screen bg-black text-blue-50"
      >
        <div className="flex size-full flex-col items-center py-10 pb-24">
          <p className="font-general text-sm uppercase md:text-[10px]">
            The multiveral IP game
          </p>
          <div className="relative size-full">
            <AnimatedTitle
              title={"the st<b>o</b>ry of <br />a hidden real<b>m</b>"}
              sectionId="#story"
              containerClass={
                "mt-5 pointer-events-none mix-blend-difference relative z-10"
              }
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
      <section
        id="story"
        data-color="#EDFF66"
        className="relative min-h-dvh w-screen bg-[#EDFF66] text-blue-50"
      >
        <div className="absolute top-5 left-5">
          <AnimatedTitle
            title={"the univ<b>e</b>rse <br />powered by ZE<b>n</b>T"}
            sectionId="#story"
            containerClass={
              "mt-5 pointer-events-none relative z-10"
            }
            color={"text-black text-left"}
          />
        </div>
        <div className="h-[350px]  flex justify-center max-sm:w-full md:absolute bottom-5 right-5 ">
          <video
            className=" h-full w-fit max-sm:mt-100"
            src="/videos/symbol.mp4"
            autoPlay
            loop
            muted
          />
        </div>
      </section>
    </>
  );
};

export default Story;
