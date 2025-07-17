import { useEffect, useRef } from "react";

export function useScrollLock(isLocked: boolean) {
  const scrollPosition = useRef(0);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    const scrollbarWidth = window.innerWidth - html.clientWidth;
    const preventTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };

    if (isLocked) {
      scrollPosition.current = window.scrollY;
      body.style.position = "fixed";
      body.style.top = `-${scrollPosition.current}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
      body.style.paddingRight = `${scrollbarWidth}px`;
      html.style.overflow = "hidden";
      document.addEventListener("touchmove", preventTouchMove, {
        passive: false,
      });
    }

    // Always clean up: unlock scroll and remove listeners
    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.paddingRight = "";
      html.style.overflow = "";
      document.removeEventListener("touchmove", preventTouchMove);
      // Only restore scroll if we had locked it
      if (isLocked) {
        window.scrollTo({
          top: scrollPosition.current,
          behavior: "instant" as ScrollBehavior,
        });
      }
    };
  }, [isLocked]);
}
