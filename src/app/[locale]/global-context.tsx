"use client";
import { createContext, ReactNode, useContext, useState } from "react";

export type NavBarAnimationProps = {
  color: string;
  colorLight: string;
};

type GlobalContextType = {
  navbarAnimation: NavBarAnimationProps;
  setNavbarAnimation: (value: NavBarAnimationProps) => void;
};

const defaultValue: GlobalContextType = {
  navbarAnimation: {
    color: "var(--default-yellow)",
    colorLight: "var(--yellow-gradient-light)",
  },
  setNavbarAnimation: () => {},
};

const GlobalContext = createContext<GlobalContextType>(defaultValue);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [navbarAnimation, setNavbarAnimation] = useState<NavBarAnimationProps>(
    defaultValue.navbarAnimation
  );

  return (
    <GlobalContext.Provider value={{ navbarAnimation, setNavbarAnimation }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
