import React, { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";
import Specs from "./Specs";

const Story = () => {
  const frameRef = useRef(null);

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
              color={"flex-center"}
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
            containerClass={"mt-5 pointer-events-none relative z-10 "}
            color={"text-black text-left flex"}
          />
        </div>
        <div className="h-[350px] lg:h-[400px] flex justify-center max-sm:w-full md:absolute bottom-5 right-5  mix-blend-darken  ">
          <video
            className=" h-full w-fit max-sm:mt-55 "
            src="/videos/symbol.mp4"
            autoPlay
            loop
            muted
          />
        </div>
        <div className="flex-col h-[150px] absolute bottom-10 left-10 max-w-md ">
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
