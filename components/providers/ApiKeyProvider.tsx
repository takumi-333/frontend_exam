'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import React from "react";

export const ApiKeyContext = createContext<{
    setState: Dispatch<SetStateAction<string>>;
    state: string;
  }>({
    setState: function () {} as Dispatch<SetStateAction<string>>,
    state: "",
  });
  
  export const useApiKeyContext = () => {
    return useContext(ApiKeyContext);
  };

const ApiKeyProvider = ({children}:{children: ReactNode}) => {
    const [apiKey, setApiKey] = useState<string>("");
    const contextValue = {
        setState: setApiKey,
        state: apiKey,
    }
    return (
        <ApiKeyContext.Provider value={contextValue}>
            {children}
        </ApiKeyContext.Provider>
    );
};

export default ApiKeyProvider;