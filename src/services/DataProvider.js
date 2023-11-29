import React, { useState, useEffect, createContext } from "react";
let apiKey = "5609b3378c50f5eef2bd4474f87f2b3f";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");

  const [dataCurent, setDataCurrent] = useState();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((positions) => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${positions.coords.latitude}&lon=${positions.coords.longitude}&appid=${apiKey}&units=metric`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.cod === 200) {
              setDataCurrent(data);
            }
          });
      });
    }
  }, [lat, lon]);
  return (
    <DataContext.Provider value={{ dataCurent }}>
      {children}
    </DataContext.Provider>
  );
};
