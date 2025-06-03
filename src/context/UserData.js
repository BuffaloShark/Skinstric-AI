// context/UserData.jsx
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [prediction, setPrediction] = useState(null);

  return (
    <UserContext.Provider value={{ name, setName, location, setLocation, prediction, setPrediction }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
