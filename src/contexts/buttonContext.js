import React, { createContext, useState } from "react";
export const buttonContext = createContext();

const ButtonContexts = ({ children }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <buttonContext.Provider value={{ active, handleClick }}>
      {children}
    </buttonContext.Provider>
  );
};

export default ButtonContexts;
