"use client";
import { createContext, ReactNode, useContext, useState } from "react";

export type NavBarAnimationProps = {
  color: string;
  colorLight: string;
};

type GlobalContextType = {
  navbarAnimation: NavBarAnimationProps;
  setNavbarAnimation: (value: NavBarAnimationProps) => void;
  hideNavbar: boolean;
  setHideNavbar: (value: boolean) => void;
};

const defaultValue: GlobalContextType = {
  navbarAnimation: {
    color: "var(--default-yellow)",
    colorLight: "var(--yellow-gradient-light)",
  },
  setNavbarAnimation: () => {},
  hideNavbar: false,
  setHideNavbar: () => {},
};

const GlobalContext = createContext<GlobalContextType>(defaultValue);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [navbarAnimation, setNavbarAnimation] = useState<NavBarAnimationProps>(
    defaultValue.navbarAnimation
  );

  const [hideNavbar, setHideNavbar] = useState(defaultValue.hideNavbar);

  return (
    <GlobalContext.Provider
      value={{ navbarAnimation, setNavbarAnimation, hideNavbar, setHideNavbar }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
