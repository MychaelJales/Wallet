import React, { createContext, FC, useState } from 'react';

const defaultState = {
  dark: 'false'
};

export const CambiosContext = createContext(defaultState);

export const CambiosProvider: FC = ({ children }) => {
  const [dark, setDark] = useState('false');
  return (
    <CambiosContext.Provider
      value={{
        dark
      }}
    >
      {children}
    </CambiosContext.Provider>
  );
};
