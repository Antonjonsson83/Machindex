import { Routes, Route, NavLink } from "react-router-dom";
import { Layout1 } from "./pages/Layout1";
import { Layout2 } from "./pages/Layout2";
import { Layout3 } from "./pages/Layout3";
import { ThemeToggle } from "./components/ThemeToggle";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between px-4 py-3 border-b border-border">
        <h1 className="font-display font-bold tracking-wide">MACHINDEX</h1>
        <nav className="flex gap-3 text-sm font-mono">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "text-foreground" : "text-muted-foreground"
            }
          >
            01
          </NavLink>
          <NavLink
            to="/2"
            className={({ isActive }) =>
              isActive ? "text-foreground" : "text-muted-foreground"
            }
          >
            02
          </NavLink>
          <NavLink
            to="/3"
            className={({ isActive }) =>
              isActive ? "text-foreground" : "text-muted-foreground"
            }
          >
            03
          </NavLink>
        </nav>
        <ThemeToggle />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Layout1 />} />
          <Route path="/2" element={<Layout2 />} />
          <Route path="/3" element={<Layout3 />} />
        </Routes>
      </main>
    </div>
  );
}
