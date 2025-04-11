import { createContext, useContext, useState } from "react";

interface DiscoveryContextType {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const DiscoveryContext = createContext<DiscoveryContextType | undefined>(
  undefined,
);

function DiscoveryProvider({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <DiscoveryContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </DiscoveryContext.Provider>
  );
}

function useDiscoveryContext() {
  const context = useContext(DiscoveryContext);
  if (!context) {
    throw new Error(
      "useDiscoveryContext must be used within an DiscoveryProvider",
    );
  }
  return context;
}

export { DiscoveryProvider, useDiscoveryContext };
