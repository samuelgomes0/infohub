"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface DiscoveryContextType {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const DiscoveryContext = createContext<DiscoveryContextType | undefined>(
  undefined,
);

function DiscoveryProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQueryState] = useState<string>("");

  const setSearchQuery = useCallback((value: string) => {
    setSearchQueryState(value);
  }, []);

  return (
    <DiscoveryContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </DiscoveryContext.Provider>
  );
}

function useDiscoveryContext(): DiscoveryContextType {
  const context = useContext(DiscoveryContext);
  if (!context) {
    throw new Error(
      "useDiscoveryContext must be used within a DiscoveryProvider",
    );
  }
  return context;
}

export { DiscoveryProvider, useDiscoveryContext };
