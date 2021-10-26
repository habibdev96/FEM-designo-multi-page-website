import React, { useState, useContext } from 'react';
import { linksData, homeFeaturesData } from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [links, setLinks] = useState(linksData);
  const [homeFeatures, setHomeFeatures] = useState(homeFeaturesData);

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <AppContext.Provider value={{ scrollToTop, links, homeFeatures }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
