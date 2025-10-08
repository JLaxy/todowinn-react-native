import { darkTheme, lightTheme } from "@/styles/themes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useColorScheme } from "react-native";

type ThemeType = "light" | "dark"; // Possible themes

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
  colors: typeof lightTheme.colors;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
  colors: lightTheme.colors,
}); // Set initial value

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState<ThemeType>(
    scheme === "dark" ? "dark" : "light"
  ); // Set current mode as default

  useEffect(() => {
    AsyncStorage.getItem("theme").then((saved) => {
      if (saved === "dark" || saved === "light") setTheme(saved);
    });
  }, []); // Retrieve current theme saved on storage

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      AsyncStorage.setItem("theme", next);
      return next;
    });
  };

  const value = useMemo(() => {
    const selectedTheme = theme === "light" ? lightTheme : darkTheme;
    return {
      theme,
      toggleTheme,
      colors: selectedTheme.colors,
    };
  }, [theme]); // useMemo to cache data to avoid repeated retrieval of theme

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
