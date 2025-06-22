import React, { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

    const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

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
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 ">
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
      <div className="container mx-auto w-full px-3 md:px-10">
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

        <BentoTilt className="border-hsla relative mb-7 h-96 xl:mx-40 overflow-hidden rouded-md md:h-[65vh] ">
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
        </BentoTilt>

        <div className="grid h-[135vh] xl:h-[145vh] grid-cols-2 grid-rows-3 gap-7 xl:mx-40">
          <BentoTilt className="bento-tilt_1 col-span-2 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              conatinerClass={"object-cover object-center"}
              src="videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="An anime and gaming-inspired NFT collection - the Ip primed for expansion."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 col-span-2 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              conatinerClass={" object-cover object-center"}
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 col-span-2 me-14 md:col-span-1 md:me-0">
            <BentoCard
              conatinerClass={"object-cover boject-center"}
              src="videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>l
                </>
              }
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities"
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2  grid-cols-1 grid-rows-1">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black ">
                M<b>o</b>re <br /> co<b>m</b>ing <br /> s<b>oo</b>n!
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2  grid-cols-1 grid-rows-1">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
