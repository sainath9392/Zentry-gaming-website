import { useEffect, useRef } from "react";
import gsap from "gsap";

const HiddenImage = ({ containerClass, src }) => {
  const frameRef = useRef(null);
  const pulseTween = useRef(null);

  useEffect(() => {
    if (frameRef.current) {
      pulseTween.current = gsap.to(frameRef.current, {
        scale: 1.3,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    return () => {
      pulseTween.current?.kill();
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

    if (pulseTween.current && !pulseTween.current.isActive()) {
      pulseTween.current.play();
    }
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

    const rotateX = ((y - centerY) / centerY) * -30;
    const rotateY = ((x - centerX) / centerX) * 30;

    // Stop zooming while tilting
    pulseTween.current?.pause();

    gsap.to(element, {
      duration: 0,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  return (
    <div
      ref={frameRef}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseLeave}
      onMouseUp={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={`h-[15px] w-[15px] md:h-[35px] md:w-[35px] object-fill  transition-transform rounded aniBack overflow-hidden  duration-75 cursor-pointer hover:h-[160px] hover:w-[220px] ${containerClass}`}
    >
      <img
        src={src}
        alt=""
        className=" object-cover object-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"
      />
    </div>
  );
};

export default HiddenImage;
