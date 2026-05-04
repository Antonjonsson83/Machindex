import { useEffect, useState } from "react";
import { Showcase } from "./pages/Showcase";

type Theme = "dark" | "light";

export function App() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <Showcase theme={theme} setTheme={setTheme} />;
}
