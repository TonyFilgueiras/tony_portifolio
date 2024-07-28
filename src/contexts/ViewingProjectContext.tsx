import React from "react";
import { DefaultTheme } from "styled-components";

// Define the interface for the theme context properties
interface ViewingProjectContextProps {
  children: React.ReactNode;
}

// Define the interface for the theme context type
interface ViewingProjectContextType {
  isViewingProject: boolean;
  setIsViewingProject: (isIt: boolean) => void;
}

// Initial value for the theme context
const initialValue: ViewingProjectContextType = {
  isViewingProject: false,
  setIsViewingProject: () => {}, // Placeholder function
};

// Create the theme context
const ViewingProjectContext = React.createContext<ViewingProjectContextType>(initialValue);

// Theme context provider component
export const ViewingProjectContextProvider = ({ children }: ViewingProjectContextProps) => {
  const [isViewingProject, setIsViewingProject] = React.useState(false);

  // Provide the context value
  const contextValue: ViewingProjectContextType = {
    isViewingProject,
    setIsViewingProject,
  };

  return <ViewingProjectContext.Provider value={contextValue}>{children}</ViewingProjectContext.Provider>;
};

// Export the theme context
export default ViewingProjectContext;
