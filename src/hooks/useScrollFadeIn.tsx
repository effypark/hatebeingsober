import {
  useRef,
  useCallback,
  useEffect,
  RefObject,
  CSSProperties,
} from "react";

export interface AnimatedProductsType {
  ref: RefObject<HTMLDivElement>;
  style: CSSProperties;
}

interface IProps {
  direction: "up" | "down" | "left" | "right";
}

export function useScrollFadeIn(
  direction: IProps["direction"]
): AnimatedProductsType {
  const dom = useRef<HTMLDivElement>(null);

  const handleDirection = (name: IProps["direction"]) => {
    switch (name) {
      case "up":
        return "translate3d(0, 50%, 0)";
      case "down":
        return "translate3d(0, -50%, 0)";
      case "left":
        return "translate3d(50%, 0, 0)";
      case "right":
        return "translate3d(-50%, 0, 0)";
      default:
        return "translate3d(0, 50%, 0)";
    }
  };

  const handleScroll: IntersectionObserverCallback = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      const { current } = dom;

      const intersectionRatio = entry.intersectionRatio;

      if (current && (intersectionRatio === 1 || intersectionRatio === 0)) {
        current.style.transitionProperty = "opacity transform";
        current.style.transitionDuration = "2s";
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = "0s";
        current.style.opacity = "1";
        current.style.transform = "none";
      }
    },
    []
  );

  useEffect(() => {
    const { current } = dom;
    if (current) {
      let observer = new IntersectionObserver(handleScroll, {
        threshold: [0, 1],
      });
      observer.observe(current);

      return () => observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    },
  };
}
