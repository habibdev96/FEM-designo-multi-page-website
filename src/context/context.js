import React, { useState, useContext } from 'react';
import {
  linksData,
  homeFeaturesData,
  socialsData,
  webDesignProjectsData,
  appDesignProjectsData,
  graphicDesignProjectsData,
  locationsCtaData,
  locationsData,
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
  const [locationsCta, setLocationsCta] = useState(locationsCtaData);
  const [locations, setLocations] = useState(locationsData);

  return (
    <AppContext.Provider
      value={{
        links,
        homeFeatures,
        socials,
        webDesignProjects,
        appDesignProjects,
        graphicDesignProjects,
        locationsCta,
        locations,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
