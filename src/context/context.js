import React, { useState, useContext } from 'react';
import {
  linksData,
  homeFeaturesData,
  socialsData,
  webDesignProjectsData,
  appDesignProjectsData,
  graphicDesignProjectsData,
} from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [links, setLinks] = useState(linksData);
  const [homeFeatures, setHomeFeatures] = useState(homeFeaturesData);
  const [socials, setSocials] = useState(socialsData);
  const [webDesignProjects, setWebDesignProjects] = useState(
    webDesignProjectsData
  );
  const [appDesignProjects, setAppDesignProjects] = useState(
    appDesignProjectsData
  );
  const [graphicDesignProjects, setGraphicDesignProjects] = useState(
    graphicDesignProjectsData
  );

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <AppContext.Provider
      value={{
        scrollToTop,
        links,
        homeFeatures,
        socials,
        webDesignProjects,
        appDesignProjects,
        graphicDesignProjects,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
