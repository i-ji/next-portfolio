import { useEffect, useRef } from "react";
import gsap from "gsap";

interface AnimationType {
  subjects: string[];
}

export const useAnimation = ({ subjects }: AnimationType) => {
  const animationFrom = { opacity: 0, y: 10 };
  const animationTo = { opacity: 1, y: 0, duration: 1 };

  const tl = gsap.timeline();
  const didEffect = useRef(false);

  useEffect(() => {
    if (didEffect.current) return;
    didEffect.current = true;

    subjects.forEach((selector, index) => {
      tl.fromTo(
        selector,
        animationFrom,
        animationTo,
        index === 0 ? 0 : "-=0.5"
      );
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useHeroAnimation = () => {
  const tl = gsap.timeline();
  const didEffect = useRef(false);

  useEffect(() => {
    if (didEffect.current) return;
    didEffect.current = true;

    tl.fromTo(
      "#hero",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 3,
        ease: "power4.out",
        backgroundImage: 'url("/img/hero.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    )
      .to("#inner", {
        backgroundColor: "rgba(242,229,213,0.85)",
        duration: 2,
        ease: "power4.out",
      })
      .to(
        "#title",
        {
          opacity: 1,
          stagger: 0.2,
          ease: "bounce.out",
          transform: "translateY(-50%)",
        },
        "-=4"
      )
      .to("#title", { color: "black", duration: 2 }, "-=2")
      .to("#header", {
        transform: " translateY(0)",
        display: "block",
        duration: 1,
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
