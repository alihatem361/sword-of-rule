"use client";
import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  ReactNode,
} from "react";

type TrailerContextValue = {
  isTrailerOpen: boolean;
  setIsTrailerOpen: (open: boolean) => void;
  closeTrailer: () => void;
};

const TrailerContext = createContext<TrailerContextValue | null>(null);

export function TrailerProvider({ children }: { children: ReactNode }) {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  const closeTrailer = useCallback(() => {
    setIsTrailerOpen(false);
  }, []);

  const value = useMemo(() => {
    return {
      isTrailerOpen,
      setIsTrailerOpen,
      closeTrailer,
    };
  }, [isTrailerOpen, setIsTrailerOpen, closeTrailer]);

  return (
    <TrailerContext.Provider value={value}>{children}</TrailerContext.Provider>
  );
}

export function useTrailer() {
  const context = useContext(TrailerContext);
  if (!context) {
    throw new Error("useTrailer must be used within a TrailerProvider");
  }
  return context;
}
