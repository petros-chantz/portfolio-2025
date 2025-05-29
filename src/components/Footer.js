import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const { pathname } = useLocation();

  const navItems = [
    { label: "about", path: "/" },
    { label: "design process", path: "/design-process" },
    { label: "vision", path: "/vision" },
  ];

  return (
    <footer className="fixed bottom-0 z-50 w-full px-4 py-6 transform -translate-x-1/2 left-1/2 max-w-screen backdrop-blur-sm bg-white/30">
      <nav className="flex justify-center space-x-8 text-lg font-medium tracking-wide">
        {navItems.map(({ label, path }) => (
          <Link
            key={path}
            to={path}
            className={`transition-opacity ${
              pathname === path
                ? "opacity-100 text-black"
                : "opacity-60 hover:opacity-90"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
