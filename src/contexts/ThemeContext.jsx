import { createContext, useEffect } from "react";
import { useLocalStorage } from "react-use";

const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "system");

  useEffect(() => {
    const root = document.documentElement;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      if (systemPrefersDark) {
        root.classList.add("dark");
      } else {
        root.classList.add("light");
      }
    } else {
      root.classList.add(theme);
    }

    // listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleThemeChange = e => {
      if (theme === "system") {
        root.classList.remove("light", "dark");

        if (e.matches) {
          root.classList.add("dark");
        } else {
          root.classList.add("light");
        }
      }
    };

    mediaQuery.addEventListener("change", handleThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, [theme]);

  const handleToggleTheme = newTheme => {
    setTheme(newTheme);
  };

  const value = {
    theme,
    toggleTheme: handleToggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
