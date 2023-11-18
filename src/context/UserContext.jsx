"use client";

import { createContext, useState } from "react";



export const ContextMap = createContext({
  alllocation: [],
  setalllocation: () => {},
  location: [],
  setlocation: () => {},
  data: [],
  setData: () => {},
});

export  function FormContex ({ children }) {
  const [location, setLocation] = useState(null);
  const [data, setData] = useState({
    especie: "",
    municipio: "",
    ciudadano: "",
  });
  return (
    <ContextMap.Provider value={{ location, setLocation, data, setData }}>
      {children}
    </ContextMap.Provider>
  );
};


