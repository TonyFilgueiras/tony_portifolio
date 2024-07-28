import React from "react";
import { DefaultTheme } from "styled-components";
import { Tecnologies } from "../helpers/TonyTecnologies";

// Define the interface for the theme context properties
interface CurrentThemeContextProps {
  children: React.ReactNode;
}

// Define the interface for the theme context type
interface CurrentThemeContextType {
  theme: DefaultTheme;
  bannerImg: string
  changeTheme: (theme: Tecnologies) => void;
}

// Initial value for the theme context
const initialValue: CurrentThemeContextType = {
  theme: {
    colors: {
      text: "#080808",
      bg: "#d8d8d8",
    },
  },
  bannerImg: "",
  changeTheme: () => {}, // Placeholder function
};

// Create the theme context
const CurrentThemeContext = React.createContext<CurrentThemeContextType>(initialValue);

// Theme context provider component
export const CurrentThemeContextProvider = ({ children }: CurrentThemeContextProps) => {
  const [theme, setTheme] = React.useState<DefaultTheme>(initialValue.theme);
  const [bannerImg, setBannerImg] = React.useState("");

  function changeTheme(newTheme: Tecnologies) {
    setTheme({ colors: { text: newTheme.textColor, bg: newTheme.bgColor } })
    setBannerImg(newTheme.banner)
  }

  // Provide the context value
  const contextValue: CurrentThemeContextType = {
    theme,
    bannerImg,
    changeTheme,
  };

  return <CurrentThemeContext.Provider value={contextValue}>{children}</CurrentThemeContext.Provider>;
};

// Export the theme context
export default CurrentThemeContext;
