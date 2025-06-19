import React, { useRef, useState } from "react";

const BentoCard = ({
  src,
  title,
  description,
  conatinerClass,
  isComingSoon,
}) => {
  const videoRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <div
      className="relative size-full cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        className={`absolute left-0 top-0 size-full border-2 border-gray-700 ${conatinerClass}`}
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 max-sm:w-40 ">
        <div>
          <h1 className="bento-title special-font ">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 sm:px-30 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="max-w-md text-blue-50 opacity-50 font-circular-web text-lg">
            Immerse yourself in arich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>

        <div className="border-hsla md:h-[40vh] lg:h-[75vh] relative mb-7 h-  overflow-hidden rounded-md ">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radia<b>n</b>t
              </>
            }
            conatinerClass={"object-cover object-center"}
            description="A cross-platform metagame app, turning your ideas activities across web2 and web3 games into a rewarding adventure."
            isComingSoon
          />
        </div>

        <div className="grid h-[90vh] lg:h-[135vh] xl:h-[165vh] grid-cols-2 grid-rows-3 gap-7 ">
          <div className="bento-tilt_1 row-span-1 col-span-2 max-sm:h-[45vh] md:col-span-1 md:row-span-2">
            <BentoCard
              conatinerClass={"object-cover md:object-fill max-sm:h-[45vh] max-sm:w-[70vw] "}
              src="videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="An anime and gaming-inspired NFT collection - the Ip primed for expansion."
            />
          </div>
          <div className="bento-tilt_1 max-sm:absolute max-sm:left-37 max-sm:top-34  row-span-1 col-span-2 md:col-span-1 ">
            <BentoCard
              src="videos/feature-3.mp4"
              conatinerClass={" object-cover md:object-contain md:object-right  max-sm:h-[25vh] max-sm:w-[55vw]"}
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities"
            />
          </div>
          <div className="bento-tilt_1 max-sm:absolute max-sm:right-20 max-sm:top-26 row-span-1 col-span-2 ms-22 md:col-span-1 md:ms-0">
            <BentoCard
            conatinerClass={"object-cover max-sm:h-[25vh] max-sm:w-[70vw]"}
              src="videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>l
                </>
              }
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
