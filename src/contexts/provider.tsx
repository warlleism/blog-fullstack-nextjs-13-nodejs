'use client'
import { createContext, useContext, Dispatch, SetStateAction, useState } from 'react';


interface ContextProps {
  reload: boolean,
  setReload: Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<ContextProps>({
  reload: false,
  setReload: (): boolean => false
});

export const GlobalContextProvider = ({ children }) => {

  const [reload, setReload] = useState(false)

  return (
    <GlobalContext.Provider value={{ reload, setReload }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
