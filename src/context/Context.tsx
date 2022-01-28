import React, { createContext, FC, useState } from 'react';

/* const defaultState = {
  email: ''
}; */

//Tipando os dados que quero para usuário
type UserType = {
  email: string;
  currencies: Array<string>;
};

//Tipando as Props do contexto
type PropsUserContext = {
  state: UserType;
  setState: React.Dispatch<React.SetStateAction<UserType>>;
};

//Valor default do contexto
const DEFAULT_VALUE = {
  state: {
    email: '',
    currencies: ['']
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setState: () => {} //função de inicialização
};

//criando nosso contexto UserContext
export const CambiosContext = createContext<PropsUserContext>(DEFAULT_VALUE);

export const CambiosProvider: FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  return (
    <CambiosContext.Provider
      value={{
        state,
        setState
      }}
    >
      {children}
    </CambiosContext.Provider>
  );
};
