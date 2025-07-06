import { useEffect, useRef } from "react";

export function useScrollLock(isLocked: boolean) {
  const scrollPosition = useRef(0);

  useEffect(() => {
    if (isLocked) {
      scrollPosition.current = window.scrollY;

      const body = document.body;
      const html = document.documentElement;

      body.style.position = "fixed";
      body.style.top = `-${scrollPosition.current}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";

      html.style.overflow = "hidden";

      const preventTouchMove = (e: TouchEvent) => {
        e.preventDefault();
      };

      document.addEventListener("touchmove", preventTouchMove, {
        passive: false,
      });

      return () => {
        body.style.position = "";
        body.style.top = "";
        body.style.left = "";
        body.style.right = "";
        body.style.width = "";
        html.style.overflow = "";

        document.removeEventListener("touchmove", preventTouchMove);

        window.scrollTo(0, scrollPosition.current);
      };
    }
  }, [isLocked]);
}
