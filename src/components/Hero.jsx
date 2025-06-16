import React, { useRef, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const totalVideos = 3;
  const nextVideoRef = useRef(null);

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  const handleVideoload = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const getVideoSrc = (index) => `../../public/videos/hero-${index}.mp4`;
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-x-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 hover:scale-100 hover:opacity-100"
            >
              <video
                loop
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoload}
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 s-ze-64 object-cover object-center"
            onLoadedData={handleVideoload}
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            loop
            autoPlay
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoload}
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 x-40 text-blue-75">
            G<b>a</b>ming
        </h1>
        <div className="absolute top-0 left-0 z-40 size-full">
            <div className="mt-24 px-5 sm:px-10">
                <h1 className="special-font hero-heading text-blue-100">redifi<b>n</b>e</h1>
                <p className="mb-5 max-w-64 font-robert-regular text-blue-100">Enter the Metagame layer <br />
                Unleash the Play Economy</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
