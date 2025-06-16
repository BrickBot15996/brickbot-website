"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type PageLoadContextType = {
  isFullyLoaded: boolean;
};

const PageLoadContext = createContext<PageLoadContextType>({
  isFullyLoaded: false,
});

export function PageLoadProvider({ children }: { children: React.ReactNode }) {
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsFullyLoaded(false);

    const onLoad = () => {
      setIsFullyLoaded(true);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }
  }, [pathname]);

  return (
    <PageLoadContext.Provider value={{ isFullyLoaded }}>
      {children}
    </PageLoadContext.Provider>
  );
}

export function usePageLoad() {
  return useContext(PageLoadContext);
}
