import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const AnimatedTitle = ({ title, containerClass, color }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });
      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
      });

      return () => ctx.revert();
    }, containerRef);
  }, []);
  return (
    <div
      ref={containerRef}
      className={`animated-title special-font ${containerClass}`}
    >
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className={` max-w-full flex-wrap gap-2 text-5xl md:text-8xl  px-10 md:gap-3 ${color}`}
        >
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className={`animated-word transition-colors duration-500 ${
                color || "text-white"
              }`}
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
